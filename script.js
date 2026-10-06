const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventlistener("cick", curtir);
    function curtir(){
<<<<<<< HEAD
        const contador = botaoCurtir.querySelector("span");{
=======
        const contador = botaoCurtir.querySelector("span");{
>>>>>>> e319325d3c8eab5f45984a2dcdbaf51ca5a92316
        if(curtiu === false){
            contador.textContent++;
            curtiu = true;
        } else{
            contador.textContent--;
            curtiu = false;
        }

    }
});
