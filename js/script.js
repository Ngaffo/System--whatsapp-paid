document.addEventListener("DOMContentLoaded",function(){

    const contactBtn = document.getElementById("contactBtn");
    const nameInput = document.getElementById("name");

    contactBtn.addEventListener("click",function(){
        if (!nameInput.value){
            alert("veuillez rentrer votre nom.");
            return;
        }

    const number = "237652413361";
    const message = encodeURIComponent(
         `Salut, je m'appelle ${nameInput.value}. Je suis intéressé par le système pour rendre mon groupe Whatsapp payant. Pouvez-vous me montrer une démo?`
    );
   

    const url = `https://wa.me/${number}?text=${message}`;

        window.location.href = url;
    });

});
