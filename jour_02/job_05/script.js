window.addEventListener("scroll", function() {
    let footer = document.getElementById("footer");
    
    // Calcul du pourcentage de scroll
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = (scrollTop / docHeight) * 100;

    // Modifier la couleur en fonction du scroll
    let red = Math.min(255, Math.floor((scrollPercent / 100) * 255));
    let blue = 255 - red;
    footer.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
});
