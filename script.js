var weather;
function setup(){
  createCanvas(400,400);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?zip=65810,us&units=imperial&appid=60e76b26520d9e2b2d1f1ee0a79ebbda',gotData);
}

function gotData(data){
  weather = data;
}
function draw(){
  if(weather){
 
    document.getElementById('tempFeels').textContent = weather.main.feels_like + ' degrees';
    document.getElementById('currentCondition').textContent = weather.wind.speed +' mph';

    if(weather.main.feeks_like < 64){
      document.getElementById('jacketContent').textContent = 'Yes';
    }
    else{
      document.getElementById('jacketContent').textContent = 'No';
    }
   
   
    if(weather.clouds.all < 50){
      document.getElementById('cloudContent').textContent = 'Not Cloudy';
      
    }
    else if(weather.clouds.all > 50 && weahter.clouds.all < 75){
      document.getElementById('cloudContent').textContent = 'Cloudy';
    }
    else{
      document.getElementById('cloudContent').textContent = 'Very Cloudy And Or Rainy Bring a Jacket';
    }
    
  }
}
