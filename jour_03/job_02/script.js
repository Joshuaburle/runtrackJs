$(document).ready(function() {
    let puzzle = $("#puzzle");

    // Fonction pour mélanger les images
    $("#shuffle").click(function() {
        let images = puzzle.children();
        images.sort(() => Math.random() - 0.5);
        puzzle.html(images);
    });

    // Rendre les images déplaçables avec jQuery UI
    $("#puzzle").sortable({
        update: function() {
            checkWin();
        }
    });

    // Vérifier si les images sont bien ordonnées
    function checkWin() {
        let correct = true;
        $("#puzzle img").each(function(index) {
            if ($(this).attr("data-order") != index + 1) {
                correct = false;
            }
        });

        if (correct) {
            $("#message").text("Vous avez gagné ! 🎉").css("color", "green");
        } else {
            $("#message").text("Vous avez perdu 😢").css("color", "red");
        }
    }
});
