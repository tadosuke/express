/**
 * API からデータを取得する非同期関数。
 * 
 * @returns {Promise<Object>} API から取得した JSON データ
 */
export async function fetchData() {
    try {
        const response = await fetch('/api/data'); // ルート相対パスでアクセス（CORS 回避）
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
