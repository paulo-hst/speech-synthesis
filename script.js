const utterance = new SpeechSynthesisUtterance();
utterance.lang = 'pt-BR'; 
utterance.rate = 1.5; // velocidade de reprodução

function playText(){
    speechSynthesis.speak(utterance);
}

function stopText(){
    speechSynthesis.cancel();   
}

function setText(event){
    utterance.text = event.target.innerText; // Pega o texto da div do HTML
}

function divText(){
    textElement = document.querySelector('.texto');
    textElement.innerText="";
}