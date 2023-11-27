$(document).ready(function(){
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

    Tel = $("#Tel")
    errorTel = $("#errorTel")
    function checkTel(){
        pattern = /^(09|03|07|06|05|04)\d{8}$/
        if(Tel.val()==""){
            errorTel.html("* Số điện thoại không được để trống")
            return false
        }
        else if(!pattern.test(Tel.val())){
            errorTel.html("* Số điện thoại không đúng định dạng")
            return false
        }
        errorTel.html("")
        return true   
    }
    Tel.blur(checkTel)

    Address = $("#Address")
    errorAddress = $("#errorAddress")
    function checkAddress(){
        if(Address.val()==""){
            errorAddress.html("* Địa chỉ không được để trống")
            return false
        }
        errorAddress.html("")
        return true   
    }
    Address.blur(checkAddress)
    var users = [];
    $("#Register").click(function(){
        if(!checkEmail() ||!checkName() ||!checkPass() ||!checkRePass()){
            alert("Chưa nhập thông tin")
        }
        else{
            localStorage.setItem('Email',Email.val())
            localStorage.setItem('Pass',RePass.val())
            var newUser = {
                name:Name.val(),
                email: Email.val(),
                password: RePass.val(),
                tel:Tel.val(),
                address:Address.val()
            };

            // Thêm người dùng mới vào mảng
            users.push(newUser);

            // Đặt biến cục bộ để sử dụng trên các trang khác
            localStorage.setItem("users", JSON.stringify(users));
            // window.location.href="../html/sign-up.html"
            // console.log(localStorage.getItem("users"))
            alert("Đăng kí thành công")
        }
        
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
    var check=true
    $("#Log-in").click(function(){
        if(checkEmailin()&&checkPassin()){
            alert("Đăng nhập thành công")
            window.location.href="../html/home.html"
            localStorage.setItem("Checkin","true")
            Emailin.html("")
            Passin.html("")
        }
        else{
            check=false
            localStorage.setItem("Checkin","false")
            Emailin.blur(checkEmailin)
            Passin.blur(checkPassin)
        }
        
        
    })
     
    // console.log(localStorage.getItem("Checkin")) 
    update(localStorage.getItem("Checkin"))
    $('#out').on('click',function(){
        localStorage.setItem("Checkin","false")
        // console.log(localStorage.getItem("Checkin"))
        // console.log(k)
        update(localStorage.getItem("Checkin"))
        location.reload()
    })
    

    function update(k){
        if(k=="true"){
            $('#btn-1').hide()
            $('#btn-2').hide()
            $('#avta').show()
            $('#out').show()
        }
        else if(k=="false"){
            $('#btn-1').show()
            $('#btn-2').show()
            $('#avta').hide()
            $('#out').hide()
        }
    }


})