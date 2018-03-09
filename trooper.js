var Trooper=function(img,t,l){
    this.top=t;
    this.left=l;
    this.img=img;
    this.ele=null;
}
Trooper.prototype.settrooper=function(){
    this.ele=$('<img src='+this.img+'>')
    .css({'position':'absolute','left':this.left,'top':this.top});
    this.ele.load(function(){
        $(this).animate({
            'top':'50%'
        },2000,'linear',function(){
            var pos=$(this).position();
            var l=pos.left-20;
           $(this).remove();
           this.ele=$('<img src="images/paratrooper.svg">')
          .css({'position':'absolute','width':'70px','left':l+'px','top':pos.top});
        this.ele.load(function(){
        $(this).animate({
            'top':'83%'
        },4000,'linear',function(){
            $(this).remove();
        })
    
    })
    $('body').append(this.ele);

        })
    
    })
    $('body').append(this.ele);
    }
