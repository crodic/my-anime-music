var loading = document.querySelector('.loading')
window.addEventListener('load',function(){
    loading.style.display = 'none'
    rangeMusic.value = 0
    displayAlert('Website thuộc bản quyền của Crodic Crystal, vui Lòng không copy dưới mọi hình thức. Các chức năng hoạt động: Tìm kiếm thêm bài nhạc, click vào nhạc bên ngoài, play/pause/next/prev/random/infinity, chuyển bài bằng list Mini')
})

var alertBox = document.querySelector('.alert')
var noticeAlert = document.querySelector('.notice-alert')
alertBox.addEventListener('click',function(e){
    var box = e.target
    if(!noticeAlert.contains(box)){
        alertBox.style.display = 'none'
    }
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

                //Đưa vào 1 Function
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
        //Code cần tối ư. Đưa vào 1 function
        var playPromise = music.play()
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                isPlay=false
                playPauseMusic()
                changeImgControl(dataImage)
            })
                .catch(error => {
                    return
                })
        }
        // playPauseMusic()
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



// Search Data

var dataSearch = [
    {
        topic: 'Sword Art Online',
        srcMusic: './music/ANIMA.mp3',
        srcImg: './images/kirito.jpg',
        title: 'ANIMA',
        voice: 'ReoNA'
    },
    {
        topic: 'Sword Art Online',
        srcMusic: './music/Courage.mp3',
        srcImg: './images/asuna.jpg',
        title: 'Courage',
        voice: 'Haruka Tomatsu'
    },
    {
        topic: 'Sword Art Online',
        srcMusic: './music/Cynthia No Hikari.mp3',
        srcImg: './images/CynthiaSong.jpg',
        title: 'Cynthia No Hikari',
        voice: 'Eri Aoi'
    },
    {
        topic: 'Sword Art Online',
        srcMusic: './music/ignite.mp3',
        srcImg: './images/sinon.webp',
        title: 'Ignite',
        voice: 'Eri Aoi'
    },
    {
        topic: 'Sword Art Online',
        srcMusic: './music/resister.mp3',
        srcImg: './images/eugeo.jpg',
        title: 'Resister',
        voice: 'Eri Aoi'
    },
    {
        topic: 'Sword Art Online',
        srcMusic: './music/SAO_OS.mp3',
        srcImg: './images/SAO_OS.jpg',
        title: 'Longing',
        voice: 'Yuna (AI SAO)'
    },
    {
        topic: 'Sword Art Online',
        srcMusic: './music/SAO_UB.mp3',
        srcImg: './images/SAO_UB.webp',
        title: 'Gyakkyou Spectrum',
        voice: 'ASCA'
    },
    {
        topic: 'Sword Art Online',
        srcMusic: './music/unlasting.mp3',
        srcImg: './images/alice.jpg',
        title: 'Unlasting',
        voice: 'LiSA'
    },
    {
        topic: 'Sword Art Online',
        srcMusic: './music/VITA.mp3',
        srcImg: './images/SAO_UB.webp',
        title: 'VITA',
        voice: 'ReoNA'
    },
    {
        topic: 'Honkai',
        srcMusic: './music/honkai.mp3',
        srcImg: './images/honkai.jpg',
        title: 'TRUE',
        voice: 'Hoàng Linh'
    },
    {
        topic: 'Honkai',
        srcMusic: './music/Moon Halo.mp3',
        srcImg: './images/kiana.png',
        title: 'Moon Halo',
        voice: 'Hanser'
    },
    {
        topic: 'Honkai',
        srcMusic: './music/honkai.mp3',
        srcImg: './images/mobius.jpg',
        title: 'Regression',
        voice: 'Ayanga'
    },
    {
        topic: 'Honkai',
        srcMusic: './music/Rubia.mp3',
        srcImg: './images/rubia.jpg',
        title: 'Rubia',
        voice: 'Châu Thâm'
    },    
    {
        topic: 'Honkai',
        srcMusic: './music/Reunio.mp3',
        srcImg: './images/sivelWing.jpg',
        title: 'Reunio',
        voice: 'Trùng Phùng'
    },
    {
        topic: 'Honkai',
        srcMusic: './music/Dual-Ego.mp3',
        srcImg: './images/raiden.jpg',
        title: 'Dual Ego',
        voice: 'Sa Dingding'
    },
    {
        topic: 'Honkai',
        srcMusic: './music/Starfall.mp3',
        srcImg: './images/kevin.webp',
        title: 'Star Fall',
        voice: 'TIA RAY'
    },
    {
        topic: 'Shadow Garden',
        srcMusic: './music/shadow.mp3',
        srcImg: './images/shadowgardenSong.jpg',
        title: 'HIGHEST',
        voice: 'OxT'
    },
    {
        topic: '86',
        srcMusic: './music/86.mp3',
        srcImg: './images/86.webp',
        title: 'Kyoukaisen',
        voice: 'amazarashi'
    },
    {
        topic: 'Counter Side',
        srcMusic: './music/shadowofmemory.mp3',
        srcImg: './images/shadowMemory.png',
        title: 'Shadow Of Memory',
        voice: 'Bside OST'
    },
    {
        topic: 'Counter Side',
        srcMusic: './music/redbreeze.mp3',
        srcImg: './images/redBreezeSong.jpg',
        title: 'Red Breeze',
        voice: 'Nana Mizuki'
    },
    {
        topic: 'Counter Side',
        srcMusic: './music/Life Begins As Gone.mp3',
        srcImg: './images/rising.jpg',
        title: 'Life Begins As Gone',
        voice: 'Game OST'
    },
    {
        topic: 'Counter Side',
        srcMusic: './music/House Of The Rising Sun.mp3',
        srcImg: './images/house.jpg',
        title: 'House Of The Rising Sun',
        voice: 'Game OST'
    },
    {
        topic: 'Azur Lane',
        srcMusic: './music/graphite.mp3',
        srcImg: './images/GraphiteSong.jpg',
        title: 'Graphite/Diamond',
        voice: 'May'
    },
    {
        topic: 'Accel World',
        srcMusic: './music/AccelWorld.mp3',
        srcImg: './images/accelworld.jpg',
        title: 'Unfinshes',
        voice: 'Eir Aoi'
    },
    {
        topic: 'Rewrite',
        srcMusic: './music/phylosophy.mp3',
        srcImg: './images/PhylosophySong.jpg',
        title: 'Phylosophy',
        voice: 'Game OST'
    },
    {
        topic: 'Fate',
        srcMusic: './music/Phantom Joke.mp3',
        srcImg: './images/honkai.jpg',
        title: 'Phantom Joke',
        voice: 'Eir Aoi'
    },
    {
        topic: 'Fate',
        srcMusic: './music/Cosmos in the Losbelt Maaya Sakamoto.mp3',
        srcImg: './images/cosmos.jpg',
        title: 'Cosmos in the Losbelt',
        voice: 'Maaya Sakamoto'
    },
    {
        topic: 'King Raid',
        srcMusic: './music/elipse.mp3',
        srcImg: './images/eclipseSong.jpg',
        title: 'Eclipse',
        voice: 'DreamCath'
    },
    {
        topic: 'Chaos Child',
        srcMusic: './music/Chaochild.mp3',
        srcImg: './images/chaochild.jpg',
        title: 'Uncontrollable',
        voice: 'いとうかなこ'
    },
    {
        topic: 'Classroom of the elite',
        srcMusic: './music/classroom.mp3',
        srcImg: './images/classroom.jpg',
        title: 'Dancing in the game',
        voice: 'ZAQ'
    },
    {
        topic: 'Honkai',
        srcMusic: './music/Cyberangel.mp3',
        srcImg: './images/cyber-honkai.jpg',
        title: 'Cyberangel',
        voice: 'Hanser'
    },
    {
        topic: 'Fairy Tail',
        srcMusic: './music/fairytail.mp3',
        srcImg: './images/FairySong.jpg',
        title: 'Ashita Wo Narase',
        voice: 'Kavka Shishido'
    },
    {
        topic: 'Naruto',
        srcMusic: './music/naruto.mp3',
        srcImg: './images/narutoSOng.jpg',
        title: 'Opening 21',
        voice: 'Kadokawa'
    },
    {
        topic: 'One Piece',
        srcMusic: './music/onepiece.mp3',
        srcImg: './images/onePieceSong.jpg',
        title: 'Fight Together',
        voice: 'Kadokawa'
    },

]
var searchInput = document.querySelector('form#search input')
var modalSearch = document.querySelector('.modal-search') 

function renderSearch (data){
    var renderHTML = data.map(function(item){
        return `<div class="item-search">
        <i class="fa-brands fa-searchengin"></i>
        <p>${item.title}</p>
        <div style='display: none;' data-music='${item.srcMusic}' data-avatar='${item.srcImg}'></div>
    </div>`
    })
    if(renderHTML.length == 0){
        modalSearch.innerHTML = `<div class="item-search fail">
        <i class="fa-solid fa-circle-exclamation"></i>
        <p>Không tìm thấy kết quả</p>
    </div>`
    }else{
        var newData = renderHTML.join(' ')
        modalSearch.innerHTML = newData
    }
}

searchInput.addEventListener('keyup',function(){
    modalSearch.style.display = 'flex'
    var data = dataSearch.filter(function(item){
        var title = item.title.toUpperCase()
        var searchValue = searchInput.value.toUpperCase()
        if(searchInput.value == ''){
            return false
        }
        if(!title.includes(searchValue)){
            return false
        }
        return true
    })
    renderSearch(data)
    var musicSearch = document.querySelectorAll('.modal-search .item-search')
    
    musicSearch.forEach(function(item){
        item.addEventListener('click',function(){
            var data = this.querySelector('div')
            var dataTitle = this.querySelector('p').innerHTML
            var dataMusic = data.dataset.music
            var dataImage = data.dataset.avatar
            var playListMusic = document.querySelector('.list-music .list')
            var newMusicList = document.createElement('list')
            newMusicList.innerHTML = `<div class="disk" style='display:flex;'>
                                            <i class="fa-solid fa-compact-disc"></i>
                                            <div class='description' style='margin-left:0.5em;'>
                                                <span>${dataTitle}</span>
                                            </div>
                                        </div>
                                        <div class="status" style='display:none;'>
                                            <img src='./images/equalizer.gif' style='width: 100%;'>
                                        </div>
                                        <div class='music-source'>
                                            <audio src='${dataMusic}'></audio>
                                        </div>
                                        <div class='display-img' style='display:none;'>
                                            <img src='${dataImage}' class='change'>
                                        </div>`
            ;
            var checkMusicInList = document.querySelectorAll('.list list') //Select tới nơi chứa từng list Music
            for (var i = 0; i < checkMusicInList.length; i++) { //Duyệt qua từng Music trong list
                var nameInList = document.querySelectorAll('list .disk .description span') //Lấy ra tên music
                if (nameInList[i].innerHTML == dataTitle) { //So sánh tên Music với Music đang thêm vào. Nếu trùng thì phát lại và dừng chương trình
                    displayAlert('Bài nhạc đã tồn tại trong play list. Không thể thêm được nữa !!!')
                    isPlay=true
                    playPauseMusic()
                    return
                }
            }
            checkActiveMusic(newMusicList)
            playListMusic.append(newMusicList)

            var playMusicInSystemAudio = document.querySelector('.control-music .music-source audio')
            var playMusicInSystemImg = document.querySelector('.img-music_control img')
            var playMusicInSystemTitle = document.querySelector('.img-music_control .title-music span')
            playMusicInSystemImg.src = dataImage
            playMusicInSystemAudio.src = dataMusic
            playMusicInSystemTitle.innerHTML = dataTitle
            var playPromise = music.play()
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    isPlay=false
                    playPauseMusic()
                    changeImgControl(dataImage)
                })
                    .catch(error => {
                        return
                    })
            }

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

        })
        if (isPlay == true) {
            isPlay = false
        }
        displayTimer()
        playPauseMusic()
    })
})

var container = document.querySelector('#container')
container.addEventListener('click',function(e){
    var thisBox = e.target
    if(!modalSearch.contains(thisBox)){
        modalSearch.style.display = 'none'
        searchInput.value = ''
    }
})
