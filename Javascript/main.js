$(document).ready(function(){
    $("#Sign-up").click(function(){
        $("#modal-sign-up").modal()
    })
    $("#Sign-in").click(function(){
        $("#modal-sign-in").modal()
    })
    Name = $("#Name")
    errorName = $("#errorName")
    function checkName(){
        pattern=/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/
        lengthName=Name.val().split(" ").length
        if(Name.val()==""){
            errorName.html("* Tên không được để trống")
            return false
        }
        else if(!pattern.test(Name.val())){
            errorName.html("* Tên phải viết hoa chữ đầu")
            return false
        }
        else if(lengthName < 2){
            errorName.html("* Tên phải có ít nhất 2 từ")
            return false
        }
        errorName.html("")
        return true   
    }
    Name.blur(checkName)

    Email = $("#Email")
    errorEmail = $("#errorEmail")
    function checkEmail(){
        pattern=/^[A-Za-z0-9]+@[a-z]{4,7}.[a-z]{3}$/
        if(Email.val()==""){
            errorEmail.html("* Email không được để trống")
            return false
        }
        else if(!pattern.test(Email.val())){
            errorEmail.html("* Email không đúng định dạng")
            return false
        }
        errorEmail.html("")
        return true   
    }
    Email.blur(checkEmail)

    Pass = $("#Pass")
    errorPass = $("#errorPass")
    function checkPass(){
        pattern=/^[0-9]+[A-Z]+[a-z]+[@!#$%^&*()]+$/
        if(Pass.val()==""){
            errorPass.html("* Pass không được để trống")
            return false
        }
        else if(!pattern.test(Pass.val())){
            errorPass.html("* Password phải có ít nhất 1 kí tự đặc biệt, in hoa, in thường")
            return false
        }
        errorPass.html("")
        return true   
    }
    Pass.blur(checkPass)

    RePass = $("#RePass")
    errorRePass = $("#errorRePass")
    function checkRePass(){
        if(RePass.val()==""){
            errorRePass.html("* Nhập lại password không được để trống")
            return false
        }
        else if(RePass.val() != Pass.val()){
            errorRePass.html("* Không trùng khớp")
            return false
        }
        errorRePass.html("")
        return true   
    }
    RePass.blur(checkRePass)

    $("#Register").click(function(){
        if(!checkEmail ||!checkName ||!checkPass ||!checkRePass){
            alert("Chưa nhập thông tin")
        }
        localStorage.setItem('Email',Email.val())
        localStorage.setItem('Pass',RePass.val())
        localStorage.setItem('Name',Name.val())
        alert("Đăng kí thành công")
        $("#modal-sign-up").modal("hide")
    })


    Emailin = $("#Emailin")
    errorEmailin = $("#errorEmailin")
    function checkEmailin(){
        if(Emailin.val()==""){
            errorEmailin.html("* Chưa nhập tài khoản (Email)")
            return false
        }
        else if(Emailin.val()!=localStorage.getItem('Email')){
            errorEmailin.html("* Tài khoản (Email) không đúng")
            return false
        }
        errorEmailin.html("")
        return true   
    }

    Passin = $("#Passin")
    errorPassin = $("#errorPassin")
    function checkPassin(){
        if(Passin.val()==""){
            errorPassin.html("* Chưa nhập mật khẩu")
            return false
        }
        else if(Passin.val()!=localStorage.getItem('Pass')){
            errorPassin.html("* Mật khẩu không đúng")
            return false
        }
        errorPassin.html("")
        return true   
    }
    $("#Log-in").click(function(){
        if(checkEmailin()&&checkPassin()){
            alert("Đăng nhập thành công")
            $("#modal-sign-in").modal("hide")  
            Emailin.html("")
            Passin.html("")
        }
        Emailin.blur(checkEmailin)
        Passin.blur(checkPassin)
    })
})