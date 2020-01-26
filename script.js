// JavaScript source code


document.getElementById("userSearch").value="What are you looking for?"


function showTOS() {

    
    var x = document.getElementById("TOS");
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



console.log("The year is " + getDate())

var x = document.getElementById("Year")

alert(x.innerHTML)
