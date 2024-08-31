function bleachNavbar() {
    const navbar = document.getElementById("navbar");
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = 300; // Maximum scroll height to reach the full bleaching effect

    // Calculate the opacity or background change based on scroll position
    let opacity = 0.8 - (scrollPosition / maxScroll * 0.8);
    let backgroundColor = `rgba(0, 0, 0, ${opacity})`;

    // Apply the calculated styles to the navbar
    navbar.style.backgroundColor = backgroundColor;
}

window.onscroll = function() {
    bleachNavbar();
}