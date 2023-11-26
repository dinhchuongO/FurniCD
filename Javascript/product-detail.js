$(document).ready(function () {

    //heart
    $("#lovev").on("click", function () {
        $(this).html('<i class="fa-solid fa-heart fa-xl pr-3" style="color: #c00202;"></i>');
    });
    var currentState = 1;

    $("#lovev").on("click", function () {
        if (currentState === 1) {
            $(this).html('<i class="fa-solid fa-heart fa-xl pr-3" style="color: #c00202;"></i>');
            currentState = 2;
        } else {
            $(this).html('<i class="fa-regular fa-heart fa-beat fa-xl pr-3" style="color: #ff424f;"></i>');
            currentState = 1;
        }
    });

    //thumb
    var currentImagePath = "";
    $(".small_thumb").on({
        click: function () {
            var imagePath = $(this).attr("src");

            if (currentImagePath !== imagePath) {
                $("#thumb").html('<img class="item_thumb" src="' + imagePath + '">');
                currentImagePath = imagePath;
            }
        },
        mouseenter: function () {
            var imagePath = $(this).attr("src");

            if (currentImagePath !== imagePath) {
                $("#thumb").html('<img class="item_thumb" src="' + imagePath + '">');
                currentImagePath = imagePath;
            }
        }

    });

});