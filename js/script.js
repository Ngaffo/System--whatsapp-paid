document.addEventListener("DOMContentLoaded",function(){

    const startBtn = document.getElementById("startPayment");
    const doneBtn = document.getElementById("donePayment");
    const paymentSection = document.getElementById("paymentSection");
    const timerMsg = document.getElementById("timerMsg");


    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");

    startBtn.addEventListener("click",function(){
        if (!nameInput.value || !phoneInput.value){
            alert("veuillez rentrer vos informations.");
            return;
        }

        paymentSection.style.display = "block";
        startBtn.style.display = "none";
        doneBtn.style.display="block";

        paymentSection.scrollIntoView({behavior:"smooth"})

        //compteur 10s
        let timeLet = 10;
        doneBtn.disabled = true;

        const interval =setInterval(()=>{
            timerMsg.textContent = `Effectuez le paiement ...(${timeLet}s)`;
            doneBtn.textContent = `Attendez ${timeLet}s...`;

            timeLet--;

            if(timeLet < 0){
                clearInterval(interval);
                doneBtn.disabled = false;
                doneBtn.textContent = "Paiement terminé";

                timerMsg.textContent = "Vous pouvez maintenant confirmer votre paiement";
            }
        }, 1000);

    });

    //redirection whatsapp

    doneBtn.addEventListener("click", function(){

        const number = "237650668918";
        const message = encodeURIComponent(
            `Salut, je viens de faire un paiement. \nNom:${nameInput.value}\n Téléphone: ${phoneInput.value}\n Je vous envoie la preuve.`
        );
    

        const url = `https://wa.me/${number}?text=${message}`;

            window.location.href = url;
        });

});
