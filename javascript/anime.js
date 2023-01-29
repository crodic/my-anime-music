var inputKey = document.querySelector('.video-anime .block form input[type=text]')
var buttonEnterKey = document.querySelector('.video-anime .block form input[type=button]')
var block = document.querySelector('.video-anime .block')



var keyAdmin =['crodic','alice','bronya','elysia','mina']

function normalize(string){ //Chuẩn hoá chuỗi (bỏ tất cả khoảng trắng)
    var arrayString = string.split(' ')
    var newString = arrayString.join('')
    return newString
}

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
//Event when Enter
inputKey.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        inputKey.value = normalize(inputKey.value)
        var findKey = keyAdmin.find(function(key){
            return key == inputKey.value
        })
        if(findKey){
            block.style.display = 'none'
        }else{
            displayAlert('Key không chính xác. Vui lòng nhập lại hoặc liên hệ với Admin để cấp lại key')
            inputKey.value = ''
        }
    }
})

buttonEnterKey.addEventListener('click',function(){
    inputKey.value = normalize(inputKey.value)
    var findKey = keyAdmin.find(function(key){
        return key == inputKey.value
    })
    if(findKey){
        block.style.display = 'none'
    }else{
        displayAlert('Key không chính xác. Vui lòng nhập lại hoặc liên hệ với Admin để cấp lại key')
        inputKey.value = ''
    }
})