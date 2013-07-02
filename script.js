/*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */

(function($){
  "use strict";

  function updateSite(event) {
    window.applicationCache.swapCache();
    window.location.reload();
  }

  window.applicationCache.addEventListener('updateready',updateSite, false);

  var
    Width = window.innerWidth,
    $container = $('.container'),
    $train = $container.find('.bottom .train'),
    $slides = $container.find('.bottom .train > div'),
    $header = $container.find('.bottom .train .subject-logo h1'),
    $description = $container.find('.bottom .train .subject-logo .description'),
    $next = $container.find('.bottom .next'),
    $prev = $container.find('.bottom .prev'),
    leftTrain = $train.eq(0).css('left'),
    slideWidth = $slides.eq(0).width(),
    leftTrainInt = parseInt(leftTrain),
    slideNumber = 0,
    findClass = '',
    url = 'titr-pics.html',

    setWidth = function(){
      $container.css({
        width : Width-100
      });
    },

    descriptionLoader = function(n){
      findClass = $header.eq(n).html();
      $description.eq(n).load(url+' .'+findClass);
      $description.stop().animate({
        opacity:1
      },900);
    },

    go2slide = function(n){
      $train.stop().animate({
        left:slideWidth*n
      },600,'linear',function(){
        descriptionLoader(n*-1);
      });
    },

    nextOrBack = function(n){
      leftTrain = $train.eq(0).css('left');
      leftTrainInt = parseInt(leftTrain);
      slideNumber = (Math.floor(leftTrainInt/slideWidth))+n;
      $description.stop().animate({
        opacity:0
      },500,'linear',function(){
        if(slideNumber === 0){
          $prev.css({'display':'none'});
          descriptionLoader(slideNumber);
        }else{
          $prev.css({'display':'block'});
        }
        if(slideNumber === ($slides.length*-1)+1){
          $next.css({'display':'none'});
        }else{
          $next.css({'display':'block'});
        }
        go2slide(slideNumber);
      });
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
      descriptionLoader(0);
    };

    $prev.css({'display':'none'});

  start();
  
})(window.jQuery);