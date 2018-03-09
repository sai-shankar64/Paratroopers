var Barrel=function(xpos,ypos,src){
    this.xpos=xpos;
    this.ypos=ypos;
    this.set=null;
    this.src=src;
    this.angle=0;
}
Barrel.prototype.setup=function(){
    this.set=$('<img src='+this.src+'>');
    this.set.css({'position':'absolute','height':'100px','width':'25px','top':this.ypos+'px','right':this.xpos+'px','z-index':'1','transform-origin':'50% 100%'});
    $('body').append(this.set);
}
Barrel.prototype.rotateLeft=function(){
    if(this.angle-4>=-90){
    this.angle-=4;
    this.set.css({'transform':'rotate('+this.angle+'deg)'});
    }
}

Barrel.prototype.rotateRight=function(){
    if(this.angle+4<=90){
    this.angle+=4;
    this.set.css({'transform':'rotate('+this.angle+'deg)'});
    }
}
Barrel.prototype.shoot=function(){
    var position=$(this).offset();
    var bullet=new Bullet($(window).width()/2-8,$(window).height()-110,'images/bullet.svg',position);
    bullet.setup();
}



