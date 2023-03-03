const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.responseType = 'json';

xhr.onload = function() {
    const json = xhr.response;
    json.forEach(country => {
        console.log("COUNTRY:", country.name.common);
        console.log("REGION:", country.region);
        console.log("SUB-REGION:", country.subregion);
        console.log("POPULATION:", country.population);
        console.log("-------------------------------------------------------------------------------");
      
    });
  };
// console.log(JSON.parse(xhr.response));
xhr.send();

// Use the same rest countries and print all countries names, 
// regions, sub-region and populations