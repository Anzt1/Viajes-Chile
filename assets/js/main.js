const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var enviarFormulario=$('#enviarFormulario')
$(function(){
    enviarFormulario.click(function(e){
        alert("El formulario fue enviado correctamente...")
    })
    $('.card').click(function(e){
        $('.card-text').toggle();
    })
})
