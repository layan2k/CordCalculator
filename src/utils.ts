'use strict';

// Imports
const fs = require('fs');
const readline = require('readline');
let finalArray: any[] = [];

// Conversion Function (line reader)
const Convert = (file: string) => {

  return new Promise((resolve, reject) => {

    const stream = fs.createReadStream(file);
    // Handle stream error (IE: file not found)
    stream.on('error', reject);

    const reader = readline.createInterface({
      input: stream
    });

    const array: any[] = [];

    reader.on('line', (line: any) => {
      array.push(JSON.parse(line));
    });

    reader.on('close', () => resolve(array));
  });
}

// Interface to ensure object shape stays the same
interface OriginSafety {
  name: string,
  lat: number,
  lon: number
}

// Main coordinates to calculate from
const Origin: OriginSafety = {
  name: 'Dublin',
  lat: 53.339428,
  lon: -6.257664
}

// Conversion and Distance Function Call
Convert('./src/customers.txt')
  .then((res: any) => {
    let data: any[] = res
    data.map((item) => {
      // Loads each object and adds the distance attribute and its value.
      const difdistance: any = calcCrow(Origin.lat, Origin.lon, item.latitude, item.longitude).toFixed(2)
      if (100 >= difdistance)
        finalArray.push({ ...item, distance: difdistance })
    })
  })
  .catch(err => console.error(err));

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
const calcCrow = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  let R = 6371; // km
  let dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

// Converts numeric degrees to radians
const toRad = (Value: number): number => {
  return Value * Math.PI / 180;
}

// Function that bundles up all the fuctions above and return data as JSON

const GetResult = () => {
  if (finalArray.length != 0) {
    return JSON.stringify(finalArray.sort((a, b) => a.user_id - b.user_id))
  }
  else {
    return "MAKE A POST REQUEST "
  }
}

// Export Our Fuctions for Test and the index
export { calcCrow, toRad, GetResult, Convert }
// calcCrow is for calculating the distance between 2 coordinates Distance in km
// toRad changes our  values from deg to rad
// Get Result is all functions combines and returns our answers in JSON format and filtered to a 100km
// handles and  reads our txt file and changes it to JSON format