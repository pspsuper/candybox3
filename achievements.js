const achievementsList = [
  { id: 'firstCandy', description: 'Collected your first candy!', unlocked: false, tooltip: 'You start with 1 candy generator' },
  { id: 'candyLover', description: 'Collected 100 candies!', unlocked: false, tooltip: 'You get another candy generator!' },
  { id: 'candyMaster', description: 'Collected 1000 candies!', unlocked: false, tooltip: 'Probably your first lollipop' },
  { id: 'getMaxHealth', description: 'Get Max health to 120!', unlocked: false, tooltip: '5% extra health always!' }, 
  { id: 'getMaxHealth', description: 'Get Max health to 200!', unlocked: false, tooltip: '10% extra health always!' }, 
  { id: 'farmBought', description: 'farmBought', unlocked: false, tooltip: 'You get another candy generator on top of it' }, 
  { id: 'firstEnemy', description: 'firstEnemy', unlocked: false, tooltip: 'You get an extra attack'},
];


function checkAchievements() {
  if (!achievementsList[0].unlocked && candies >= 1) {
    achievementsList[0].unlocked = true;
  }
  if (!achievementsList[1].unlocked && candies >= 100) {
    achievementsList[1].unlocked = true;
    getCandyGenerator();
  }
  if (!achievementsList[2].unlocked && candies >= 1000) {
    achievementsList[2].unlocked = true;
    lollipops += 1;
    lollipopsUnlocked = true;
  }
    if (!achievementsList[3].unlocked && maxHealth >= 120) {
    achievementsList[3].unlocked = true;
    healthAchievementBonus = healthAchievementBonus * 1.05;
  }
      if (!achievementsList[4].unlocked && maxHealth >= 200) {
    achievementsList[4].unlocked = true;
    healthAchievementBonus = healthAchievementBonus * 1.1;
  }
    if (!achievementsList[5].unlocked && farms >= 1) {
    achievementsList[5].unlocked = true;
    getCandyGenerator();
  }
  updateAchievementDisplay();
}



function updateAchievementDisplay() {
  const achElem = document.getElementById('achievements');
  achElem.innerHTML = 'Achievements:\n\n';

  achievementsList.forEach(a => {
    // Use a span or div with title attribute for tooltip
    const status = a.unlocked ? '[✓]' : '[ ]';
    const tooltip = a.tooltip || 'No additional info';
    
    achElem.innerHTML += `<div title="${tooltip}">${status} ${a.description}</div>`;
  });
}

document.getElementById('toggleAchievementsBtn').addEventListener('click', () => {
  const achElem = document.getElementById('achievements');
  if (achElem.style.display === 'none') {
    achElem.style.display = 'block';
    document.getElementById('toggleAchievementsBtn').textContent = 'Hide Achievements';
  } else {
    achElem.style.display = 'none';
    document.getElementById('toggleAchievementsBtn').textContent = 'Show Achievements';
  }
});