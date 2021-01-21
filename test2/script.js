function catulatetip(){
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("servicequal").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  if(billAmt === "" || serviceQual == 0){
    alert("Mời Nhập Bill của bạn");
    return;
  }
  if(numOfPeople === "" || numOfPeople <= 1){
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } 
  else {
    document.getElementById("each").style.display = "block";
  }
  var tolTal = (billAmt*serviceQual)/numOfPeople;
  toTal = Math.round(toTal * 100) / 100;
  toTal = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}