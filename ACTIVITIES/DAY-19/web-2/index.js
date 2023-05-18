
async function Spacecrafts() {
let result = await fetch("https://isro.vercel.app/api/spacecrafts");
let res1 = await result.json();
console.log(res1);



var container1 = document.createElement("div");
container1.className="container-fluid  space";
var row1 = document.createElement("div");
row1.className="row row1";
row1.innerHTML=`<h5>List of Spacecraft :</h5><br>`;

////////////

var col1=document.createElement("div");
col1.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
for(let i=0;i<23;i++)
{
var out1=document.createElement("div");
out1.setAttribute("class","out");
out1.innerHTML+=`Craft ${[i+1]}: ${res1.spacecrafts[i].name}<br><br>`;
col1.append(out1);
}


//////////////////////


var col2=document.createElement("div");
col2.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
for(let i=23;i<46;i++)
{
var out2=document.createElement("div");
out2.setAttribute("class","out");
out2.innerHTML+=`Craft ${[i+1]}: ${res1.spacecrafts[i].name}<br><br>`;
col2.append(out2);
}


////////////////////////


  var col3=document.createElement("div");
col3.className=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
for(let i=46;i<69;i++)
{
var out3=document.createElement("div");
out3.setAttribute("class","out");
out3.innerHTML+=`Craft ${[i+1]}: ${res1.spacecrafts[i].name}<br><br>`;
col3.append(out3);
  }


//////////////////////////


  var col4=document.createElement("div");
col4.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
for(let i=69;i<92;i++)
{
var out4=document.createElement("div");
out4.setAttribute("class","out");
out4.innerHTML+=`Craft ${[i+1]}: ${res1.spacecrafts[i].name}<br><br>`;
col4.append(out4);
  }


///////////////////////////////////////



  var col5=document.createElement("div");
col5.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
for(let i=92;i<112;i++)
{
var out5=document.createElement("div");
out5.setAttribute("class","out");
out5.innerHTML+=`Craft ${[i+1]}: ${res1.spacecrafts[i].name}<br><br>`;
col5.append(out5);
  }
///////////////////////////////////////



  row1.append(col1,col2,col3,col4,col5);
  container1.append(row1);
  document.body.append(container1);
}


//////////////////////22222222222222222//////////////////////////////////////////

async function launchers() {
  
  let result = await fetch("https://isro.vercel.app/api/launchers");
  let res1 = await result.json();
  console.log(res1);
  
  
  
  var container1 = document.createElement("div");
  container1.className="container-fluid  space";
  var row1 = document.createElement("div");
  row1.className="row row1";
  row1.innerHTML=`<h5>List of launchers :</h5><br>`;
  
  ////////////
  
  var col1=document.createElement("div");
  col1.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=0;i<16;i++)
  {
  var out1=document.createElement("div");
  out1.setAttribute("class","out");
  out1.innerHTML+=`launcher ${[i+1]}: ${res1.launchers[i].id}<br><br>`;
  col1.append(out1);
  }
  
  
  //////////////////////
  
  
  var col2=document.createElement("div");
  col2.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=16;i<32;i++)
  {
  var out2=document.createElement("div");
  out2.setAttribute("class","out");
  out2.innerHTML+=`launcher ${[i+1]}: ${res1.launchers[i].id}<br><br>`;
  col2.append(out2);
  }
  
  
  ////////////////////////
  
  
    var col3=document.createElement("div");
  col3.className=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=32;i<48;i++)
  {
  var out3=document.createElement("div");
  out3.setAttribute("class","out");
  out3.innerHTML+=`launcher ${[i+1]}: ${res1.launchers[i].id}<br><br>`;
  col3.append(out3);
    }
  
  
  //////////////////////////
  
  
    var col4=document.createElement("div");
  col4.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=48;i<64;i++)
  {
  var out4=document.createElement("div");
  out4.setAttribute("class","out");
  out4.innerHTML+=`launcher ${[i+1]}: ${res1.launchers[i].id}<br><br>`;
  col4.append(out4);
    }
  
  
  ///////////////////////////////////////
  
  
  
    var col5=document.createElement("div");
  col5.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=64;i<80;i++)
  {
  var out5=document.createElement("div");
  out5.setAttribute("class","out");
  out5.innerHTML+=`launcher ${[i+1]}: ${res1.launchers[i].id}<br><br>`;
  col5.append(out5);
    }
  ///////////////////////////////////////
  
  
  
    row1.append(col1,col2,col3,col4,col5);
    container1.append(row1);
    document.body.append(container1);
  }
  
  
  


//////////////////////////////////////////////////33333333333333333333333333333/////////////////////////////////////




async function CustomerSatellites() {
  
  let result = await fetch("https://isro.vercel.app/api/customer_satellites");
  let res1 = await result.json();
  console.log(res1);
  
  
  
  var container1 = document.createElement("div");
  container1.className="container-fluid  space";
  var row1 = document.createElement("div");
  row1.className="row row1";
  row1.innerHTML=`<h5>List of <br>Customer Satellites :</h5><br>`;
  
  ////////////
  
  var col1=document.createElement("div");
  col1.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=0;i<10;i++)
  {
  var out1=document.createElement("div");
  out1.setAttribute("class","out");
  out1.innerHTML+=`CUSTOMER_SATELLITES ${[i+1]}: <br><br>
  ID:${res1.customer_satellites[i].id}<br>
  Country:${res1.customer_satellites[i].country}<br>
  Launch_date:${res1.customer_satellites[i].launch_date}<br>
  Mass:${res1.customer_satellites[i].mass}<br>
  Launcher:${res1.customer_satellites[i].launcher}<br><br> `;
  col1.append(out1);
  }
  
  
  //////////////////////
  
  
  var col2=document.createElement("div");
  col2.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=10;i<20;i++){
  var out2=document.createElement("div");
  out2.setAttribute("class","out");
  out2.innerHTML+=`CUSTOMER_SATELLITES ${[i+1]}: <br><br>
  ID:${res1.customer_satellites[i].id}<br>
  Country:${res1.customer_satellites[i].country}<br>
  Launch_date:${res1.customer_satellites[i].launch_date}<br>
  Mass:${res1.customer_satellites[i].mass}<br>
  Launcher:${res1.customer_satellites[i].launcher}<br><br> `;
  col2.append(out2);
  }
  
  
  ////////////////////////
  
  
    var col3=document.createElement("div");
  col3.className=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=20;i<30;i++)
  {
  var out3=document.createElement("div");
  out3.setAttribute("class","out");
  out3.innerHTML+=`CUSTOMER_SATELLITES ${[i+1]}: <br><br>
  ID:${res1.customer_satellites[i].id}<br>
  Country:${res1.customer_satellites[i].country}<br>
  Launch_date:${res1.customer_satellites[i].launch_date}<br>
  Mass:${res1.customer_satellites[i].mass}<br>
  Launcher:${res1.customer_satellites[i].launcher}<br><br> `;
  col3.append(out3);
    }
  
  
  //////////////////////////
  
  
    var col4=document.createElement("div");
  col4.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=30;i<40;i++)
  {
  var out4=document.createElement("div");
  out4.setAttribute("class","out");
  out4.innerHTML+=`CUSTOMER_SATELLITES ${[i+1]}: <br><br>
  ID:${res1.customer_satellites[i].id}<br>
  Country:${res1.customer_satellites[i].country}<br>
  Launch_date:${res1.customer_satellites[i].launch_date}<br>
  Mass:${res1.customer_satellites[i].mass}<br>
  Launcher:${res1.customer_satellites[i].launcher}<br><br> `;
  col4.append(out4);
    }
  
  
  ///////////////////////////////////////
  
  
  
    var col5=document.createElement("div");
  col5.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=40;i<50;i++)
  {
  var out5=document.createElement("div");
  out5.setAttribute("class","out");
  out5.innerHTML+=`CUSTOMER_SATELLITES ${[i+1]}: <br><br>
  ID:${res1.customer_satellites[i].id}<br>
  Country:${res1.customer_satellites[i].country}<br>
  Launch_date:${res1.customer_satellites[i].launch_date}<br>
  Mass:${res1.customer_satellites[i].mass}<br>
  Launcher:${res1.customer_satellites[i].launcher}<br><br> `;
  col5.append(out5);
    }
  ///////////////////////////////////////
  
  
  
    row1.append(col1,col2,col3,col4,col5);
    container1.append(row1);
    document.body.append(container1);
  }


////////////////////////////444444444444444444444444444444444444444//////////////////////////////////////







async function centres() {
  
  let result = await fetch("https://isro.vercel.app/api/centres");
  let res1 = await result.json();
  console.log(res1);
  
  
  
  var container1 = document.createElement("div");
  container1.className="container-fluid  space";
  var row1 = document.createElement("div");
  row1.className="row row1";
  row1.innerHTML=`<h5>List of Centres :</h5><br>`;
  
  ////////////
  
  var col1=document.createElement("div");
  col1.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=0;i<9;i++)
  {
  var out1=document.createElement("div");
  out1.setAttribute("class","out");
  out1.innerHTML+=`Centres ${[i+1]}: <br><br>
  ID:${res1.centres[i].id}<br>
  Name:${res1.centres[i].name}<br>
  Place:${res1.centres[i].Place}<br>
  State:${res1.centres[i].State}<br><br> `;
  col1.append(out1);
  }
  
  
  //////////////////////
  
  
  var col2=document.createElement("div");
  col2.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=9;i<18;i++){
  var out2=document.createElement("div");
  out2.setAttribute("class","out");
  out2.innerHTML+=`Centres ${[i+1]}: <br><br>
  ID:${res1.centres[i].id}<br>
  Name:${res1.centres[i].name}<br>
  Place:${res1.centres[i].Place}<br>
  State:${res1.centres[i].State}<br><br> `;
  col2.append(out2);
  }
  
  
  ////////////////////////
  
  
    var col3=document.createElement("div");
  col3.className=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=18;i<27;i++)
  {
  var out3=document.createElement("div");
  out3.setAttribute("class","out");
  out3.innerHTML+=`Centres ${[i+1]}: <br><br>
  ID:${res1.centres[i].id}<br>
  Name:${res1.centres[i].name}<br>
  Place:${res1.centres[i].Place}<br>
  State:${res1.centres[i].State}<br><br> `;
  col3.append(out3);
    }
  
  
  //////////////////////////
  
  
    var col4=document.createElement("div");
  col4.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=27;i<36;i++)
  {
  var out4=document.createElement("div");
  out4.setAttribute("class","out");
  out4.innerHTML+=`Centres ${[i+1]}: <br><br>
  ID:${res1.centres[i].id}<br>
  Name:${res1.centres[i].name}<br>
  Place:${res1.centres[i].Place}<br>
  State:${res1.centres[i].State}<br><br> `;
  col4.append(out4);
    }
  
  
  ///////////////////////////////////////
  
  
  
    var col5=document.createElement("div");
  col5.className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2";
  for(let i=36;i<44;i++)
  {
  var out5=document.createElement("div");
  out5.setAttribute("class","out");
  out5.innerHTML+=`Centres ${[i+1]}: <br><br>
  ID:${res1.centres[i].id}<br>
  Name:${res1.centres[i].name}<br>
  Place:${res1.centres[i].Place}<br>
  State:${res1.centres[i].State}<br><br> `;
  col5.append(out5);
    }
  ///////////////////////////////////////
  
  
  
    row1.append(col1,col2,col3,col4,col5);
    container1.append(row1);
    document.body.append(container1);
  }




