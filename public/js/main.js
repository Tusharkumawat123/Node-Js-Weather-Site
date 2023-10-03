const btn_id = document.getElementById('submitBtn');
const city = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const day_name = document.getElementById('day');
const today_date = document.getElementById('today_date');
const tempratuure = document.getElementById('temp');
const weather_status = document.getElementById('temp_status');

// Print date 
const date = new Date();
            let day = date.getDay();
            let dates = date.getDate();
            let month = date.getMonth();

            switch (day) {
                case 0:
                  day = "Sunday";
                  break;
                case 1:
                  day = "Monday";
                  break;
                case 2:
                   day = "Tuesday";
                  break;
                case 3:
                  day = "Wednesday";
                  break;
                case 4:
                  day = "Thursday";
                  break;
                case 5:
                  day = "Friday";
                  break;
                case 6:
                  day = "Saturday";
              }
            
              switch (month) {
                case 1:
                  month = "JAN";
                  break;
                case 2:
                    month = "FEB";
                    break;
                case 3:
                    month = "MARCH";
                    break;
                case 4:
                    month = "APR";
                    break;
                case 5:
                    month = "MAY";
                    break;
                case 6:
                    month = "JUN";
                    break;
                case 7:
                    month = "JUL";
                    break;
                case 8:
                    month = "AUG";
                    break;
                case 9:
                    month = "SEPT";
                    break;
                case 10:
                    month = "OCT";
                    break;
                case 11:
                    month = "NOV";
                    break;
                case 12:
                    month = "DEC";
                    break;
              }
            
              day_name.innerHTML = day;
              today_date.innerHTML = `${dates} ${month}`;


// Api run for weather
let getInfo = async(event)=>{
    event.preventDefault()
    let cityVal = city.value;

    if(cityVal === ''){
        city_name.innerHTML = "Please Enter the city name before get data!";
        document.querySelector('.middle_layer').classList.add('data_hide');
    }else{
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&APPID=90f10024e1061f1285b0b3df44ea86f9`;
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);

            let country_name = data.name;
            let country_code = data.sys.country;
            let temprature = Math.round(data.main.temp);
            let weather = data.weather[0].main;
            console.log(weather);

            city_name.innerHTML = `${country_name}, ${country_code}`;
            tempratuure.innerHTML = temprature;
           
            if(weather == 'Clouds'){
                weather_status.innerHTML = '<i class="fa fa-solid fa-cloud"></i>';
            }else if(weather =='Sunny'){
                weather_status.innerHTML = '<i class="fa-solid fa-sun" style="color: #eccc68;"></i>';
            }
            else if(weather == 'Haze'){
                weather_status.innerHTML = '<i class="fa fa-solid fa-cloud"></i>';
            }
            else if(weather == 'Rain'){
                weather_status.innerHTML = '<i class="fa fa-thin fa-cloud-rain"></i>';
            }else{
                 
            }
            
            document.querySelector('.middle_layer').classList.remove('data_hide');

        }
        catch{
            document.querySelector('.middle_layer').classList.add('data_hide');
            city_name.innerHTML = "Please Enter the city name Properly";
            
        }
    
}
}
btn_id.addEventListener('click',getInfo);
