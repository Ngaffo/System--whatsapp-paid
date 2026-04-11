document.addEventListener("DOMContentLoaded",function(){

    const startBtn = document.getElementById("startPayment");
    const doneBtn = document.getElementById("donePayment");
    const paymentSection = document.getElementById("paymentSection");

    // etpae1: afficher les instructions de paiement

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");

    startBtn.addEventListener("click",function(){
        if (!nameInput.value || !phoneInput.value){
            alert("veuillez remplir vos informations.");
            return;
        }
        paymentSection.style.display = "block";
        startBtn.style.display = "none";

         //scroll smooth
        paymentSection.scrollIntoView({behavior:"smooth"});
    });

   

    //bloquer le bouton pendant 15s seconde
    let timeLet = 15;
    doneBtn.disabled = true;
    const timerMsg = document.getElementById("timerMsg");

    

    const interval = setInterval(()=>{
        timerMsg.textContent = `veillez effectuer le paiement...(${timeLet}s)`;
        doneBtn.textContent = `Attendez ${timeLet}s...`;
        timeLet--;

        if (timeLet < 0){
            clearInterval(interval);
            doneBtn.disabled = false;
            doneBtn.textContent ="cliquez si vous avez terminé";
            timerMsg.textContent = "Vous pouvez maintenant confirmer votre paiement";
        }
    }, 1500);

    //etape2: redirection whatsapp

    doneBtn.addEventListener("click",function(){
        const number = "237650668918";
        const message = encodeURIComponent(
                "Bonjour, je viens d'éffectuer le paiement pour rejoindre le forum.\nNom:${nom}\nTelephone:${phone}\n Voici ma preuve de paiement."
        );

        const url = `https://wa.me/${237650668918}?text=${message}`;

        window.location.href = url;
    });

});
