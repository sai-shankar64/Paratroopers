var Bullet = function(x, y, img,position) {
    this.x = x;
    this.y = y;
    this.src = img;
    this.b=null;
    this.position=position;
}

Bullet.prototype.setup = function() {
    this.b =$('<img src='+this.src+'>')
    .css({'position':'absolute','top': this.position.top + 'px','right': this.position.left + 'px','z-index':'1'})
    .load(function(){
        $(this).animate({
            'left':$(window).width()/2+220,
            'top':'-10px',
        },1000 ,'linear', function(){
            $(this).remove();
        })
    });
    $('body').append(this.b);
}