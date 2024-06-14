let p = fetch("http://goweather.herokuapp.com/weather/Ny");

p.then((response) => {
  return response.json()
})
  .then((response) => {
    console.log(response)
})
