import { describe, test, expect, vi, afterEach } from 'vitest';
import { fetchData } from '../public/api.js';

describe('fetchData()', () => {
    afterEach(() => {
         // テストケース間で影響が出ないようにモックをリセット
        vi.resetAllMocks();
    });

    test('正常にデータを取得できるか？', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue({ message: 'success' }),
        });

        const data = await fetchData();
        expect(data).toEqual({ message: 'success' });
    });

    test('API がエラーを返した場合に、エラーをスローするか？', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
            status: 500,
        });

        await expect(fetchData()).rejects.toThrow('HTTP error! Status: 500');
    });
});
