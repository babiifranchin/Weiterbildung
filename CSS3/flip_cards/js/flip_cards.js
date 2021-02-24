//wenn das HTML-Dokument vollstaendig geladen ist:
window.addEventListener("load", function() {
    //wenn auf das Element mit der Klasse .flip_action geklickt wird:
    document.getElementById("flip_front").getElementsByClassName("flip_action")[0].addEventListener("click", function(e) {
        //Klasse 'flipped' hinzufuegen:
        document.getElementById("flip_panel").classList.add("flipped");
        //den Links im href-Attribut nicht folgen:
        e.preventDefault();
    });
    
    //Klasse 'flipped' entfernen:
    document.getElementById("flip_back").getElementsByClassName("flip_action")[0].addEventListener("click", function(e) {
        document.getElementById("flip_panel").classList.remove("flipped");
        e.preventDefault();
    });
});
