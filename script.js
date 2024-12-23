document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        // 找到對應的內容區域
        const content = button.nextElementSibling;

        // 切換顯示/隱藏狀態
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            button.querySelector('.arrow').textContent = '▼'; // 收起箭頭
        } else {
            content.classList.add('show');
            button.querySelector('.arrow').textContent = '▲'; // 展開箭頭
        }
    });
});
