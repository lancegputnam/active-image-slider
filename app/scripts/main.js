"use strict";


var imgArray = [
   "https://farm3.staticflickr.com/2481/3625765500_61341d70a6_z.jpg",
   "https://farm3.staticflickr.com/2445/3625771932_9ea7089610_z.jpg", 
   "https://farm4.staticflickr.com/3312/3624974203_962455fa48_z.jpg",
   "https://farm4.staticflickr.com/3365/3624976561_44b2ef9e5c_z.jpg",
   "https://farm4.staticflickr.com/3386/3624965993_6140d4799c_z.jpg",
];

window.onload = function() {
    var image=document.getElementById('spainImages');
    var index=0;
    var interval = 2000;
    var fadeOut = 1000;
    function slide() {
        image.src = imgArray[index++%imgArray.length];
    }
    setInterval(slide, interval);
};

/// These are saying the same thing but the first is not allowed 
// if (x<3) {
// 	lessThanThree ="yes";
// } else {
// 	lessThanThree = "no";
// }

// /// This is a ternary operation, it is allowed 
// lessThanThree = x < 3 ? "yes" : "no"; 










