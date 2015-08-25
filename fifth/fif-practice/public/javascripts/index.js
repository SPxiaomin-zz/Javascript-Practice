window.onload = function() {
    var listBtn = document.getElementById("btn1");
    var carBtn = document.getElementById("btn2");
    var imgs = document.getElementsByTagName("img");

    listBtn.onclick = function() {
        listBtn.className = "btn-list-on";
        carBtn.className = "btn-car-off";

        for ( var i=0; i<imgs.length; i++ ) {
            imgs[i].src = "/images/small.jpg";
            imgs[i].parentNode.className = "a-img small";
        }
    };

    carBtn.onclick = function() {
        listBtn.className = "btn-list-off";
        carBtn.className = "btn-car-on";

        for ( var i=0; i<imgs.length; i++ ) {
            imgs[i].src = "/images/big.jpg";
            imgs[i].parentNode.className = "a-img";
        }
    };
};
