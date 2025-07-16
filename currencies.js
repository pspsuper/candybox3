let candies = 0;
let candyGenerator = 1;
let candyEaten = 0;

let lollipops = 0;
let lollipopsUnlocked = false;

let farms = 0;
let farmsUnlocked = false;
let farmsCounter = 0;
let farmsRefreshRate = 300;
let farmsMultiplier = 1; 

// Call this inside your candy collection code or game loop to check progress:


document.getElementById('eatCandyBtn').addEventListener('click', () => {
  if (candies > 9) {
    candyEaten += Math.floor(candies*0.1);
    candies -= Math.floor(candies*0.1);
    maxHealth = Math.floor((Math.sqrt(2*candyEaten) + 100) * healthAchievementBonus);
    updateInventory();
  }
});

document.getElementById('eatCandyBtn2').addEventListener('click', () => {
  if (candies > 0) {
    candyEaten += candies;
    candies = 0;
    maxHealth = Math.floor((Math.sqrt(2*candyEaten) + 100) * healthAchievementBonus);
    updateInventory();
  }
});

function getCandy(){
  candies+=candyGenerator;
}

function getCandyGenerator(){
	candyGenerator+=1
}



function getLollipops() {
  if (farmsCounter > farmsRefreshRate && farms > 0){
    lollipops += farmsMultiplier
    farmsCounter = 0	
  }
  else {
  	farmsCounter++;
  }
}


document.getElementById('specialButton').addEventListener('click', () => {
  if(lollipops <= 10 && lollipops > 0){
    lollipops -= 1;
    farmsUnlocked = true;
    farms+=1;
    farmUpdate(); 
  }
  else{
    farms += Math.floor(lollipops*0.1)
    lollipops = lollipops-Math.floor(lollipops*0.1)
    farmUpdate(); 	
  }
});

document.getElementById('specialButton2').addEventListener('click', () => {
  if(lollipops >= 1){
  	farms += lollipops
    lollipops = 0;
    farmsUnlocked = true;
    farmUpdate(); 
  }
});



function farmUpdate() {
	farmsRefreshRate = Math.floor(1/(farms+3)*1000 - 20)

     if (farmsRefreshRate <= 0){
      farmsRefreshRate = 0
      farmsMultiplier = Math.floor(Math.sqrt(2*farms)-10);
      if (farmsMultiplier < 1){
        farmsMultiplier = 1;
      }
     }
     console.log(farmsMultiplier)
     console.log(farms)
     console.log(farmsRefreshRate)
}