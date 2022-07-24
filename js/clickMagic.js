/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
   $("body").click(function(e) {
       var a = new Array("湖北","河南","湖南","浙江","重庆");
       var $i = $("<span/>").text(a[a_idx]);
       a_idx = (a_idx + 1) % a.length;
       var x = e.pageX,
       y = e.pageY;
       var color=function randomColor() {//得到随机的颜色值
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
       $i.css({
           "z-index": 9999,
           "top": y - 25,
           "left": x,
           "position": "absolute",
           "font-weight": "bold",
           "color": color,
       });
       $("body").append($i);
       $i.animate({
           "top": y - 280,
           "opacity": 0
       },
       1500,
       function() {
           $i.remove();
       });
   });
});