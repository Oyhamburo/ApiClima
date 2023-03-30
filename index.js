const APIKEY = '91b78f08c19b4400a0b182803231402'
const SPINNER = `<div class="spinner-border text-info" role="status"><span class="visually-hidden">Loading...</span></div>`

const getIP = async () => {
    return await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(response => response.ip)
}

const getClimate = async (ip) => {
    return await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${ip}`)
    .then(response => response.json())
}

const consultClimate = async ()=>{
    const body = document.getElementById('climaContainer')
    body.innerHTML = SPINNER
    const ip = await getIP()
    let climate = await getClimate(ip)
    const current = climate.current
    const location = climate.location
    body.innerHTML = `Temperatura Actual en ${location.region}, ${location.country} es de ${current.temp_c}° <br>`
    body.innerHTML += `<img src="http:${current.condition.icon}" alt=""> <br>`
    body.innerHTML += `${current.condition.text}`
}