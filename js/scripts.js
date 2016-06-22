$(document).ready(function(){
  $('.billSearch').keypress(function(event){
    event.preventDefault();
    if(event.keyCode==13) {
      $('div.hiddenBills').fadeIn(3000).removeClass('hiddenBills');
      $('div.introContent').fadeOut(3000);
    }
  });
  $('.politicianSearch').keypress(function(event){
    event.preventDefault();
    if(event.keyCode==13) {
      $('div.hiddenPoliticians').fadeIn(3000).removeClass('hiddenPoliticians');
      $('div.introContent').fadeOut(3000);
    }
  });
});
