//All the Elements/////////

let month = document.querySelector(".month");
let monthlyAmount = document.querySelector(".monthly-amount");
let todayAmount = document.querySelector(".today-amount");
let maleCount = document.querySelector(".male-count-count");
let femaleCount = document.querySelector(".female-count-count");
let childCount = document.querySelector(".child-count-count");
let houseMonthly = document.querySelector("#house-monthly");
let houseToday = document.querySelector("#house-today");
let houseCount = document.querySelector("#house-count");
let groceriesMonthly = document.querySelector("#groceries-monthly");
let groceriesToday = document.querySelector("#groceries-today");
let groceriesCount = document.querySelector("#groceries-count");
let fashionMonthly = document.querySelector("#fashion-monthly");
let fashionToday = document.querySelector("#fashion-today");
let fashionCount = document.querySelector("#fashion-count");
let educationMonthly = document.querySelector("#education-monthly");
let educationToday = document.querySelector("#education-today");
let educationCount = document.querySelector("#education-count");
let travelMonthly = document.querySelector("#travel-monthly");
let travelToday = document.querySelector("#travel-today");
let travelCount = document.querySelector("#travel-count");
let wellbeingMonthly = document.querySelector("#wellbeing-monthly");
let wellbeingToday = document.querySelector("#wellbeing-today");
let wellbeingCount = document.querySelector("#wellbeing-count");
let entertainmentMonthly = document.querySelector("#entertainment-monthly");
let entertainmentToday = document.querySelector("#entertaiment-today");
let entertainmentCount = document.querySelector("#entertaiment-count");
let subscriptionsMonthly = document.querySelector("#subscriptions-monthly");
let subscriptionsToday = document.querySelector("#subscriptions-today");
let subscriptionsCount = document.querySelector("#subscriptions-count");
let householdMonthly = document.querySelector("#household-monthly");
let householdToday = document.querySelector("#household-today");
let householdCount = document.querySelector("#household-count");
let electronicsMonthly = document.querySelector("#electronics-monthly");
let electronicsToday = document.querySelector("#electronics-today");
let electronicsCount = document.querySelector("#electronics-count");
let tripsMonthly = document.querySelector("#trips-monthly");
let tripsToday = document.querySelector("#trips-today");
let tripsCount = document.querySelector("#trips-count");
let givingMonthly = document.querySelector("#giving-monthly");
let givingToday = document.querySelector("#giving-today");
let givingCount = document.querySelector("#giving-count");
let medicalMonthly = document.querySelector("#medical-monthly");
let medicalToday = document.querySelector("#medical-today");
let medicalCount = document.querySelector("#medical-count");
let vehicleMonthly = document.querySelector("#vehicle-monthly");
let vehicleToday = document.querySelector("#vehicle-today");
let vehicleCount = document.querySelector("#vehicle-count");
let careMonthly = document.querySelector("#care-monthly");
let careToday = document.querySelector("#care-today");
let careCount = document.querySelector("#care-count");
let eventsMonthly = document.querySelector("#events-monthly");
let eventsToday = document.querySelector("#events-today");
let eventsCount = document.querySelector("#events-count");
let investmentsMonthly = document.querySelector("#investments-monthly");
let investmentsToday = document.querySelector("#investments-today");
let investmentsCount = document.querySelector("#investments-count");
let othersMonthly = document.querySelector("#others-monthly");
let othersToday = document.querySelector("#others-today");
let othersCount = document.querySelector("#others-count");
let statsButton = document.querySelector(".stats-button")


//All the Elements/////////

//Date Function
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-IN', {
        month: 'long',
    }).format(date);
}
//Date Function

//Number Decimal Function
function formatIndianNumber(x) {
    x = x.toString().split('.');
    let intPart = x[0];
    let decPart = x[1] ? '.' + x[1] : '';

    let lastThree = intPart.slice(-3);
    let otherNumbers = intPart.slice(0, -3);

    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }

    let formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + decPart;
    return formatted;
}

//Number Decimal Function

function readData() {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let dashboardData = data.getData3; //Adding more sheets , you can keep on adding by including variables


            //------------Inner Html Data----------------------
            month.innerHTML = formatDate(dashboardData[30][0]);  //Dashboard Month
            monthlyAmount.innerHTML = formatIndianNumber(dashboardData[20][1]); //Monthly Amount
            todayAmount.innerHTML = formatIndianNumber(dashboardData[20][2]);
            maleCount.innerHTML = dashboardData[27][0];
            femaleCount.innerHTML = dashboardData[27][1];
            childCount.innerHTML = dashboardData[27][2];
            
            houseMonthly.innerHTML = formatIndianNumber(dashboardData[0][1]);
            houseToday.innerHTML = formatIndianNumber(dashboardData[0][2]);
            houseCount.innerHTML = dashboardData[0][3];
            groceriesMonthly.innerHTML = formatIndianNumber(dashboardData[1][1]);
            groceriesToday.innerHTML = formatIndianNumber(dashboardData[1][2]);
            groceriesCount.innerHTML = dashboardData[1][3];
            fashionMonthly.innerHTML = formatIndianNumber(dashboardData[2][1]);
            fashionToday.innerHTML = formatIndianNumber(dashboardData[2][2]);
            fashionCount.innerHTML = dashboardData[2][3];
            educationMonthly.innerHTML = formatIndianNumber(dashboardData[3][1]);
            educationToday.innerHTML = formatIndianNumber(dashboardData[3][2]);
            educationCount.innerHTML = dashboardData[3][3];
            travelMonthly.innerHTML = formatIndianNumber(dashboardData[5][1]);
            travelToday.innerHTML = formatIndianNumber(dashboardData[5][2]);
            travelCount.innerHTML = dashboardData[5][3];
            wellbeingMonthly.innerHTML = formatIndianNumber(dashboardData[6][1]);
            wellbeingToday.innerHTML = formatIndianNumber(dashboardData[6][2]);
            wellbeingCount.innerHTML = dashboardData[6][3];
            entertainmentMonthly.innerHTML = formatIndianNumber(dashboardData[7][1]);
            entertainmentToday.innerHTML = formatIndianNumber(dashboardData[7][2]);
            entertainmentCount.innerHTML = dashboardData[7][3];
            subscriptionsMonthly.innerHTML = formatIndianNumber(dashboardData[8][1]);
            subscriptionsToday.innerHTML = formatIndianNumber(dashboardData[8][2]);
            subscriptionsCount.innerHTML = dashboardData[8][3];
            householdMonthly.innerHTML = formatIndianNumber(dashboardData[9][1]);
            householdToday.innerHTML = formatIndianNumber(dashboardData[9][2]);
            householdCount.innerHTML = dashboardData[9][3];
            electronicsMonthly.innerHTML = formatIndianNumber(dashboardData[10][1]);
            electronicsToday.innerHTML = formatIndianNumber(dashboardData[10][2]);
            electronicsCount.innerHTML = dashboardData[10][3];
            tripsMonthly.innerHTML = formatIndianNumber(dashboardData[11][1]);
            tripsToday.innerHTML = formatIndianNumber(dashboardData[11][2]);
            tripsCount.innerHTML = dashboardData[11][3];
            givingMonthly.innerHTML = formatIndianNumber(dashboardData[12][1]);
            givingToday.innerHTML = formatIndianNumber(dashboardData[12][2]);
            givingCount.innerHTML = dashboardData[12][3];
            medicalMonthly.innerHTML = formatIndianNumber(dashboardData[4][1]);
            medicalToday.innerHTML = formatIndianNumber(dashboardData[4][2]);
            medicalCount.innerHTML = dashboardData[4][3];
            vehicleMonthly.innerHTML = formatIndianNumber(dashboardData[13][1]);
            vehicleToday.innerHTML = formatIndianNumber(dashboardData[13][2]);
            vehicleCount.innerHTML = dashboardData[13][3];
            careMonthly.innerHTML = formatIndianNumber(dashboardData[15][1]);
            careToday.innerHTML = formatIndianNumber(dashboardData[15][2]);
            careCount.innerHTML = dashboardData[15][3];
            eventsMonthly.innerHTML = formatIndianNumber(dashboardData[14][1]);
            eventsToday.innerHTML = formatIndianNumber(dashboardData[14][2]);
            eventsCount.innerHTML = dashboardData[14][3];
            investmentsMonthly.innerHTML = formatIndianNumber(dashboardData[17][1]);
            investmentsToday.innerHTML = formatIndianNumber(dashboardData[17][2]);
            investmentsCount.innerHTML = dashboardData[17][3];
            othersMonthly.innerHTML = formatIndianNumber(dashboardData[16][1]);
            othersToday.innerHTML = formatIndianNumber(dashboardData[16][2]);
            othersCount.innerHTML = dashboardData[16][3];


          if(dashboardData[118][0] === 1 || dashboardData[118][0] === 2){
            statsButton.style.visibility = "visible"
          }
          else{
            statsButton.style.visibility = "hidden"
          }



            //------------Inner Html Data----------------------
        })
}

readData()





document.addEventListener("DOMContentLoaded", function () {
  const hour = new Date().getHours();

  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Evening";
  } else {
    greeting = "Night";
  }

  const greetingEl = document.querySelector(".greetings2");

  if (greetingEl) {
    greetingEl.textContent = greeting;
  } else {
    console.warn("No element with class 'greetings2' found.");
  }
});