var buttonTopics = document.querySelectorAll('.button-topic ul li')
var checkAll = document.querySelector('.button-topic .check-all')
var contentTopics = document.querySelectorAll('.main-content_topic .content-wrap') // => Array
var itemsMusic = document.querySelectorAll('.content-wrap .content-items')

var dataSearchCollection = [
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/iris.mp3',
        srcImg: './images/iris.jpg',
        title: 'Iris',
        voice: 'Eir Aoi'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/ANIMA.mp3',
        srcImg: './images/kirito.jpg',
        title: 'ANIMA',
        voice: 'ReoNA'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/Courage.mp3',
        srcImg: './images/asuna.jpg',
        title: 'Courage',
        voice: 'Haruka Tomatsu'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/Cynthia No Hikari.mp3',
        srcImg: './images/CynthiaSong.jpg',
        title: 'Cynthia No Hikari',
        voice: 'Eir Aoi'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/ignite.mp3',
        srcImg: './images/sinon.webp',
        title: 'Ignite',
        voice: 'Eir Aoi'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/resister.mp3',
        srcImg: './images/eugeo.jpg',
        title: 'Resister',
        voice: 'Eir Aoi'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/SAO_OS.mp3',
        srcImg: './images/SAO_OS.jpg',
        title: 'Longing',
        voice: 'Yuna (AI SAO)'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/SAO_UB.mp3',
        srcImg: './images/SAO_UB.webp',
        title: 'Gyakkyou Spectrum',
        voice: 'ASCA'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/unlasting.mp3',
        srcImg: './images/alice.jpg',
        title: 'Unlasting',
        voice: 'LiSA'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/VITA.mp3',
        srcImg: './images/SAO_UB.webp',
        title: 'VITA',
        voice: 'ReoNA'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/honkai.mp3',
        srcImg: './images/honkai.jpg',
        title: 'TRUE',
        voice: 'Hoàng Linh'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Moon Halo.mp3',
        srcImg: './images/kiana.png',
        title: 'Moon Halo',
        voice: 'Hanser'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/honkai.mp3',
        srcImg: './images/mobius.jpg',
        title: 'Regression',
        voice: 'Ayanga'
    },
    {
        collection: './music/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Rubia.mp3',
        srcImg: './images/rubia.jpg',
        title: 'Rubia',
        voice: 'Châu Thâm'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Reunio.mp3',
        srcImg: './images/sivelWing.jpg',
        title: 'Reunio',
        voice: 'Trùng Phùng'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Dual-Ego.mp3',
        srcImg: './images/raiden.jpg',
        title: 'Dual Ego',
        voice: 'Sa Dingding'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Starfall.mp3',
        srcImg: './images/kevin.webp',
        title: 'Star Fall',
        voice: 'TIA RAY'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Shadow Garden',
        srcMusic: './music/shadow.mp3',
        srcImg: './images/shadowgardenSong.jpg',
        title: 'HIGHEST',
        voice: 'OxT'
    },
    {
        collection: './images/collection86.jpg',
        topic: '86',
        srcMusic: './music/86.mp3',
        srcImg: './images/86.webp',
        title: 'Kyoukaisen',
        voice: 'amazarashi'
    },
    {
        collection: './images/collectionCounter.webp',
        topic: 'Counter Side',
        srcMusic: './music/shadowofmemory.mp3',
        srcImg: './images/shadowMemory.png',
        title: 'Shadow Of Memory',
        voice: 'Bside OST'
    },
    {
        collection: './images/collectionCounter.webp',
        topic: 'Counter Side',
        srcMusic: './music/redbreeze.mp3',
        srcImg: './images/redBreezeSong.jpg',
        title: 'Red Breeze',
        voice: 'Nana Mizuki'
    },
    {
        collection: './images/collectionCounter.webp',
        topic: 'Counter Side',
        srcMusic: './music/Life Begins As Gone.mp3',
        srcImg: './images/rising.jpg',
        title: 'Life Begins As Gone',
        voice: 'Game OST'
    },
    {
        collection: './images/collectionCounter.webp',
        topic: 'Counter Side',
        srcMusic: './music/House Of The Rising Sun.mp3',
        srcImg: './images/house.jpg',
        title: 'House Of The Rising Sun',
        voice: 'Game OST'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Azur Lane',
        srcMusic: './music/graphite.mp3',
        srcImg: './images/GraphiteSong.jpg',
        title: 'Graphite/Diamond',
        voice: 'May'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Accel World',
        srcMusic: './music/AccelWorld.mp3',
        srcImg: './images/accelworld.jpg',
        title: 'Unfinshes',
        voice: 'Eir Aoi'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Rewrite',
        srcMusic: './music/phylosophy.mp3',
        srcImg: './images/PhylosophySong.jpg',
        title: 'Phylosophy',
        voice: 'Game OST'
    },
    {
        collection: './images/collectionFate.jpg',
        topic: 'Fate',
        srcMusic: './music/Phantom Joke.mp3',
        srcImg: './images/cosmos.jpg',
        title: 'Phantom Joke',
        voice: 'Eir Aoi'
    },
    {
        collection: './images/collectionFate.jpg',
        topic: 'Fate',
        srcMusic: './music/Cosmos in the Losbelt Maaya Sakamoto.mp3',
        srcImg: './images/cosmos.jpg',
        title: 'Cosmos in the Losbelt',
        voice: 'Maaya Sakamoto'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'King Raid',
        srcMusic: './music/elipse.mp3',
        srcImg: './images/eclipseSong.jpg',
        title: 'Eclipse',
        voice: 'DreamCath'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Chaos Child',
        srcMusic: './music/Chaochild.mp3',
        srcImg: './images/chaochild.jpg',
        title: 'Uncontrollable',
        voice: 'いとうかなこ'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Classroom of the elite',
        srcMusic: './music/classroom.mp3',
        srcImg: './images/classroom.jpg',
        title: 'Dancing in the game',
        voice: 'ZAQ'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Cyberangel.mp3',
        srcImg: './images/cyber-honkai.jpg',
        title: 'Cyberangel',
        voice: 'Hanser'
    },
    {
        collection: './images/collectionFairy.jpg',
        topic: 'Fairy Tail',
        srcMusic: './music/fairytail.mp3',
        srcImg: './images/FairySong.jpg',
        title: 'Ashita Wo Narase',
        voice: 'Kavka Shishido'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Naruto',
        srcMusic: './music/naruto.mp3',
        srcImg: './images/narutoSOng.jpg',
        title: 'Opening 21',
        voice: 'Kadokawa'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'One Piece',
        srcMusic: './music/onepiece.mp3',
        srcImg: './images/onePieceSong.jpg',
        title: 'Fight Together',
        voice: 'Kadokawa'
    },

]
//Change Months in button
var buttonMonths = document.querySelectorAll('.button-topic ul li span')
var getMonths = new Date().getMonth() + 1
var arrayMonths = [getMonths-(buttonMonths.length-1), getMonths-(buttonMonths.length-2), getMonths-(buttonMonths.length-3), getMonths]
arrayMonths.forEach(function(month,index){
    if(month<1){
        month = 12 + month
    }else{
        month = month
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
    var randomValue1 = Math.floor(Math.random() * (dataSearchCollection.length) + 1)
    console.log(randomValue1)
    return randomValue1
}
var data1 = dataSearchCollection.slice()
shuffleArray(data1)
var newData1 = data1.slice(dataSearchCollection.length - dataShow)

var data2 = dataSearchCollection.slice()
shuffleArray(data2)
var newData2 = data2.slice(dataSearchCollection.length - dataShow)

var data3 = dataSearchCollection.slice()
shuffleArray(data3)
var newData3 = data3.slice(dataSearchCollection.length - dataShow)
var data4 = dataSearchCollection.slice()
shuffleArray(data4)
var newData4 = data4.slice(dataSearchCollection.length - dataShow)



//Render Topic and Play Music
var render = newData1.map(function (element) { //Render Topic
    return `<div class="content-items">
    <img src="${element.srcImg}" alt="${element.title}" class='change'>
    <div class="description">
        <span>${element.title}</span>
        <p>Voice: ${element.voice}</p>
    </div>
    <div class="play">
        <i class="fa-solid fa-play"></i>
    </div>
    <div class='music-source'>
        <audio src='${element.srcMusic}'></audio>
    </div>
</div>`
})
var render1 = newData2.map(function (element) { //Render Topic
    return `<div class="content-items">
    <img src="${element.srcImg}" alt="${element.title}" class='change'>
    <div class="description">
        <span>${element.title}</span>
        <p>Voice: ${element.voice}</p>
    </div>
    <div class="play">
        <i class="fa-solid fa-play"></i>
    </div>
    <div class='music-source'>
        <audio src='${element.srcMusic}'></audio>
    </div>
</div>`
})
var render2 = newData3.map(function (element) { //Render Topic
    return `<div class="content-items">
    <img src="${element.srcImg}" alt="${element.title}" class='change'>
    <div class="description">
        <span>${element.title}</span>
        <p>Voice: ${element.voice}</p>
    </div>
    <div class="play">
        <i class="fa-solid fa-play"></i>
    </div>
    <div class='music-source'>
        <audio src='${element.srcMusic}'></audio>
    </div>
</div>`
})
var render3 = newData4.map(function (element) { //Render Topic
    return `<div class="content-items">
    <img src="${element.srcImg}" alt="${element.title}" class='change'>
    <div class="description">
        <span>${element.title}</span>
        <p>Voice: ${element.voice}</p>
    </div>
    <div class="play">
        <i class="fa-solid fa-play"></i>
    </div>
    <div class='music-source'>
        <audio src='${element.srcMusic}'></audio>
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