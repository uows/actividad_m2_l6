$(document).ready(function(){

    // Cambiar color de texto de los elementos
    $("#miLista li").css("color", "blue");

    // Agregar cuarto elemento dinámicamente
    $("#miLista").append(
        "<li class='list-group-item'>Elemento 4 (Agregado con jQuery)</li>"
    );

    // Evento ocultar / mostrar lista
    $("#toggleBtn").click(function(){
        $("#miLista").toggle();

        if($("#miLista").is(":visible")){
            $(this).text("Ocultar lista");
        } else {
            $(this).text("Mostrar lista");
        }
    });

});