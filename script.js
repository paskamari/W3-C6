/*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */

(function($){
  "use strict";

  var
    Width = window.innerWidth,
    $container = $('.container'),
    $train = $container.find('.bottom .train'),
    $slides = $container.find('.bottom .train > div'),
    $next = $container.find('.bottom .next'),
    $prev = $container.find('.bottom .prev'),
    leftTrain = $train.eq(0).css('left'),
    slideWidth = $slides.eq(0).width(),
    leftTrainInt = parseInt(leftTrain),
    setWidth = function(){
      $container.css({
        width : Width-100
      });
    },
    go2slide = function(n){

      $train.stop().animate({
        left:slideWidth*n
      },600);
    },
    nextOrBack = function(n){
      leftTrain = $train.eq(0).css('left');
      leftTrainInt = parseInt(leftTrain);
      leftTrainInt = (Math.floor(leftTrainInt/slideWidth))+n;
      if(leftTrainInt == 0){
        $prev.css({'display':'none'});
      }else{
        $prev.css({'display':'block'});
      };
      if(leftTrainInt == ($slides.length*-1)+1){
        $next.css({'display':'none'});
      }else{
        $next.css({'display':'block'});
      };
      go2slide(leftTrainInt);
    },
    nbSlide = function(){
      $next.click(function(){
        nextOrBack(-1);
      });
      $prev.click(function(){
        nextOrBack(1);
      });
    },
    start = function(){
      setWidth();
      nbSlide();
    };

    $prev.css({'display':'none'});

  start();
  
})(window.jQuery);