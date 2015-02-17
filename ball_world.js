var BallFactory = {
  ballNumber : 1,
  create : function (){
    ball = $("<div class='ball' id=" + ballNumber + ">" + ballNumber + "</div>");
    ballNumber++;
    //TODO add this ball to the DOM
  }
}

$(function(){//Note: This is a jQuery abbreviation of Document.ready()
  //TODO attach event listeners to each of the buttons 


  $('.ball').click(function(){
    $(this).toggleClass('selected');
  });

});


