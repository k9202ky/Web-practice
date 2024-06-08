document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            alert('導航到 ' + event.target.textContent);
        });
    });

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const formDataJSON = {};
            formData.forEach((value, key) => {
                formDataJSON[key] = value;
            });
            alert('表單已提交成功！');
        });
    }
    
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = 'yellow';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });
    });
});
