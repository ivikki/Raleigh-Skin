let tabMenu = document.getElementById('tab-menu');
let li = tabMenu.querySelectorAll('li a');
li.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();

        for (let child of el.closest('ul').children) {
            child.classList.remove('active');
        }

        el.parentElement.classList.add('active');

        let tabTarget = el.getAttribute('href');
        let tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        let tab = document.getElementById(tabTarget);
        tab.classList.add('active');
    });
});