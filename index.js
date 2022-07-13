//alert("hello!");
// document.getElementsByClassName('w')[0].addEventListener("click", handleclick);
// document.getElementsByClassName('a')[0].addEventListener("click", handleclick);
// document.getElementsByClassName('s')[0].addEventListener("click", handleclick);
// document.getElementsByClassName('d')[0].addEventListener("click", handleclick);
// document.getElementsByClassName('j')[0].addEventListener("click", handleclick);
// document.getElementsByClassName('k')[0].addEventListener("click", handleclick);
// document.getElementsByClassName('l')[0].addEventListener("click", handleclick);
for (var i = 0; i < 7; ++i) {

    document.getElementsByClassName('drum')[i].addEventListener("click", function () {
        // this.style.color="white";
        var buttoninnerhtml = this.innerHTML;
        buttonAnimation(buttoninnerhtml);
        switch (buttoninnerhtml) {
            case "w":
                var audio1 = new Audio('sounds/crash.mp3');
                audio1.play();
                break;

            case "a":
                var audio2 = new Audio('sounds/kick-bass.mp3');
                audio2.play();
                break;

            case "s":
                var audio3 = new Audio('sounds/snare.mp3');
                audio3.play();
                break;

            case "d":
                var audio4 = new Audio('sounds/tom-1.mp3');
                audio4.play();
                break;
            case "j":
                var audio5 = new Audio('sounds/tom-2.mp3');
                audio5.play();
                break;
            case "k":
                var audio6 = new Audio('sounds/tom-3.mp3');
                audio6.play();
                break;
            case "l":
                var audio7 = new Audio('sounds/tom-4.mp3');
                audio7.play();
                break;

default: console.log(buttoninnerhtml);
        }
    });

}
// function handleclick0() {
    
// }
// function handleclick1() {
    
// }
// function handleclick2() {
   
// }
// function handleclick3() {
   
// }
// function handleclick4() {
//     var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
// }
// function handleclick5() {
//     var audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
// }
// function handleclick6() {
//     var audio = new Audio('sounds/tom-4.mp3');
//     audio.play();
// }
document.addEventListener("keydown",function(event){
    //alert("key was pressed");
    var a = event.key;
    buttonAnimation(a);
        switch (a) {
            case "w":
                var audio1 = new Audio('sounds/crash.mp3');
                audio1.play();
                break;

            case "a":
                var audio2 = new Audio('sounds/kick-bass.mp3');
                audio2.play();
                break;

            case "s":
                var audio3 = new Audio('sounds/snare.mp3');
                audio3.play();
                break;

            case "d":
                var audio4 = new Audio('sounds/tom-1.mp3');
                audio4.play();
                break;
            case "j":
                var audio5 = new Audio('sounds/tom-2.mp3');
                audio5.play();
                break;
            case "k":
                var audio6 = new Audio('sounds/tom-3.mp3');
                audio6.play();
                break;
            case "l":
                var audio7 = new Audio('sounds/tom-4.mp3');
                audio7.play();
                break;

default: console.log(a);
        }
})
function buttonAnimation(k){
    var m= document.getElementsByClassName(k)[0];
    m.classList.add("pressed");
    setTimeout(function(){
        m.classList.remove("pressed");

    }, 100)
}