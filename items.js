  let item = {
    map: 'beginnersVillage',
    x: 3,
    y: 3,
    shape: [
      ['[', ']'],
      ['{', '}']
    ],
    collected: false
  };

  let key1 = { 
    map: 'house1',
    x: 24,
    y: 2,
    shape: [
          ['/','o','\\','_','_','_','_','_'],
          ['\\','_','_','/','-','=','"','=','"']
    ],
    collected: false
  }
  
  let candy1 = { 
    x: 24,
    y: 2,
    shape: [
          ['/','\\','.','-','-','.','/','\\'],
          ['\\','/','\'','-','-','\'','\\','/']
    ],
    collected: false
  }


function checkItems(mapname)
{
    //draw item if not collected
  if (currentMap === item.map && !item.collected) {
    for (let row = 0; row < item.shape.length; row++) {
      const spriteLine = item.shape[row];
      const mapY = item.y + row;
      if (mapY < mapBeginnersVillageHeight) {
        for (let col = 0; col < spriteLine.length; col++) {
          const mapX = item.x + col;
          if (mapX < mapBeginnersVillageWidth) map[mapY][mapX] = spriteLine[col];
        }
      }
    }
          const display = map.map(line => line.join('')).join('\n');
          document.getElementById('map').innerHTML = display;

}



            //draw key if not collected
  if (currentMap === key1.map && !key1.collected) {
    for (let row = 0; row < key1.shape.length; row++) {
      const spriteLine = key1.shape[row];
      const mapY = key1.y + row;
      if (mapY < mapHouse1Heigth) {
        for (let col = 0; col < spriteLine.length; col++) {
          const mapX = key1.x + col;
          if (mapX < mapHouse1Width) map[mapY][mapX] = spriteLine[col];
        }
      }
    }
          const display = map.map(line => line.join('')).join('\n');
          document.getElementById('map').innerHTML = display;
   }



 } 