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
        imgMain.querySelector('img').style.width = '80%'
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