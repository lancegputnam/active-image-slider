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
