var character = document.getElementById("character");
var block = document.getElementById("block")
var counter=0;
function jump(){
  if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
      character.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<30 && blockLeft>-30 && characterTop>=140){
      block.style.animation = "none";
      alert("Game Over. score: "+Math.floor(counter/100));
      counter=0;
      block.style.animatie = "block 1s infinte linear";
  }else{
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
  }
},10);