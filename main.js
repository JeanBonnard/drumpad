let keys = document.querySelectorAll('.key')
let audios = document.querySelectorAll('audio')

window.addEventListener('keydown',function (e){

    keys.forEach(touche=>{
        if(e.keyCode == touche.dataset.key){
            touche.classList.add('playing','sound')

            audios.forEach(audio=>{
                if(e.keyCode == audio.dataset.key){
                    audio.play()
                }
            })
        }
    })
})
window.addEventListener('keyup',function (e){

    keys.forEach(touche=>{
        if(e.keyCode == touche.dataset.key){
            touche.classList.remove('playing','sound')

            audios.forEach(audio=>{
                if(e.keyCode == audio.dataset.key){
                    audio.pause()
                    audio.currentTime = 0;
                }
            })
        }
    })
})
