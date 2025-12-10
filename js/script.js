const buttons = document.querySelectorAll('.content-btn');
const contents = document.querySelectorAll('.content-info');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.content;

        buttons.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(id).classList.add('active');
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {

    const elements = document.querySelectorAll(
        'section, .package-card, .benefit-card, .showcase-card, .flow-step, .content-info'
    );

    elements.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
});




