document.addEventListener('DOMContentLoaded', function() {
    // 事件一：導航欄連結點擊事件
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            alert('導航到 ' + event.target.textContent);
        });
    });

    // 事件二：表單提交事件（假設有聯絡表單）
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('表單已提交');
        });
    }

    // 事件三：鼠標懸停事件
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = 'yellow';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });
    });
});
