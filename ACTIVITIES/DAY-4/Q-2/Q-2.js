const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.responseType = 'json';

xhr.onload = function() {
    const json = xhr.response;
    json.forEach(country => {
      console.log("COUNTRY:",country.name.common);
      console.log("FLAG:",country.flags.alt);
      console.log("-------------------------------------------------------------------------------------");

    });
  };
xhr.send();