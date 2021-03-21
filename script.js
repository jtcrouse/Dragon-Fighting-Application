var wrap = document.body.querySelector(".wrapper");
var numberELE= document.body.querySelector(".message").innerHTML="Player damage delt, "+player_damage_delt+".";
var player_damage_delt=0;
var attack_type="a";
var number=0;

function player_attack(player_damage_delt,attack_type)
{   
  //var box=document.createElement("div");
  if(attack_type=="fire")
    {
      player_damage_delt-=1;
    }
  else if(attack_type=="ice")
    {
      player_damage_delt+=1;
    }
  else if(attack_type=="poison")
    {
      player_damage_delt=player_damage_delt;
    }
  //box.innerHTML=player_damage_delt;
 // wrap.appendChild(box);
 number=number+player_damage_delt;
  var numberEle=document.body.querySelector(".message").innerHTML="Player damage delt, "+number+".";
  
  if(number>=10)
  {
    document.body.querySelector(".message3").innerHTML="You are the winner.";
  }
}

  document.body.querySelector(".fire").addEventListener("click", function()
  {player_attack(3,"fire");
  })
  document.body.querySelector(".ice").addEventListener("click", function()
  {player_attack(1,"ice");
  })
    document.body.querySelector(".poison").addEventListener("click", function()
  {player_attack(4,"poison");
  })