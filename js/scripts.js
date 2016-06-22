$(document).ready(function(){
  $('.billSearch').keypress(function(event){
    event.preventDefault();
    if(event.keyCode==13) {
      $('div').removeClass('hiddenBills');
    }
  });
  $('.politicianSearch').keypress(function(event){
    event.preventDefault();
    if(event.keyCode==13) {
      $('div').removeClass('hiddenPoliticians');
    }
  });
});
