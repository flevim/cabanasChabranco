
/* 

Verificación de link para iniciar una conversación por whatsapp. 
Aún no encuentro una forma más clean de saber que link ejecutar en contexto 
ya sea movil o de pantalla de pc. Por lo que elementalmente me basaré en el 
tamaño de la pantalla para elegir el link apropiado.
    - Si el tamaño de pantalla es perteneciente a movil o tablet, se iniciará una conversación 
    directamente desde la aplicación. 
    
    - Si el tamaño de pantalla es más grande (notebook o pantallas más grandes), se abrirá 
    whatsapp web para conversar. 
*/ 

$(function(){
    storedLoginLink = $('#whatsapp-btn').attr('href'); 
    console.log(storedLoginLink);  // <----|
    function mobileWhatsappLink(){                          // | 
       var mobLoginLink = 'https://wa.me/56979712334',   // |       
           $loginButton = $('#whatsapp-btn'),      // ---------|
           winwidth = $(window).width();    
 
        if (winwidth < 600) {
            $loginButton.attr('href', mobLoginLink);
            console.log(mobLoginLink);
     
        } else{
            $loginButton.attr('href', storedLoginLink); 
 
        } 
    } 
 
    mobileWhatsappLink();
 
    $(window).resize(mobileWhatsappLink);
 
 
 });