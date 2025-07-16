function changeMap(x,y){
  if (currentMap === 'closedChest'){
    if (x >= 1 && x <= 44 && y >= 1 && y <= 14){
        currentMap = 'credits1';
        console.log(currentMap);
        drawMap();
    }
  }

  else if (currentMap === 'credits1'){
    if (x >= 1 && x <= 38 && y >= 1 && y <= 12){
        currentMap = 'credits2';
        console.log(currentMap);
        drawMap();
    }
  }

  else if (currentMap === 'credits2'){
    if (x >= 1 && x <= 38 && y >= 1 && y <= 12){
        currentMap = 'house1';
        console.log(currentMap);
        drawMap();
    }
  }
 
  
  else if (currentMap === 'beginnersVillage'){
      if (x >= 34 && x <= 36 && y === 10) {
        currentMap = 'beginnersIsland';
        console.log(currentMap);
        drawMap();
      };
      if (x === 8 && y === 6) {
        currentMap = 'house1';
        console.log(currentMap);
        drawMap();
      };
      if (x === 15 && y === 6) {
        battleActive = true;
        currentMap = 'house2';
        console.log(currentMap);
        drawMap();
      };
      if (x === 22 && y === 6) {
        currentMap = 'beginnersIsland';
        console.log(currentMap);
        drawMap();
      };
      if (x === 30 && y === 6) {
        currentMap = 'beginnersIsland';
        console.log(currentMap);
        drawMap();
      };
    }

  else if (currentMap === 'beginnersIsland') {
      if (x >= 29 && x <= 45 && y >= 6 && y <=8) {
        currentMap = 'beginnersVillage';
        console.log(currentMap);
        drawMap();
      };
      if (x >= 19 && x <= 26 && y >= 5 && y <= 9) {
        currentMap = 'lollipopFarm';
        console.log(currentMap);
        drawMap();
      };
      if (x >= 2 && x < 18 && y >= 11 && y <= 18) {
        currentMap = 'dock';
        console.log(currentMap);
        drawMap();
      };
      if (x >= 25 && x <= 39 && y >= 26 && y <= 30) {
        battleActive = false;
        currentMap = 'battleMapCity';
        console.log(currentMap);
        drawMap();
      };
    }

  else if (currentMap === 'lollipopFarm') {
      if (x >= 39 && x <= 41 && y === 9) {
        currentMap = 'beginnersIsland';
        console.log(currentMap);
        drawMap();
      };
    }
  else if (currentMap === 'dock') {
      if (x >= 58 && x <= 60 && y === 16) {
        currentMap = 'beginnersIsland';
        console.log(currentMap);
        drawMap();
      };
    }

    else if (currentMap === 'house1') {
      if (x >= 50 && x <= 52 && y === 16) {
        currentMap = 'beginnersVillage';
        console.log(currentMap);
        drawMap();
      };
    }

    else if (currentMap === 'house2') {
      if (x >= 7 && x <= 10 && y >= 6 && y <= 8) {
        battleActive = false;
        currentMap = 'beginnersVillage';
        console.log(currentMap);
        drawMap();
      };
    }
   if (currentMap === 'beginnersVillage'){
      document.getElementById('map-title').textContent ='Noob village'
    }
   if (currentMap == 'house1'){
     document.getElementById('map-title').textContent ='Inside your house'  
    }  
   if (currentMap == 'beginnersIsland'){
     document.getElementById('map-title').textContent ='Beginner Island'
    }
    if (currentMap == 'lollipopFarm'){
     document.getElementById('map-title').textContent ='The standard Lollipop Farm'
    }
    if (currentMap == 'dock'){
     document.getElementById('map-title').textContent ='Dock'
    }
    if (currentMap == 'battleMapCity'){
     document.getElementById('map-title').textContent ='City sunset'
    }
    if (currentMap == 'lollipopFarm'){
     document.getElementById('map-title').textContent ='The standard Lollipop Farm'
    }
    if (currentMap == 'house2'){
     document.getElementById('map-title').textContent ='Scare the bat away'
    }


}