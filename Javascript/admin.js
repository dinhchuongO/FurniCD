$(document).ready(function(){
    var users = JSON.parse(localStorage.getItem("users"));
    // list.push(users)
    // console.log(list)
    var userTable = $("#userTable tbody");
    users.forEach(function (user) {
        userTable.append("<tr><td>" + user.name + "</td><td>" + user.email + "</td><td>" + user.password + "</td><td>" + user.tel + "</td><td>" + user.address + "</td><td><button class='btn deleteButton'><i class='fa-regular fa-trash-can'></i></button></td></tr>");
    })
    userTable.on("click", ".deleteButton", function () {
    // Lấy chỉ số hàng được chọn
    var rowIndex = $(this).closest("tr").index();

    // Xóa người dùng khỏi danh sách
    users.splice(rowIndex, 1);

    // Cập nhật danh sách người dùng trong localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Xóa hàng khỏi bảng
    $(this).closest("tr").remove();
});
})