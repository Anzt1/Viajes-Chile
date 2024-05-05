var enviarFormulario=$('#enviarFormulario')
$(function(){
    enviarFormulario.click(function(e){
        alert("El formulario fue enviado correctamente...")
    })
    $('.card').click(function(e){
        $('.card-text').toggle();
    })
    // $('#cuadro').focus(function(e){
    //     $(this).css({
    //         border:'3px solid red'
    //     })
    })
})
