
fetch('https://asutosh-weather-app.herokuapp.com/weather?address=puri').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})


console.log("i love you");
