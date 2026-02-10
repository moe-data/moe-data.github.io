'use strict';
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../../parsed/api_mst_ship.json');
const outputPath = path.join(__dirname, '../../parsed/ship.json');

try {
  const rawData = fs.readFileSync(inputPath, 'utf8');
  const ships = JSON.parse(rawData);

  const convertedShips = ships.map(ship => {
    const newShip = {};
    
    // Remove 'api_' prefix from all keys
    Object.keys(ship).forEach(key => {
      if (key.startsWith('api_')) {
        const newKey = key.slice(4); // Remove 'api_'
        newShip[newKey] = ship[key];
      } else {
        newShip[key] = ship[key];
      }
    });

    // Derived fields
    if (newShip.maxeq) {
      newShip.total_eq = newShip.maxeq.reduce((sum, val) => sum + val, 0);
    } else {
      newShip.total_eq = 0;
    }

    // Type conversions (e.g., aftershipid to int if string)
    if (typeof newShip.aftershipid === 'string' && !isNaN(parseInt(newShip.aftershipid))) {
      newShip.aftershipid = parseInt(newShip.aftershipid);
    }

    // Add missing exclusives if needed (placeholders)
    newShip.evasion = newShip.kaih || 0; // Approximate from api_kaih if present
    newShip.sight = newShip.saku || 0;   // Approximate from api_saku
    newShip.anti_submarine = newShip.tais ? newShip.tais[1] : 0; // Max ASW if array
    newShip.final_form = "no"; // Default, adjust logic if known
    newShip.HP = newShip.taik ? String(newShip.taik[0]) : "未知"; // Basic string rep

    // Remove any api-specific fields if not needed (e.g., api_tais if flattened)
    if (newShip.tais) delete newShip.tais; // Flattened to anti_submarine

    return newShip;
  });

  fs.writeFileSync(outputPath, JSON.stringify(convertedShips, null, 2), 'utf8');
  console.log('Conversion complete: ship.json updated');
} catch (error) {
  console.error('Error during conversion:', error);
  process.exit(1);
}