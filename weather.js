const apiKey="110f05239b7439684dfe7176b9783a59";
const checkBtn = document.getElementById('checkBtn');
    checkBtn.addEventListener('click',()=>{
    const output = document.getElementById('weatherInput').value;
    weatherFind(output);
})

const weatherFind = city =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        let temp=data.main.temp-273;
        let icon = data.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.getElementById("cityWeather").innerText = data.name || "Undefined";
        document.getElementById("weatherTemp").innerText = temp.toFixed(2);
        document.getElementById("weatherClass").innerText = data.weather[0].main;
        document.getElementById('icon').setAttribute('src', iconUrl); 
    })

}
weatherFind('Dhaka');



