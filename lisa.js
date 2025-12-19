document.getElementById("cloudbutt").addEventListener("click", changeVisibility);
function changeVisibility()
{
    document.getElementById("white").style.display="none";
    document.getElementById("white2").style.display="block";
}

document.getElementById("present").addEventListener("click", hidePresent);
function hidePresent()
{
    document.getElementById("white").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="block";
}

document.getElementById("cloudbutt2").addEventListener("click", revealLisa);
function revealLisa()
{
    document.getElementById("white").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    document.getElementById("white4").style.display="block";
    document.getElementById("minilisa").style.display="block";
}
var i = 0;
var txt = "lisa: i hope you have a jolly and restful holiday season! i'm grateful to share a team with such a wondrous human being; thank you for being exactly who you are (and, in keeping with the rhyme scheme, for stanning kendrick lamar) ♡";
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("white4").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}