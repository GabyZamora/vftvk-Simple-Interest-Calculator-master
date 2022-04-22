function compute() {
     let principal = document.getElementById("principal").value;

    if(principal <= 0){
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return;
    }

    /*Rate*/
    let rate = document.getElementById("rate").value;
    /*Year*/
    let years = document.getElementById("years").value;
    /*Interest*/
    let interest = principal * years * rate / 100;
    /*Local Date*/
    let year = new Date().getFullYear() + years;
    let results = document.getElementById("result").innerHTML="If you deposit "+principal+"\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\> in the year "+year+"\<br\>"
}

function updateRate(){
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText=rateval + "%";
}