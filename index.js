const menuLists = document.querySelectorAll(".menu-list");
if (window.innerWidth <= 992) {
        menuLists.forEach(menuList => {
            const hoverBtn = menuList.querySelector('.hover-menu');
            const dropdown = menuList.querySelector(".dropdown");
            hoverBtn.addEventListener('click', () => {
                dropdown.classList.toggle("d-none");
                dropdown.style.zIndex="1";
                dropdown.style.position="relative";
            });
        });
}
else{
    menuLists.forEach(menuList => {
        const hoverBtn = menuList.querySelector('.hover-menu');
        const dropdown = menuList.querySelector(".dropdown");
    
        hoverBtn.addEventListener('mouseover', () => {
            dropdown.classList.add("d-flex");
            dropdown.classList.remove("d-none");
        });
    
        dropdown.addEventListener('mouseleave', () => {
            dropdown.classList.add("d-none");
            dropdown.classList.remove("d-flex");
        });
    });

}