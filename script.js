const newYears = "1 Jan 2023"
const monthsE1 = document.getElementById("months")
const daysE1 = document.getElementById("days")

const hoursE1 = document.getElementById("hours")

const minutesE1 = document.getElementById("minutes")
const secondsE1 = document.getElementById("seconds")



function countDown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    const seconds =( newYearsDate - currentDate) / 1000

    const days = Math.floor(seconds / 3600 /24)
    const month = `0${Math.floor(days / 30)}`.slice(-2)
    const daysCurrent = `0${days - month*30}`.slice(-2)
    const hours = `0${Math.floor((seconds - (days*24*3600))/3600 )}`.slice(-2)
    const minutes = `0${Math.floor((seconds - (days*24*3600 + hours*60*60))/60)}`.slice(-2)
    const secondsCurrent = `0${Math.floor(seconds - days*24*3600 - hours*3600 - minutes*60)}`.slice(-2)
    console.log(secondsCurrent)

    monthsE1.innerHTML = month
    daysE1.innerHTML = daysCurrent
    hoursE1.innerHTML = hours
    minutesE1.innerHTML = minutes
    secondsE1.innerHTML = secondsCurrent

    
}
countDown()

setInterval(countDown, 1000)