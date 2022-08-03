/*
在网上看到，尝试复现一下
*/

var OriginTitile=document.title;
document.addEventListener('visibilitychange',function(){
if(document.hidden){
document.title="呀！浏览器崩溃了";
}else{
document.title='吖~又好了~ '+OriginTitile;
}
});
