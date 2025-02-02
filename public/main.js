import { handleFetchData } from './fetchData.js';

/**
 * アプリの初期化処理
 */
function initApp() {
    console.log('[start initializing]');
    
    // データを表示するコンテナ
    const container = document.getElementById('data-container');

    // データ取得ボタン
    const fetchButton = document.getElementById('fetch-data');
    fetchButton.addEventListener('click', () => handleFetchData(container));

    console.log('[end initializing]');
}

document.addEventListener('DOMContentLoaded', initApp);
