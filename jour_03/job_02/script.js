$(document).ready(function() {
    // Pour déplacer les images
    $("#sortable").sortable();
    $("#sortable").disableSelection();

    // Fonction pour mélanger les images
    $("#shuffle").click(function() {
        let items = $("#sortable").children();
        items.sort(function() { return 0.5 - Math.random(); });
        $("#sortable").empty().append(items);
    });

    // // Vérifie si les images sont dans l'ordres
    $("#sortable").on("sortupdate", function() {
        let correctOrder = ["1", "2", "3", "4", "5", "6"];
        let userOrder = $("#sortable").children().map(function() {
            return this.id;
        }).get();

        if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
            $("#resultat").text("✅ Vous avez gagné !").css("color", "green");
        } else {
            $("#resultat").text("❌ Vous avez perdu !").css("color", "red");
        }
    });
});
