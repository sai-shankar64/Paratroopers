var barrel;
var copter;
var trooper;
$(document)
    .ready(function(){
        var canon=$('<img src="images/canonbase.svg">').css({'position':'absolute','width':'200px','top':$(window).height()-137,'left':$(window).width()/2-100});
        $('body').append(canon);
        barrel=new Barrel($(window).width()/2-15,$(window).height()-198,'images/barrel.svg');
        barrel.setup();
        var cop=['images/helicopter01.gif','images/helicopter02.gif','images/helicopter03.gif','images/helicopter04.gif'];
        var rand;
       setInterval(function(){
            rand=Math.floor(Math.random()*cop.length),
           copter=new Copter(cop[rand],rand),
           copter.setup()
           
        },1500);
})
    .keydown(function(h){
        if(h.which===37){
            h.preventDefault();
            barrel.rotateLeft();
        }
        else if(h.which===39){
            h.preventDefault();
            barrel.rotateRight();
        }
        else if(h.which===32){
            h.preventDefault();
            barrel.shoot();
        }
    })
;