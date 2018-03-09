var trooper;
var Copter=function(imgsrc,i){
    this.img=imgsrc;
    this.i=i;
    this.cop=null;
}
Copter.prototype.setup=function(){
   
    if(this.i==0 || this.i==2){
         this.cop=$('<img src='+this.img+'>').css({'width':'110px','position':'absolute'});
        this.cop.load(function(){
            trooper=new Trooper('images/trooper.svg',100,100),
           trooper.settrooper(),
           
        $(this).animate({
            'left':'90%',
            
        },4000,"linear",function(){
                    $(this).remove();
                })
       });
   }
   else{
        this.cop=$('<img src='+this.img+'>').css({'width':'150px','position':'absolute','right':'50px','top':'100px'})
    this.cop.load(function(){
         trooper=new Trooper('images/trooper.svg',100,500),
           trooper.settrooper(),
        $(this).animate({
            'right':'90%',
        },4000,"linear",function(){
                    $(this).remove();
                })
      });
    }
    $('body').append(this.cop);
}