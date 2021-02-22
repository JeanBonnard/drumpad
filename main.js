let keys = document.querySelectorAll('.key')
let audios = document.querySelectorAll('audio')

window.addEventListener('keydown',function (e){
    keys.forEach(touche=>{

        if(e.keyCode == touche.dataset.key){
            touche.classList.add('playing','sound')
            touche.addEventListener('transitionend',function(){
                touche.classList.remove('playing','sound')
            })
            audios.forEach(audio=>{
                if(e.keyCode == audio.dataset.key){
                    audio.play()
                }
            })
        }
    })
})

async function beatBox() {
    function simulateKey(number){
        let keyboardEvent = new KeyboardEvent('keydown', {
            keyCode : number
        })
        window.dispatchEvent(keyboardEvent);
    }

    function playBeat(number,time){
        return new Promise(function (resolve,reject){
            setTimeout(function (){
                resolve(simulateKey(number))
            },time)
        })
    }
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)

    await playBeat(65,300)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)
    await playBeat(65,300)
    await playBeat(83,600)
    await playBeat(90,300)
    await playBeat(69,600)
}
