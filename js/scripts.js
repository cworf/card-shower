$(document).ready(function(){
  $('#cards').submit(function(event){
    var values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9 , 10, "jack", "queen", "king"];
    var allsuits = ["hearts", "spades", "diamonds", "clubs"]
    var suits = $('input[name="suit"]:checked').val();
    if(suits === "all"){
      $('.list').empty();
      allsuits.forEach(function(suit){
        values.forEach(function(value){
            $('.list').append("<li class='" + suit + "'>" + value + " of " + suit + "." + "</li>");
        });
      });
    } else {
      $('.list').empty();
      values.forEach(function(value){
        $('.list').append("<li class='" + suits + "'>" + value + " of " + suits + "." + "</li>");
      });
    };
    $('.jumbotron').addClass('expand');
    event.preventDefault();
  });
});
