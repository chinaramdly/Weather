"use strict";
$(document).ready(function () {

    $('#btn').click(function (e) {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("myWeather").val()}&appid=fe57130549e94791f490784ddc5b1ff8&units-metric`
        async function myweather() {
            let responce = await fetch(url)
            let data = await responce.json()
            $('#city').html(data.name)
            $("#temp").html(data.main.temp)
            console.log(data)
        }
        myweather()

    });





























});