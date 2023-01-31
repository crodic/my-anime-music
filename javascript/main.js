
// Control Client
var isShow = false
var showHeader = document.querySelector('.show-header')
var content = document.querySelector('#content')
var position = document.querySelector('#content .sub-header')
var imgSub = document.querySelector('.sub-logo')
var imgMain = document.querySelector('.main-logo')
var infoList = document.querySelectorAll('ul.list li span')
showHeader.addEventListener('click', function () {
    var header = this.parentElement
    if (isShow == false) {
        header.style.minWidth = '100%'
        content.style.display = 'none'
        imgSub.style.display = 'none'
        imgMain.style.display = 'flex'
        imgMain.querySelector('img').style.width = '70%'
        infoList.forEach(function (item) {
            item.style.display = 'inline-block'
        })
        showHeader.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
        isShow = true
    } else {
        header.style.minWidth = '3em'
        content.style.display = 'flex'
        imgSub.style.display = 'flex'
        imgMain.style.display = 'none'
        infoList.forEach(function (item) {
            item.style.display = 'none'
        })
        showHeader.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
        isShow = false
    }
})

//Control Search
var avatar = document.querySelector('.account-avatar')
var inputSearch = document.querySelector('#search input[type=search]')
if (screen.width < 746) {
    inputSearch.addEventListener('focus', function () {
        this.parentElement.style.minWidth = '100%'
        avatar.style.display = 'none'
        this.style.width = '90%'
    })
    inputSearch.addEventListener('blur', function () {
        this.parentElement.style.minWidth = 'auto'
        avatar.style.display = 'flex'
        this.style.width = '70%'
    })
}

ShowDropDown = false
avatar.querySelector('.avatar img').addEventListener('click',function(){
    var dropdown = avatar.querySelector('.dropdown')
    if(ShowDropDown == false){
        dropdown.style.display = 'block'
        ShowDropDown = true
    }else{
        dropdown.style.display = 'none'
        ShowDropDown = false
    }
})


//Change Background
var changeBackground = document.querySelector('.box-background .close')
var contentBackground = document.querySelector('.box-background')
var boxBackground = document.querySelector('.topic-background')
var mobileBox = document.querySelector('.dropdown-item:nth-child(8)')
var buttonShowBackground = document.querySelector('.notice i:last-child')
boxBackground.addEventListener('click',function(e){
    var box = e.target
    if(!contentBackground.contains(box)){
        changeBackground.click()
    }
})
changeBackground.addEventListener('click',function(){
    boxBackground.style.display = 'none'
})
mobileBox.addEventListener('click',function(){
    boxBackground.style.display = 'flex'
})
buttonShowBackground.addEventListener('click',function(){
    boxBackground.style.display = 'flex'
})

var backgroundItemPC = document.querySelectorAll('.box-item .absolute')
backgroundItemPC.forEach(function(item){
    item.addEventListener('click',function(){
        var parentNode = item.parentElement
        var imgSrc = parentNode.querySelector('img').src
        var listSrc = parentNode.querySelector('img').dataset.img
        changeImagesBackground(imgSrc,listSrc)
    })
})
var backgroundItemMobile = document.querySelectorAll('.box-item img')
backgroundItemMobile.forEach(function(item){
    item.addEventListener('click',function(){
        var parentNode = item.parentElement
        var imgSrc = parentNode.querySelector('img').src
        var listSrc = parentNode.querySelector('img').dataset.img
        changeImagesBackground(imgSrc,listSrc)
    })
})

function changeImagesBackground(img,listImg){
    var bodyBackground = document.querySelector('body')
    var listBackground = document.querySelector('.list-music .list')
    bodyBackground.style.backgroundImage = `url(${img})`
    listBackground.style.backgroundImage = `url(${listImg})`
}



