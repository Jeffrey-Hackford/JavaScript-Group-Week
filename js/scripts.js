$(document).ready(function(){
  $('.billSearch').keypress(function(event){
    event.preventDefault();
    if(event.keyCode==13) {
      $('div').removeClass('hiddenBills');
      $('div.introContent').addClass('hiddenIntroConent');
    }
  });
  $('.politicianSearch').keypress(function(event){
    event.preventDefault();
    if(event.keyCode==13) {
      $('div').removeClass('hiddenPoliticians');
      $('div.introContent').addClass('hiddenIntroConent');
    }
  });
});
