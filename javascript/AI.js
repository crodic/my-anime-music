var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

var recognition = new SpeechRecognition()

var AI = document.querySelector('.AI')

var aiSpeak = window.speechSynthesis

recognition.lang = 'vi-VI'
recognition.continuous = false

var voices = []
window.speechSynthesis.onvoiceschanged = function(){
    voices = window.speechSynthesis.getVoices()
}
function speak (text){
    if(aiSpeak.speaking){
        console.error('Busy')
        return
    }
    var utter = new SpeechSynthesisUtterance(text)
    utter.voice = voices[6]
    utter.onend = () =>{
        console.log('Kết thúc quá trình trả lời')
    }
    utter.onerror = (err)=>{
        console.log(err)
    }
    aiSpeak.speak(utter)
}

window.addEventListener('load',function(){
    function speak (text){
        if(aiSpeak.speaking){
            console.error('Busy')
            return
        }
        var utter = new SpeechSynthesisUtterance(text)
        utter.voice = voices[8]
        utter.onend = () =>{
            console.log('Kết thúc quá trình trả lời')
        }
        utter.onerror = (err)=>{
            console.log(err)
        }
        aiSpeak.speak(utter)
    }
    speak('Hello Master. Welcome to website My Anime Music')
})
function voice(text){

    //Dừng nhạc
    var makeText = text.toLowerCase()
    if(makeText.includes('gọi hệ thống')){
        if(makeText.includes('chuyển trạng thái trình phát nhạc')){
            var play = document.querySelector('.control-music .play-pause')
            play.click()
            speak('Đã chuyển trạng thái thành công')
        }else if(makeText.includes('chuyển tiếp')){
            var next = document.querySelector('.next i')
            next.click()
            speak('Đã chuyển sang bài nhạc tiếp theo trong danh sách')
        }else if(makeText.includes('lùi về')){
            var prev = document.querySelector('.prev i')
            prev.click()
            speak('Đã lùi về bài nhạc trước đó trong danh sách')
        }else if(makeText.includes('xoá danh sách')){
            var btnDelete = document.querySelector('.delete-music span')
            btnDelete.click()
            speak('Đã xoá thành công. Việc xoá danh sách bằng AI có thể gây ra lỗi hệ thống nhưng không ảnh hưởng tới bạn')
        }else if(makeText.includes('bật chế độ vô tận')){
            var infinity = document.querySelector('.infinity i')
            infinity.click()
            speak('Đã bật chế độ vô tận')
        }else if(makeText.includes('bật chế độ ngẫu nhiên')){
            var repeart = document.querySelector('.random i')
            repeart.click()
            speak('Đã bật chế độ phát ngẫu nhiên')
        }else if(makeText.includes('tìm bài')){
            var nameMusic = makeText.split('bài')[1].trim()
            var searchInput = document.querySelector('form#search input')
            searchInput.value = nameMusic
            var changeEvent = new Event('keyup')
            searchInput.dispatchEvent(changeEvent)
            var musicSearch = document.querySelectorAll('.modal-search .item-search')
            musicSearch[0].click()
            speak('Đã tìm được nhạc yêu cầu của bạn')
        }
    }
    speak('Tôi không thể nhận dạng được giọng nói của bạn hoặc các từ bạn nói không có trong hệ thống. Vui lòng thử lại sao')
    // speak("We can't understand what you say, please say it out loud and say it again")
}



AI.addEventListener('click',function(e){
    e.preventDefault()
    recognition.start()
    AI.querySelector('i').style.color = 'yellow'
})

recognition.onspeechend = () => {
    recognition.stop()
    AI.querySelector('i').style.color = 'var(--active-color)'
}
recognition.onerror = (err) => {
    console.log(err)
}

recognition.onresult = (e) => {
    var text = e.results[0][0].transcript
    voice(text)
}
