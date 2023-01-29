var buttonTopics = document.querySelectorAll('.button-topic ul li')
var checkAll = document.querySelector('.button-topic .check-all')
var contentTopics = document.querySelectorAll('.main-content_topic .content-wrap') // => Array
var itemsMusic = document.querySelectorAll('.content-wrap .content-items')

//Change Months in button
var buttonMonths = document.querySelectorAll('.button-topic ul li span')
var getMonths = new Date().getMonth() + 1
var arrayMonths = [getMonths-(buttonMonths.length-1), getMonths-(buttonMonths.length-2), getMonths-(buttonMonths.length-3), getMonths]
arrayMonths.forEach(function(month,index){
    if(month<1){
        month = 12 + month
    }else{
        month = 1
    }
    buttonMonths[index].innerHTML = month
})

//Select content
buttonTopics.forEach(function(topic,index){
    topic.addEventListener('click', function(){
        var content = contentTopics[index] // Content in Array a click

        //remove class on click
        document.querySelector('.button-topic ul li.active-topic').classList.remove('active-topic')
        document.querySelector('.main-content_topic .active-content_topic').classList.remove('active-content_topic')

        //add class on click
        content.classList.add('active-content_topic')
        topic.classList.add('active-topic')
    })
})
var wrapper = document.querySelectorAll('.content-wrap')
var dataSystem = [
    {
        id: 1,
        source: './images/resisterSong.jpg',
        music: './music/resister.mp3',
        title: 'Resister',
        actor: 'ASCA'
    },
    {
        id: 2,
        source: './images/EclipseSong.jpg',
        music: './music/eclipse.mp3',
        title: 'Eclipse',
        actor: 'Dreamcatcher(드림캐쳐)'
    },
    {
        id: 3,
        source: './images/FairySong.jpg',
        music: './music/fairytail.mp3',
        title: 'Ashita Wo Narase',
        actor: 'Kavka Shishido'
    },
    {
        id: 4,
        source: './images/GraphiteSong.jpg',
        music: './music/graphite.mp3',
        title: 'Graphite/Diamond',
        actor: 'May'
    },
    {
        id: 5,
        source: './images/narutoSong.jpg',
        music: './music/naruto.mp3',
        title: 'Naruto Opening 21',
        actor: 'Undefine'
    },
    {
        id: 6,
        source: './images/PhylosophySong.jpg',
        music: './music/phylosophy.mp3',
        title: 'Philosophyz',
        actor: 'Runa Mizutani'
    },
    {
        id: 7,
        source: './images/redBreezeSong.jpg',
        music: './music/redbreeze.mp3',
        title: 'Red Breeze',
        actor: 'Mizuki Nana'
    },
    {
        id: 8,
        source: './images/onePieceSong.jpg',
        music: './music/onepiece.mp3',
        title: 'Fight Together',
        actor: 'Undefine'
    },
    {
        id: 9,
        source: './images/CynthiaSong.jpg',
        music: './music/music1.mp3',
        title: 'Cynthia No Hikari',
        actor: 'Eir Aoi'
    },
    {
        id: 10,
        source: './images/RezeroSong.jpg',
        music: './music/music3.mp3',
        title: 'Relize',
        actor: 'ASCA'
    },
    {
        id: 11,
        source: './images/rosarioSong.jpg',
        music: './music/music2.mp3',
        title: 'Rosario To Vampire',
        actor: 'Eir Aoi'
    },
    {
        id: 12,
        source: './images/shadowgardenSong.jpg',
        music: './music/shadow.mp3',
        title: 'HIGHEST',
        actor: 'OxT'
    },
    {
        id: 13,
        source: './images/HoshiyumeFate.webp',
        music: './music/fate.mp3',
        title: 'Hoshi ga Furu Yume',
        actor: 'Eir Aoi'
    },
    {
        id: 14,
        source: './images/innocence.jpg',
        music: './music/INNOCENCE.mp3',
        title: 'Innocence',
        actor: 'Eir Aoi'
    },
    {
        id: 15,
        source: './images/honkai.jpg',
        music: './music/honkai.mp3',
        title: 'True',
        actor: 'Isabelle Huang (黄龄 / Hoàng Linh)'
    },
    {
        id: 16,
        source: './images/86.webp',
        music: './music/86.mp3',
        title: 'Eighty Six',
        actor: 'undefine'
    },
    {
        id: 17,
        source: './images/classroom.jpg',
        music: './music/classroom.mp3',
        title: 'Dancing in the game',
        actor: 'undefine'
    },
    {
        id: 18,
        source: './images/chaochild.jpg',
        music: './music/Chaochild.mp3',
        title: 'Chao`s Child',
        actor: 'undefine'
    },
    {
        id: 19,
        source: './images/sukasuka.png',
        music: './music/sukasuka.mp3',
        title: 'Suka Suka',
        actor: 'undefine'
    },
    {
        id: 20,
        source: './images/SAO_OS.jpg',
        music: './music/SAO_OS.mp3',
        title: 'Sword Art Online OS',
        actor: 'Haruna'
    },
    {
        id: 21,
        source: './images/SAO_UB.webp',
        music: './music/SAO_UB.mp3',
        title: 'Sword Art Online UB',
        actor: 'Eir Aoi'
    },
    {
        id: 22,
        source: './images/accelworld.jpg',
        music: './music/AccelWorld.mp3',
        title: 'unfinessed',
        actor: 'Eir Aoi'
    },
]
var dataShow = 12
function shuffleArray(array) { //Xáo trộn 1 mảng data
    for (var i = array.length-1; i > 0; i--) { //Bắt đầu từ phần tử kế cuối cùng
        var j = Math.floor(Math.random() * (i + 1)); //j dùng để lấy index random
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function randomValue(){
    var randomValue1 = Math.floor(Math.random() * (dataSystem.length) + 1)
    console.log(randomValue1)
    return randomValue1
}
var data1 = dataSystem.slice()
shuffleArray(data1)
var newData1 = data1.slice(dataSystem.length - dataShow)

var data2 = dataSystem.slice()
shuffleArray(data2)
var newData2 = data2.slice(dataSystem.length - dataShow)

var data3 = dataSystem.slice()
shuffleArray(data3)
var newData3 = data3.slice(dataSystem.length - dataShow)
var data4 = dataSystem.slice()
shuffleArray(data4)
var newData4 = data4.slice(dataSystem.length - dataShow)



//Render Topic and Play Music
var render = newData1.map(function (element) { //Render Topic
    return `<div class="content-items">
    <img src="${element.source}" alt="${element.title}" class='change'>
    <div class="description">
        <span>${element.title}</span>
        <p>Voice: ${element.actor}</p>
    </div>
    <div class="play">
        <i class="fa-solid fa-play"></i>
    </div>
    <div class='music-source'>
        <audio src='${element.music}'></audio>
    </div>
</div>`
})
var render1 = newData2.map(function (element) { //Render Topic
    return `<div class="content-items">
    <img src="${element.source}" alt="${element.title}" class='change'>
    <div class="description">
        <span>${element.title}</span>
        <p>Voice: ${element.actor}</p>
    </div>
    <div class="play">
        <i class="fa-solid fa-play"></i>
    </div>
    <div class='music-source'>
        <audio src='${element.music}'></audio>
    </div>
</div>`
})
var render2 = newData3.map(function (element) { //Render Topic
    return `<div class="content-items">
    <img src="${element.source}" alt="${element.title}" class='change'>
    <div class="description">
        <span>${element.title}</span>
        <p>Voice: ${element.actor}</p>
    </div>
    <div class="play">
        <i class="fa-solid fa-play"></i>
    </div>
    <div class='music-source'>
        <audio src='${element.music}'></audio>
    </div>
</div>`
})
var render3 = newData4.map(function (element) { //Render Topic
    return `<div class="content-items">
    <img src="${element.source}" alt="${element.title}" class='change'>
    <div class="description">
        <span>${element.title}</span>
        <p>Voice: ${element.actor}</p>
    </div>
    <div class="play">
        <i class="fa-solid fa-play"></i>
    </div>
    <div class='music-source'>
        <audio src='${element.music}'></audio>
    </div>
</div>`
})
var newRender = render.join(' ') // Delete ' , ' in Array
var newRender1 = render1.join(' ') // Delete ' , ' in Array
var newRender2 = render2.join(' ') // Delete ' , ' in Array
var newRender3 = render3.join(' ') // Delete ' , ' in Array

// Add Render on wrapper
wrapper.forEach(function (content, index) {
    if (index == wrapper.length - wrapper.length) {
        var creItems = document.createElement('div')
        creItems.classList.add('content-topic')
        creItems.innerHTML = newRender // Tag farther add tag children
        content.append(creItems) //
    }
    if (index == wrapper.length - 3) {
        var creItems = document.createElement('div')
        creItems.classList.add('content-topic')
        creItems.innerHTML = newRender1 // Tag farther add tag children
        content.append(creItems) //
    }
    if (index == wrapper.length - 2) {
        var creItems = document.createElement('div')
        creItems.classList.add('content-topic')
        creItems.innerHTML = newRender2 // Tag farther add tag children
        content.append(creItems) //
    }
    if (index == wrapper.length - 1) {
        var creItems = document.createElement('div')
        creItems.classList.add('content-topic')
        creItems.innerHTML = newRender3 // Tag farther add tag children
        content.append(creItems) //
    }
})