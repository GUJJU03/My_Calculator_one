document.addEventListener('DOMContentLoaded', function () {
    let btns = document.querySelectorAll('.button');
    let str = "";
    let display = document.querySelector('.display input');

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.target.value === '=') {
                str = eval(str);
                display.value = str;
            }else if (e.target.value === 'DE') {
                str = str.slice(0, -1);
                display.value = str; }
            else if (e.target.value === 'AC') {
                str = "";
                display.value = "";
            } else {
                str = str + e.target.value;
                display.value = str;
            }
        });
    });
});

