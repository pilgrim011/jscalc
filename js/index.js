$( document ).ready(function() {
   $("#output").prop("maxLength",12);
var clear;
  $(":button").on("click", function(){
  if (clear === true){
    clear = false;
    $("#output").empty();
   };
    console.log(clear);
  });
   
$("#ac").on("click", function(){
    $("#output").empty();
  });
  $("#ce").on("click", function(){
    var del = document.getElementById("output").value;
document.getElementById("output").value = del.substring(0, del.length-1);
  });
  $("#percent").on("click", function (){
    clear = true;
  var val = document.getElementById("output").value;
   var first =  parseFloat(val);
    var reg = /[-+%*\/]/;
    var operator = reg.exec(val).toString();
    
    
    var regTwo = val.search(/[-+%*\/]/); 
    var second = val.slice(regTwo+1);
    
   var result = eval(first + operator + first/100*second);
    $("#output").empty().html(result);
 });
  $("#divide").on("click", function (){
 $("#output").append("/"); 
 });
$("#seven").on("click", function(){
$("#output").append(7);
});
$("#eight").on("click", function(){
 $("#output").append(8); 
 });
 $("#nine").on("click", function(){
 $("#output").append(9); 
 });
 $("#multiply").on("click", function(){
 $("#output").append("*"); 
 });
  $("#four").on("click", function(){
 $("#output").append(4); 
 });
 $("#five").on("click", function(){
 $("#output").append(5); 
 });
  $("#six").on("click", function(){
 $("#output").append(6); 
 });
  $("#minus").on("click", function(){
 $("#output").append("-"); 
 });
  $("#one").on("click", function(){
 $("#output").append(1); 
 });
  $("#two").on("click", function(){
 $("#output").append(2); 
 });
  $("#three").on("click", function(){
 $("#output").append(3); 
 });
  $("#plus").on("click", function(){
    $("#output").append("+");
  });
  $("#zero").on("click", function(){
    $("#output").append(0);
  });
  $("#dot").on("click", function(){
    $("#output").append(".");
  });
  $("#equals").on("click", function(){
    clear = true;
    var val = document.getElementById("output").value;
   var first =  parseFloat(val);
    var reg = /[-+%*\/]/;
    var operator = reg.exec(val).toString();
    
    
    var regTwo = val.search(/[-+%*\/]/); 
    var second = val.slice(regTwo+1);
    
   var result = eval(first + operator + second);
 $("#output").empty().html(result);
 
  });
  
  
});