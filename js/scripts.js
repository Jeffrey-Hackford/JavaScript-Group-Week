$(document).ready(function(){
  console.log("test");
  $('#billsInput').keydown(function(event) {
    if (event.keyCode == 13) {
      this.form.submit();
      return false;
      console.log("enter works!");
    }
  });
});
