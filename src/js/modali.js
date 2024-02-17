$(document).ready(function(){

// BOX MEDIO
let myInterval;
$('.mini-box-container').hover(
    function() {
      $(this).children('.modale-media').fadeIn('fast');
      if($(this).find('iframe')[0]) {
        $(this).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo" }', '*')
      }   
      clearTimeout(myInterval);
    }, function() {
      $(this).children('.modale-media').fadeOut('fast');
      if ($(this).find('iframe')[0]){
        $(this).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo" }', '*')
        let thisIframe = $(this).find('iframe')[0]
        function stopVideoTime(){
          thisIframe.contentWindow.postMessage('{"event":"command","func":"stopVideo" }', '*')
        }
        myInterval = setTimeout(stopVideoTime, 7000)
      }
    },
  );

// BOX GRANDE
let myBigInterval;  
$('.close-media').click(function() {
    $('.media-full-container').hide()
    $('body').css('overflow-y', 'unset');
    let id = $(this).attr('data-id');
    $(id).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo" }', '*')
    let thisBigFrame =  $(id).find('iframe')[0]
    function stopVideoTimeBig(){
      thisBigFrame.contentWindow.postMessage('{"event":"command","func":"stopVideo" }', '*')
    }
    myBigInterval = setTimeout(stopVideoTimeBig, 7000)
})

let btnBox = $('.box-btn')
btnBox.click(function(e){
  e.preventDefault;
  clearTimeout(myBigInterval)
  let id = $(this).attr('data-id')
  $(id).css('display', 'flex');
  $('body').css('overflow-y', 'hidden');
  $(id).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo" }', '*')
})

let btnImgBox = $('.box-btn-img')
btnImgBox.click(function(e){
  e.preventDefault;
  clearTimeout(myBigInterval)
  let id = $(this).attr('data-id');
  $(id).css('display', 'flex');
  $('body').css('overflow-y', 'hidden');
  $(id).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo" }', '*')
})

})