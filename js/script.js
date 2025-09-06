document.addEventListener('DOMContentLoaded', function() {
    // --- Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.global-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            nav.classList.toggle('open');
        });

        // メニュー内のリンクをクリックしたらメニューを閉じる
        nav.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                hamburger.classList.remove('open');
                nav.classList.remove('open');
            }
        });
    }

    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            item.classList.toggle('open');
        });
    });
});
