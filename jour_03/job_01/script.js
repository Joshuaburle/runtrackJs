$(document).ready(function() {
    $("#show").click(function() {
        $("#citation").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.").fadeIn();
    });

    $("#hide").click(function() {
        $("#citation").fadeOut();
    });
});
