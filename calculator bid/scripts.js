function Calc(){
   var sBid =  document.getElementById("bid").value

   var answer = ((30*sBid)/100);
   answer = sBid - answer;
   console.log(answer);
   document.getElementById("answer").innerHTML = "30% lower bid = "+answer;

}