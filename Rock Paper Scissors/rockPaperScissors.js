alert('Hoşgeldin oyuncu. Sonuç ekranını görmek için "İncele > Console" bölümünü açınız');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');

const actions = ['Taş', 'Kağıt', 'Makas'];

rock.addEventListener('click', selectionRock);
function selectionRock(){
    play('Taş');
}

paper.addEventListener('click', selectionPaper);
function selectionPaper(){
    play('Kağıt');
}

scissors.addEventListener('click', selectionScissors)
function selectionScissors(){
    play('Makas');
}

function play(action) {
    console.log(action);
    let cpuHand = actions[Math.floor(Math.random() * 3)];

    if(action == 'Taş' && cpuHand == 'Taş'){
        console.log('--Berabere--');        
    } else if(action == 'Taş' && cpuHand == 'Kağıt'){
        console.log('--Kaybettin--');
    } else if(action == 'Taş' && cpuHand == 'Makas'){
        console.log('--Kazandın--');
    } else if(action == 'Kağıt' && cpuHand == 'Taş'){
        console.log('--Kazandın--');        
    } else if(action == 'Kağıt' && cpuHand == 'Kağıt'){
        console.log('--Berabere--');
    } else if(action == 'Kağıt' && cpuHand == 'Makas'){
        console.log('--Kaybettin--');
    } else if(action == 'Makas' && cpuHand == 'Taş'){
        console.log('--Kaybettin--');        
    } else if(action == 'Makas' && cpuHand == 'Kağıt'){
        console.log('--Kazandın--');
    } else if(action == 'Makas' && cpuHand == 'Makas'){
        console.log('--Berabere--');
    }

    console.log(cpuHand);    
}

