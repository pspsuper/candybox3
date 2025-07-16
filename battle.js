let health = 80;
let maxHealth = 100;
let healthBars = 50;
let healthAchievementBonus = 1;

let battleActive = false;
let battleWon = false;
let battleLose = false;


//outsite of battle
function getHealth() {
  if (health < maxHealth) {
    health += maxHealth * 0.01;
    health = Math.floor(health);
    if (health > maxHealth) {
      healt = maxHealth;
    }
  }
}

function updateHealthBar() {
  const healthPercent = health / maxHealth;

  // Choose color based on health %
  let color;
  if (healthPercent > 0.7) {
    color = 'green';
  } else if (healthPercent > 0.3) {
    color = 'orange';
  } else {
    color = 'red';
  }
  // Create a simple bar using '█' for health and ' ' for missing health
  //document.getElementById("healthBar").style.color = 'blue';
  const filled = `<span style="color:${color}">█</span>`.repeat(health/maxHealth*healthBars);
  const empty = `<span style="color:gray">.</span>`.repeat((maxHealth - health)/maxHealth*healthBars);
  const bar = `[${filled}${empty}] Health: ${health}/${maxHealth}`;
  document.getElementById('healthBar').innerHTML = bar;
}

function messageScreen(col,row,text){
  for (let i = 0; i < text.length; i++) {
    if (col + i < map[row].length) {
      map[row][col + i] = text[i];
    }
}

}
