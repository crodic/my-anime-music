window.addEventListener('load',function(){
    rangeMusic.value = 0
    displayAlert('Website thuộc bản quyền của Crodic Crystal, vui Lòng không copy dưới mọi hình thức. Hiện web đang trong quá trình code nên chức năng còn hạn chế')
})

var play = document.querySelector('.control-music .play-pause')
var list = document.querySelector('.list-music i')
var contentList = document.querySelector('.list-music .list')
var music = document.querySelector('.control-music .music-source audio')
var imgRotate = document.querySelector('.system-play_music img')
var indexMusic = 0


//Choice Music in topic and Play this music
var itemsPlay = document.querySelectorAll('.content-items .play')
itemsPlay.forEach(function (items) {
    items.addEventListener('click', function () {
        var musicSource = items.parentElement
        var srcMusic = musicSource.querySelector('.music-source audio').src
        var listMusic = document.querySelector('.list-music .list')
        music.src = srcMusic
        displayTimer()
        //Change image in control music
        changeImgControl(musicSource)

        //Create Music and add music on List mini
        var newMusicList = document.createElement('list')
        var nameMusic = musicSource.querySelector('.description span').innerHTML
        var imgMusicInTopic = musicSource.querySelector('.content-items img').src
        newMusicList.innerHTML = `<div class="disk" style='display:flex;'>
                                        <i class="fa-solid fa-compact-disc"></i>
                                        <div class='description' style='margin-left:0.5em;'>
                                            <span>${nameMusic}</span>
                                        </div>
                                    </div>
                                    <div class="status" style='display:none;'>
                                        <img src='./images/equalizer.gif' style='width: 100%;'>
                                    </div>
                                    <div class='music-source'>
                                        <audio src='${srcMusic}'></audio>
                                    </div>
                                    <div class='display-img' style='display:none;'>
                                        <img src='${imgMusicInTopic}' class='change'>
                                    </div>`
        ;

        var checkMusicInList = document.querySelectorAll('.list list') //Select tới nơi chứa từng list Music
        for (var i = 0; i < checkMusicInList.length; i++) { //Duyệt qua từng Music trong list
            var nameInList = document.querySelectorAll('list .disk .description span') //Lấy ra tên music
            if (nameInList[i].innerHTML == nameMusic) { //So sánh tên Music với Music đang thêm vào. Nếu trùng thì phát lại và dừng chương trình
                displayAlert('Bài nhạc đã tồn tại trong play list. Không thể thêm được nữa !!!')
                isPlay=true
                playPauseMusic()
                return
            }
        }
        checkActiveMusic(newMusicList)
        listMusic.append(newMusicList)


        var listMusicAfterAdd = document.querySelectorAll('.list-music .list list')
        indexMusic=listMusicAfterAdd.length-1
        //Change music on List Mini
        var srcInList = document.querySelectorAll('.list list')
        srcInList.forEach(function(src,index) {
            src.addEventListener('click', function () {
                var src1 = this.querySelector('audio')
                music.src = src1.src
                indexMusic=index

                checkActiveMusic(src) //Check Music on Active. If have is remove and add or dont have is add not remove 

                var playPromise = music.play()
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        isPlay=false
                        playPauseMusic()
                        changeImgControl(src)
                    })
                        .catch(error => {
                            return
                        })
                }
            })
        })

        // InfinityAndRepeart(listMusicAfterAdd)
        //Change variable isPlay
        if (isPlay == true) {
            isPlay = false
        }
        displayTimer()
        playPauseMusic()
    })
})

function checkActiveMusic(link){
    var checkActive =document.querySelector('.list list .status.active-music')
    if(checkActive==null){
        link.querySelector('.status').classList.add('active-music')
    }else{
        checkActive.classList.remove('active-music')
        link.querySelector('.status').classList.add('active-music')
    }
}

//Infinity and Repeart
isInfinity = false
isRepeart = false
var infinity = document.querySelector('.infinity i')
var repeart = document.querySelector('.random i')

function statusControl(on){
    if(on==true){
        isInfinity=true
        infinity.style.color = 'red'
        isRepeart=false
        repeart.style.color = 'black'
    }else if(on==false){
        isInfinity=false
        infinity.style.color = 'black'
        isRepeart=true
        repeart.style.color = 'red'
    }
}

infinity.addEventListener('click', function(){
    if(isInfinity==false){
        statusControl(true)
    }else if(isInfinity==true){
        statusControl(false)
    }
})
repeart.addEventListener('click', function(){
    if(isRepeart==false){
        statusControl(false)
    }else if(isRepeart==true){
        statusControl(true)
    }
})

music.addEventListener('ended',endedSong)
function endedSong(){
    var listMusicAfterEnded = document.querySelectorAll('.list-music .list list')
    if(isInfinity==true){
        changeMusic('next')
    }else if(isRepeart==true){
        indexMusic = Math.floor(Math.random()*(listMusicAfterEnded.length))
        changeMusic('next')
    }else if(infinity==false || isRepeart==false){
        isPlay=true
        playPauseMusic()
    }
}







//Funtion changeImg
function changeImgControl(musicSrc) {
    var imgMusic = document.querySelector('.img-music_control img')
    var titleMusic = document.querySelector('.img-music_control .title-music span')
    imgMusic.src = musicSrc.querySelector('img.change').src
    titleMusic.innerHTML = musicSrc.querySelector('.description span').innerHTML
}

//OnClick Next/Prev
var nextMusic = document.querySelector('.next i')
var prevMusic = document.querySelector('.prev i')
nextMusic.addEventListener('click',function(){
    changeMusic('next')
})
prevMusic.addEventListener('click',function(){
    changeMusic('prev')
})
function changeInfomationOnNextOrPrev(number){
    var imagesMusicInList = document.querySelectorAll('.list list .display-img img')
    var titleMusicInList = document.querySelectorAll('.list list .disk span')
    var imagesMusicInControler = document.querySelector('.img-music_control img')
    var titleMusicInControler = document.querySelector('.title-music span')
    imagesMusicInControler.src = imagesMusicInList[number].src
    titleMusicInControler.innerHTML = titleMusicInList[number].innerHTML
}
function changeMusic(direction){
    if(music.play()!==undefined){
        music.play().then(_=>{
            var arrayMusic = document.querySelectorAll('.list list .music-source audio')
            if(direction==='next'){
                indexMusic++
                if(indexMusic>arrayMusic.length-1){
                    indexMusic = 0
                }
                changeInfomationOnNextOrPrev(indexMusic)
                isPlay=false
            }else if(direction==='prev'){
                indexMusic--
                if(indexMusic<0){
                    indexMusic=arrayMusic.length-1
                }
                changeInfomationOnNextOrPrev(indexMusic)
                isPlay=false
            }
            music.load()
            music.src = arrayMusic[indexMusic].src
            var ParentMusic = arrayMusic[indexMusic].parentElement.parentElement
            checkActiveMusic(ParentMusic)
            playPauseMusic()
        })
            .catch(error=>{
                return
            })
    }
}


// Hide/Unhide list music
isHide = true
list.addEventListener("click", function () {
    if (isHide == true) {
        contentList.style.display = 'flex'
        isHide = false
    } else if (isHide == false) {
        contentList.style.display = 'none'
        isHide = true
    }
})

// Play/Pause music
isPlay = false
play.addEventListener('click', playPauseMusic)

function playPauseMusic() {
    if (isPlay == false) {
        if (music.play() !== undefined) { //Nếu xác định bài nhạc để PLAY (Có src trong thẻ audio) 
            music.play().then(_ => {
                //Thì thực hiện code
                music.play()
                play.innerHTML = '<i class="fa-solid fa-pause" title="Tạm Dừng"></i>'
                isPlay = true
                imgRotate.classList.add('active-rotate_img')
                timer = setInterval(displayTimer,500)
            })
                .catch(error => { //Nếu có lỗi thì bắt lỗi và dừng chương trình
                    return
                })
        }
    }
    else if (isPlay == true) {
        if (music.play() !== undefined) {
            music.play().then(_ => {
                music.pause()
                play.innerHTML = '<i class="fa-solid fa-play"></i>'
                isPlay = false
                imgRotate.classList.remove('active-rotate_img')
                clearInterval(timer)
            })
                .catch(error => {
                    return
                })
        }
    }
}

//Display Alert when error
function displayAlert(notice){
    var alert = document.querySelector('.alert .notice-alert .content-alert')
    var displayAlert = document.querySelector('.alert')
    var buttonDisplay = displayAlert.querySelector('.button-alert .select')
    alert.innerHTML = notice
    displayAlert.style.display = 'flex'
    buttonDisplay.addEventListener('click',function(){
        displayAlert.style.display = 'none'
    })
}

//Change Timer and Range Music
var rangeMusic = document.querySelector('.range input')
function displayTimer(){
    var {duration, currentTime} = music
    var endMusic = document.querySelector('.range .started')
    var startMusic = document.querySelector('.range .ended')
    endMusic.textContent = formatTimer(currentTime)
    rangeMusic.max = duration
    rangeMusic.value = currentTime

    if(!duration){
        startMusic.textContent='00:00'
    }else{
        startMusic.textContent=formatTimer(duration)
    }
}

function formatTimer(number){
    var minutes = Math.floor(number / 60) //Phút = max/60 và làm tròn xuống
    var seconds = Math.floor(number - minutes * 60) //Giây = số phút * 60 rồi trừ cho max
    return `${minutes<10 ? '0'+minutes: minutes}:${seconds<10 ? '0'+seconds:seconds}`
}

rangeMusic.addEventListener("change",moveRange)

function moveRange(){
    music.currentTime = rangeMusic.value //Thời gian chạy = giá trị value của range
}

//volume up and volume down
var buttonVolume = document.querySelector('.volume i')
buttonVolume.addEventListener('click',function(){
    setTimeout(function(){
        volumeMusic.style.display='none'
    },10000)
    volumeMusic.style.display='block'
})

var volumeMusic = document.querySelector('.volume input')
volumeMusic.value = 99
volumeMusic.addEventListener('change',function(){
    music.volume = volumeMusic.value / 100
    var changeIcon = document.querySelector('.volume i')
    if(music.volume==0){
        changeIcon.classList.remove('fa-volume-high')
        changeIcon.classList.add('fa-volume-xmark')
    }else if(music.volume > 0){
        changeIcon.classList.remove('fa-volume-xmark')
        changeIcon.classList.add('fa-volume-high')
    }else if (music.volume > 0.9){
        displayAlert('Nghe Nhạc với âm lượng cao sẽ ảnh hưởng tới thính giác của bạn. Hãy cân nhắc trước khi thực hiện hành động này')
    }
})