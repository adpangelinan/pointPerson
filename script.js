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
function showWhatsaPointPerson(){
  var x = document.getElementById("WhatsaPointPerson");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showHowtobeaPointPerson(){
  var x = document.getElementById("HowtobeaPointPerson");
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
function showWhatsthepoint(){
  var x = document.getElementById("Whatsthepoint");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showBuyingSellingServices(){
  var x = document.getElementById("BuyingSellingServices");
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
function showTechnology(){
  var x = document.getElementById("Technology");
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
  var link = "mailto:me@example.com"
  + "?cc=myCCaddress@example.com"
  + "&subject=" + escape("This is my subject")
  + "&body=" + escape(document.getElementbyID('myText').value);
  window.location.href=link;
}
function showInstagram(){
  var x = document.getElementById("Instagram");
window.open('https://www.instagram.com/point.person/?hl=en')
}
function showHomeAutoRepairs() {
  var x = document.getElementById("HomeAutoRepairs");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showTOS() {
    var x = document.getElementById("TOS");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function showHelpPointPersoncom(){
  var x = document.getElementById("HelpPointPersoncom");
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
function showFeaturedPointPersonoftheweek(){
  var x = document.getElementById("FeaturedPointPersonoftheWeek");
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







//alert("HERE IS A MESSAGE")

function alertTest() {
    alert("HERE IS ANOTHER MESSAGE");
}

function termsButton() {
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
