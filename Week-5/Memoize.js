
  const temperatureData = {
    'NewYork': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
    };

    function createcahce(){

      var cached_data = {};
      
      return function getTemperatureForCity(city){
        if (cached_data[city]){
          console.log(`Returning cached data for ${city}`);
          return cached_data[city];
        }
        else{
          if (!temperatureData[city]){
            console.log(`NO data for ${city}`)
            return null;
          }
          console.log(`Returning API cached data for ${city}`);
          cached_data[city] = temperatureData[city];
          return cached_data[city]
        }
      }     
    }
    
var temp = createcahce()

console.log(temp('London'));
console.log(temp('London'));
console.log(temp('Paris'));
console.log(temp('Paris'));
console.log(temp('Paris'));
console.log(temp('Mandar'));




