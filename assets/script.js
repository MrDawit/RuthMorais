// $("#Aria_pic").on(hover,function(){
// $("#Aria_pic").html("")
// });


var img = document.getElementById('Aria_pic');

img.onmouseout = function () {
   this.src = './assets/images/aria_light.jpg';
};

img.onmouseover = function () {
   this.src = './assets/images/IMG_0037.jpg';
};