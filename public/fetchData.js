import { fetchData } from './api.js';

/**
 * データを表示する関数
 * @param {HTMLElement} container - データを表示する要素
 * @param {string} message - 表示するメッセージ
 */
export function updateView(container, message) {
    if (!container) {
        console.error('Container element is missing.');
        return;
    }
    container.textContent = message;
}

/**
 * データを取得し、View を更新する
 * @param {HTMLElement} container - データを表示する要素
 */
export async function handleFetchData(container) {
    try {
        const data = await fetchData(); // Model
        updateView(container, `データ: ${data.message}`); // View
    } catch (error) {
        updateView(container, 'データ取得エラー'); // View
    }
}
