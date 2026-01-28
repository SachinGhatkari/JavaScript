let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", () => {

    let input = document.getElementById("input").value;
    let result = document.getElementById("result");

    let apiKey = "340677cb6d7066e64bdaa44b46a6f727";

    let javascriptkey="ab956e64115065e9acb0639a2eb06b60";

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

    fetch(api)
    .then(x => x.json())
    .then(y => {
        if(y.cod === "404"){
            result.innerHTML="<h1> city not found </h1>"
        }else{
            result.innerHTML=`<h2> ${y.name}, ${y.sys.country} </h2>
            <p> Temparature : ${y.main.temp} </p>
            <p> Description : ${y.weather[0].description} </p>
            <p> Wind speed : ${y.wind.speed} </p>
            `;

        }
    })

   
});

