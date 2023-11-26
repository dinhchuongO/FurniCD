$(document).ready(function(){
    $('.add-cart').on('click', function () {
        var productName = $(this).data('name');
        var productPrice = $(this).data('price');
        var productImage = $(this).data('img');
        var productQuantity=$("#product-quantity").val();
        // Kiểm tra xem đã có giỏ hàng trong Local Storage chưa
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        var existingProduct = cart.find(function (item) {
            return item.name === productName;
        });
        if(existingProduct){
           var number= parseInt(existingProduct.quantity);
           number+=parseInt(productQuantity)
           existingProduct.quantity=number
        }
        else{
            cart.push({
                name: productName,
                price: productPrice,
                quantity:productQuantity,
                image: productImage
            });
        }
        
        
        // Lưu giỏ hàng vào Local Storage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Hiển thị giỏ hàng
        displayCart();
        alert("Sản phẩm đã được thêm vào giỏ hàng")
    });

    // Hiển thị giỏ hàng khi trang được tải
    displayCart();

    function displayCart() {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        var cartList = $('table tbody');
        // Xóa các dữ liệu cũ trong bảng
        cartList.empty();
        var productTotal=0
        // Hiển thị giỏ hàng trong bảng
        $.each(cart, function (index, product) {
            var total = product.price * product.quantity;
            productTotal+=total;
            var row = $('<tr>');
            row.append($('<td>').text(product.name));
            row.append($('<td>').html('<img class="img-fluid" src="' + product.image + '" alt="' + product.name + '" ">'));
            row.append($('<td>').html(product.quantity));
            row.append($('<td>').text('$' + parseFloat(product.price)))
            row.append($('<td>').text('$' + parseFloat(total)))
            row.append($('<td>').html('<button class="btn remove-from-cart-btn" data-name="' + product.name + '"><i class="fa-regular fa-trash-can"></i></button>'));
            cartList.append(row);
            // cartItem.find('#quantity-input').on('change', function () {
            //     updateQuantity(product.name, parseInt($(this).val()));
            //     updateTotal()
            // });
        });
        // nút tăng giảm số lượng trong cart

        //Xóa cart
        $('.remove-from-cart-btn').on('click', function () {
            var productName = $(this).data('name');
            removeFromCart(productName);
            displayCart();
        });
        $('#clear-cart-btn').on('click', function () {
            clearCart();
        });
        if (cart.length > 0) {
            $('#clear-cart-btn').show();
            $('table thead').show()

        } else {
            $('#clear-cart-btn').hide();
            $('table thead').hide()
        }
        //Hiển thị hóa đơn thanh toán
        $("#total-value").text("$" + productTotal);
        $('#total').text("$" + productTotal)
        var ship=0
        if(cart.length > 1){
            ship = productTotal*0.05
            $('#ship').text("$"+ship)
        }
        else{
            $('#ship').text("$"+ ship)
        }
        var tax=(ship + productTotal)*0.1
        $('#tax').text('$'+tax)
        var sumTotal = tax +ship + productTotal
        $('#sum-total').text("$"+sumTotal)
        $('#check-total').text("$"+sumTotal)
        
    }
    function removeFromCart(productName) {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        var cartList = $('table tbody');
        var updatedCart = cart.filter(function (product) {
            return product.name !== productName;
        });
        
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        
    }
    function clearCart() {
        localStorage.removeItem('cart');
        displayCart();
    }
    $('#add').on('click', function () {
        var inputElement = $(this).siblings('#product-quantity');
        var currentValue = parseInt(inputElement.val());
        inputElement.val(currentValue + 1);
    });

    // Sự kiện khi nút '-' được click
    $('#sub').on('click', function () {
        var inputElement = $(this).siblings('#product-quantity');
        var currentValue = parseInt(inputElement.val());

        // Đảm bảo giá trị không bao giờ nhỏ hơn 1
        if (currentValue > 1) {
            inputElement.val(currentValue - 1);
        }
    });
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    function updateQuantity(productName , newQuantity) {
        var product = cartData.find(function (item) {
            return item.name === productName;
        });

        if (product) {
            product.quantity = newQuantity;
            displayCart(); // Hiển thị lại giỏ hàng sau khi cập nhật
        }
    }
    
})