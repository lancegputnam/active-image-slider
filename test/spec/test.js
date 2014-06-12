/* global describe, it */

 (function () {
     'use strict';

     describe("Image Slider", function () {
         it("should fade after 2 seconds", function () {
         	expect (imageSeconds).to.equal(2);
         });

         it("should transition to fade out", function () {
         	expect (imageTransition).to.be(fadeOut);
         });

         it("should go in order from first to last", function () {
         	expect (inOrder[1,2,3,4,5]).to.equal([1,2,3,4,5]);
         });
     });
 })();


(function (){
	'use strict';

	describe('the slideshow function generates a slideshow', function () {
		it('should only accept an array for its images argument', function (){
			var imageSlideShow = function () {
				slideshow("string")
			}

			expect(imageSlideShow).to.throw(Error)
		});

		it('should throw an error if the array is empty', function (){
			var emptyArray = function () {
				slideshow([blahblah]);
			}

			expect(emptyArray).to.throw.Error
		})
	});

	describe('the slideshow creates a transition between images', function (){
		it('should ensure that the slideshow has an appropriate interval', function (){
			var arraySample = ["image1","image2","image3"]
			var slideshowInstance = new Slideshow(arraySample, 3000, 700);

			expect(slideshowInstance.interval).to.equal(3000);
		});

		it('should ensure that the slideshow has an appropriate delay', function (){
			var arraySample = ["image1","image2","image3"]
			var slideshowInstance = new Slideshow(arraySample, 3000, 700);

			expect(slideshowInstance.delay).to.equal(3000);
		});
	});
})();

 // describe ('slideshow () function which generates a slideshow', function () {
 // 	it('should only accept an array for its images argument', function () {
 // 		var badSlideShow = function () {
 // 			slideshow("string")
 // 		}

 // 		expect(badSlideShow).to.throw(Error);
 // 	});

 // 	it('shoudl throw an error if array is empty', function (){
 // 		var emptyArray = function () {
	// 	slideshow([]); 		
	// 	}
	// 	expect(emptyArry).to.throw(Error)
 // 	})
 // })