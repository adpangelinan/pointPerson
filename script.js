// JavaScript source code
document.getElementById("userSearch").value="What are you looking for?"
function showEC(){
  var x = document.getElementById("EC");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showMarketing(){
  var x = document.getElementById("showMarketing");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showFinancial(){
  var x = document.getElementById("Financial");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showTwitter(){
  var x = document.getElementById("Twitter");
  window.open('https://twitter.com/_pointperson')
}
function showBusiness(){
  var x = document.getElementById("Business");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showCrafting(){
  var x = document.getElementById("Crafting");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showUsingPointPerson(){
  var x = document.getElementById("UsingPointPerson");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showFacebook(){
  var x = document.getElementById("Facebook");
  window.open('https://www.facebook.com/PointPersonPage/?eid=ARBhkE7sy6LPuQ1gSE6IGjjrv4ZCUfELGOKzYMJe0QDmMezX-knJvUTZ8voxhO9YqBI3GBGywHvIlu-2')
}
function showTechnologyProgramming(){
  var x = document.getElementById("showTechnologyProgramming");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showPrivacyPolicy(){
  var x = document.getElementById("PrivacyPolicy");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function emailUs(){
  window.location="EmailUs.html"
}
function showInstagram(){
  var x = document.getElementById("Instagram");
window.open('https://www.instagram.com/point.person/?hl=en')
}
function showHomeAuto() {
  var x = document.getElementById("HomeAuto");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showLegalAdvice() {
  var x = document.getElementById("LegalAdvice");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showMusicArts() {
    var x = document.getElementById("MusicArts");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function showSports(){
  var x = document.getElementById("Sports");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showLifestyle(){
  var x = document.getElementById("Lifestyle");
  if (x.style.display === "none") {
      x.style.display = "block";
      exitTerms();
  } else {
      x.style.display = "none";
      exitTerms();
  }
}
function showFeaturedPointPersonoftheMonth(){
  var x = document.getElementById("FeaturedPointPersonoftheMonth");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showTaxes(){
  var x = document.getElementById("Taxes");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function userSearch() {
    var search = document.getElementById("userSearch").value
    window.open('https://google.com/search?q='+search)
    console.log(search)
}

function getDate() {

    var myDate = new Date()
    return myDate.getFullYear()
}
function hideMain() {
    var mainDiv = document.getElementById("main");
    mainDiv.style.display = "none";
}
function showMain() {
    var mainDiv = document.getElementById("main");
    mainDiv.style.display = "inline";
}
function hideTermsOfService() {
    var tOSDIV = document.getElementById("termsOfService");
    tOSDIV.style.display = "none";
}
function showTermsOfService() {
    var tOSDIV = document.getElementById("termsOfService");
    tOSDIV.style.display = "inline";
}
function hideLogin() {
    var log = document.getElementById("termsOfService");
    log.style.display = "none";
}
function showLogin() {
    var log = document.getElementById("termsOfService");
    log.style.display = "inline";
}

/*Source has to be ID of element*/
/*Destination, has to be ID of element*/
function moveToDestination(source, destination) {
    var get = document.getElementById(source);
    console.log(get.innerHTML);
    var target = document.getElementById(destination);
    console.log(target.innerHTML);
    target.appendChild(get);
}
var myVar = document.getElementById("pointDate");
var myTxt = myVar.innerHTML;
myTxt = myTxt + getDate();
myVar.innerHTML = myTxt;


function termsButton() {
    window.location="TextPage.html";
    hideMain();
    showTermsOfService();
}
function exitTerms() {
    hideTermsOfService();
    showMain();
}
function loginUser() {
    alert(message);
    hideMain();
    showLogin();
}
function goHome(){
window.location="Home.html"
}
