$(document).ready(function(){
    var namecard = $('#namecard')
    var errnamecard = $('#errnamecard')
    function checknamecard(){
        pattern=/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/
        lengthnamecard=namecard.val().split(" ").length
        if(namecard.val()==""){
            errnamecard.html("* Tên không được để trống")
            return false
        }
        else if(!pattern.test(namecard.val())){
            errnamecard.html("* Tên phải viết hoa chữ đầu")
            return false
        }
        else if(lengthnamecard < 2){
            errnamecard.html("* Tên phải có ít nhất 2 từ")
            return false
        }
        errnamecard.html("")
        return true   
    }
    namecard.blur(checknamecard)

    var number = $('#number')
    var errnumber = $('#errnumber')
    function checknumber(){
        pattern=/^\d{4} \d{4} \d{4} \d{4}$/
        lengthnumber=number.val().split(" ").length
        if(number.val()==""){
            errnumber.html("* Số thẻ không được để trống")
            return false
        }
        else if(!pattern.test(number.val())){
            errnumber.html("* Số thẻ không đúng định dạng")
            return false
        }
        errnumber.html("")
        return true   
    }
    number.blur(checknumber)

    var date = $('#date')
    var errdate = $('#errdate')
    function checkdate(){
        var today = new Date()
        var ngay= new Date(date.val())
        if(date.val()==""){
            errdate.html("*Ngày không được để trống")
            return false
        }
        else if(ngay>today){
            errdate.html("* Ngày sai")
            return false
        }
        errdate.html("")
        return true   
    }
    date.blur(checkdate)  

    var CVV = $('#CVV')
    var errCVV = $('#errCVV')
    function checkCVV(){
        pattern=/^\d{3}$/
        if(CVV.val()==""){
            errCVV.html("* Số CVV không được để trống")
            return false
        }
        else if(!pattern.test(CVV.val())){
            errCVV.html("* Số CVV không đúng định dạng")
            return false
        }
        errCVV.html("")
        return true   
    }
    CVV.blur(checkCVV)   
})