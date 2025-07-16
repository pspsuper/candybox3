  const mapElem = document.getElementById('map');
  const coordsElem = document.getElementById('coords');
  const charWidth = 7;  // approx width of a monospace character in pixels
  const charHeight = 15; // approx height of a monospace line in pixels

    mapElem.addEventListener('mousemove', e => {
    const rect = mapElem.getBoundingClientRect();

    // Calculate mouse position relative to top-left of the map <pre>
    const xPix = e.clientX - rect.left;
    const yPix = e.clientY - rect.top;

    // Calculate character coords (x: column, y: row)
    const x = Math.floor(xPix / charWidth);
    const y = Math.floor(yPix / charHeight);

    // Optional: get character at that position
    const lines = mapElem.textContent.split('\n');
    const charAtPos = (lines[y] && lines[y][x]) || ' ';

    coordsElem.textContent = `Coordinates: (${x-1}, ${y-1}) Character: '${charAtPos}'`;
  });
    

  mapElem.addEventListener('mouseleave', () => {
    coordsElem.textContent = 'Hover over map to see coordinates';
  });