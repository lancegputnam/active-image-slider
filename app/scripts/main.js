"use strict";

// var Images = [
// 					"https://farm3.staticflickr.com/2481/3625765500_61341d70a6_z.jpg",
// 					"https://farm3.staticflickr.com/2445/3625771932_9ea7089610_z.jpg", 
// 					"https://farm4.staticflickr.com/3312/3624974203_962455fa48_z.jpg",
// 					"https://farm4.staticflickr.com/3365/3624976561_44b2ef9e5c_z.jpg",
// 					"https://farm4.staticflickr.com/3386/3624965993_6140d4799c_z.jpg",
// 				];

function arrayImages (Images) {
	var fadingTime = 2000
}

	$(document).ready(function() {  ///a page cant be manipulated until the doc is ready. 
    $('.image').hide(); /// tried using empty but it messed up 

    setInterval(function(){ /// setInterval calls a function and repeats code repeatedly
    $(".image:first").fadeOut(2000).next(".image").fadeIn(2000).end().appendTo(".image-slider")
    }, (4000));
});

/// first, it fades out, goes to next image that fades in and it endsand the append inserts the elements to the end





