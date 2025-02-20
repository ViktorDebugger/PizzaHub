document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector('#menu-open');
    const closeBtn = document.querySelector('#menu-close');

    const menuComputer = document.querySelector("#computer-menu");
    const menuMobile = document.querySelector('#mobile-menu');

    openBtn.addEventListener("click", () => {
        menuComputer.classList.add("hidden");
        menuComputer.classList.remove("flex");

        setTimeout(() => {
            menuMobile.classList.remove("hidden");
            menuMobile.classList.add('active');
        }, 10);
    });

    closeBtn.addEventListener("click", () => {
        menuComputer.classList.remove("hidden");
        menuComputer.classList.add("flex");

        setTimeout(() => {
            menuMobile.classList.add("hidden");
            menuMobile.classList.remove('active');
        }, 10);
    });

    const menuList = document.querySelectorAll('.menu-item');

    menuList.forEach(item => {
        item.addEventListener("click" , (event) => {
            for (let i = 0; i < menuList.length; i++) {
                if (menuList[i].classList.contains('act')) {
                    menuList[i].classList.remove('act');
                    menuList[i].querySelector('div').remove();
                    if (menuList[i] === event.currentTarget) {
                        return;
                    }
                }
            }

            item.classList.add('act');
            const div = document.createElement('div');
            div.classList.add('bg-nav', 'w-[73px]', 'h-[2px]', 'rounded');
            item.appendChild(div);
        });
    });
});