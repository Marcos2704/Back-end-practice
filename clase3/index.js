const fetch = require("node-fetch");

let keyNasa = `6WS7zBqlhgH82BlnblVvFcKvC1RtcZt04VV93tJz`
let nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${keyNasa}`
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon-species'
const WeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=47255f266c2180f734233c10c15d3ac4'
const ChuckUrl = 'https://api.chucknorris.io/jokes/random'
const RickAndMortyUrl = 'https://rickandmortyapi.com/api/character'
const DoggUrl = 'https://dog.ceo/api/breeds/list/all'


fetch(pokeUrl)
    .then(response => response.json())
    .then(data => mostrarPokeData(data))

    const mostrarPokeData = (data) => {
        console.log(data)
    }


fetch(WeatherUrl)
    .then(response => response.json())
    .then(data => mostrarWeatherData(data))

    const mostrarWeatherData = (data) => {
        console.log(data)
    }



fetch(ChuckUrl)
    .then(response => response.json())
    .then(data => mostrarChuckData(data))

    const mostrarChuckData = (data) => {
        console.log(data)
    }



fetch(RickAndMortyUrl)
    .then(response => response.json())
    .then(data => mostrarRickData(data))

    const mostrarRickData = (data) => {
        console.log(data)
    }


fetch(DoggUrl)
    .then(response => response.json())
    .then(data => mostrarDogData(data))

    const mostrarDogData = (data) => {
        console.log(data)
    }

    fetch(nasaUrl)
    .then(response => response.json())
    .then(data => mostrarData(data))
    
    const mostrarData = (data) =>{
        console.log(data)
    }


