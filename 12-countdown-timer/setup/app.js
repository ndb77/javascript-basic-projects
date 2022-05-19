const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4'); // the days/hours/mins/sec

let futureDate = new Date(2022,4,19,11,30,0); // year, month(0 index-based), date,hours(0-24)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = months[futureDate.getMonth()]
let day = weekdays[futureDate.getDay()]
let date = futureDate.getDate()

giveaway.textContent = `giveaway ends on ${day}, ${month} ${date} ${year} ${hours}:${minutes}am`

// countdown
// need future time and current time, calculate the difference between the two
// and have the day/hours/minutes/seconds change every second to reflect difference

//future time in ms
const futureTime = futureDate.getTime();
function getRemainingTime(){
  const currentTime = new Date().getTime();
  const timeRemaining = futureTime-currentTime; // in millis

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(timeRemaining/oneDay) // how many days in time remaining(ms) ms -> days
  let hours = Math.floor((timeRemaining%oneDay)/oneHour) //from the remainder of ms->days, how many hours 
  let minutes = Math.floor((timeRemaining%oneHour)/oneMinute) //from the remainder of ms->hours, how many minutes 
  let seconds = Math.floor((timeRemaining%oneMinute)/1000)//from the remainder of ms->hours, how many minutes 
  
  const values = [days,hours,minutes,seconds]
  
  items.forEach(function(item,index){
    item.innerHTML = values[index];
  })
  if(timeRemaining<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">This offer has expired!</h4>`
  }
}

//countdown
let countdown = setInterval(getRemainingTime,1000) // callback function, how often to callback
getRemainingTime()