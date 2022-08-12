let countries={
    Iran:["Tehran","Mashhad","Esfahan","Shiraz","Kish"],
    Turkey:["Istanbul","Antalya","Ankara","Erzurum","Mugla"],
    US:["NewYork","Callifornia","Georgia","Texas","Arizona"],
    Japan:["Tokyo","Osaka","Chiba","Hokaido","Hiroshima"]
}
let originCountry = document.querySelector("#orgn-cntr")
let originCity = document.querySelector("#orgn-ct")
let destinationCountry = document.querySelector("#dst-cntr")
let destinationCity = document.querySelector("#dst-ct")
originCountry.addEventListener("change",function(){
  if(originCountry.value!="select"){
    originCity.innerHTML="Select one..."
    countries[originCountry.value].forEach(element => {
        let option = document.createElement("option")
        option.innerHTML=element
        originCity.appendChild(option)
    });
  }else{
    originCity.innerHTML ="<option>Select one...</option>"
  }
})
destinationCountry.addEventListener("change",function(){
    if(destinationCountry.value!="select"){
      destinationCity.innerHTML="Select one..."
      countries[destinationCountry.value].forEach(element => {
          let option = document.createElement("option")
          option.innerHTML=element
          destinationCity.appendChild(option)
      });
    }else{
        destinationCity.innerHTML ="<option>Select one...</option>"
    }
  })