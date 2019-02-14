// IIFE -- Immediately Invoked Function Express
(function(){
    function Start() {
        console.log(`%c App Started...`, 
        "font-size: 20px; color: Red; font-weight: bold;");
    }

    window.addEventListener("load", Start);
})();