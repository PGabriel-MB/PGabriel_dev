function closeDropdowNavbar () {
    let dropdown = document.getElementById('navbarSupportedContent');
    if (dropdown.classList.contains('show')) {
        dropdown.classList.toggle('show');        
    }
}