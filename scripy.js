var hole = document.getElementById("hole")
var character = document.getElementById('character')
var jumping = 0; 
var score = 0;

hole.addEventListener('animationiteration', () => {
    hole.style.top = -((Math.random()*300) + 100) + 'px'
    var audio = new Audio("point.mp3")
    audio.play()
    score ++ ;
})


setInterval(function(){

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    
    if(jumping == 0){
        character.style.top = (characterTop+3) + 'px'}

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var cTop = -(500 - characterTop);
    
    if( (characterTop>480) || ( (blockLeft<40)&&(blockLeft>-100) && ((cTop<holeTop)||(cTop>holeTop+130)) ) ){
        var audio = new Audio("hit.mp3");
        audio.play();
        alert("Game Over Score - " + score)
        score = 0;
        character.style.top = 100 + 'px';
        }

},10)

function jump(){

    var audio = new Audio("wing.mp3")
    audio.play()

    jumping = 1;
    let jumpCount = 0;

    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if(characterTop > 5 && jumpCount < 15){
            character.style.top = (characterTop - 5) + 'px';
        }

        if (jumpCount > 20){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;}

        jumpCount ++ ;}
    ,10);
}
