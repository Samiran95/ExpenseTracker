//------------Chart Area-----------------

let amountLable = [];
let dateLable = [];

async function chartData() {
    await getChartData();

    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    // Create a red vertical gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#d90429');       // Bright red at top
    gradient.addColorStop(1, '#e0e0e0');       // Clean white at bottom

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dateLable,
            datasets: [{
                label: 'Amount',
                data: amountLable,
                fill: true,
                backgroundColor: gradient,
                borderColor: '#8b0000',       // Deep red border
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 6,
                pointBackgroundColor: 'white',
                pointBorderColor: '#d90429',
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (context) {
                            return `₹ ${context.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                },
                x: {
                    reverse: true,
                    grid: {
                        display: false,
                        tickLength: 4
                    }
                }
            }
        }
    });
}

chartData();


// Fetch Data from API and Filter
async function getChartData() {

    const lineChartData = finalData;

    const listData = lineChartData.getData44;                   //Change the data here

    amountLable = [];
    dateLable = [];

    listData.forEach(item => {
        const date = item[1];   // Month
        const amount = item[3]; // Amount

        if (amount && String(amount).trim() !== '') {
            dateLable.push(date);
            amountLable.push(parseFloat(amount));
        }
    });
}

//------------Chart Area-----------------


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

//------------List Area-----------------//

let monthlyList = document.querySelector(".lower-content-content")
let containerMid = document.querySelector(".container-mid")

let tenContent1 = document.querySelector("#ten1content");
let tenContent2 = document.querySelector("#ten2content");
let tenContent3 = document.querySelector("#ten3content");
let tenContent4 = document.querySelector("#ten4content");
let tenContent5 = document.querySelector("#ten5content");
let tenContent6 = document.querySelector("#ten6content");
let tenContent7 = document.querySelector("#ten7content");
let tenContent8 = document.querySelector("#ten8content");
let tenContent9 = document.querySelector("#ten9content");
let tenContent10 = document.querySelector("#ten10content");
let tenContent11 = document.querySelector("#ten11content");
let tenContent12 = document.querySelector("#ten12content");
let tenContent13 = document.querySelector("#ten13content");
let tenContent14 = document.querySelector("#ten14content");
let tenContent15 = document.querySelector("#ten15content");
let tenContent16 = document.querySelector("#ten16content");
let tenContent17 = document.querySelector("#ten17content");
let tenContent18 = document.querySelector("#ten18content");

let tenAmount1 = document.querySelector("#ten1amount");
let tenAmount2 = document.querySelector("#ten2amount");
let tenAmount3 = document.querySelector("#ten3amount");
let tenAmount4 = document.querySelector("#ten4amount");
let tenAmount5 = document.querySelector("#ten5amount");
let tenAmount6 = document.querySelector("#ten6amount");
let tenAmount7 = document.querySelector("#ten7amount");
let tenAmount8 = document.querySelector("#ten8amount");
let tenAmount9 = document.querySelector("#ten9amount");
let tenAmount10 = document.querySelector("#ten10amount");
let tenAmount11 = document.querySelector("#ten11amount");
let tenAmount12 = document.querySelector("#ten12amount");
let tenAmount13 = document.querySelector("#ten13amount");
let tenAmount14 = document.querySelector("#ten14amount");
let tenAmount15 = document.querySelector("#ten15amount");
let tenAmount16 = document.querySelector("#ten16amount");
let tenAmount17 = document.querySelector("#ten17amount");
let tenAmount18 = document.querySelector("#ten18amount");

let samiranAmount = document.querySelector("#samiran-amount");
let samruddhiAmount = document.querySelector("#samruddhi-amount");
let childAmount = document.querySelector("#child-amount");


let listData = finalData.getData44;                           //Change the Data Here

let dataList = listData.map(each => {
    const percentValue = parseFloat(each[5]?.toString().replace('%', '') || 0);
    const color = percentValue < 0.1 ? '#abff33' : '#ff6161;';
    const amount = each[3];

    // Safely check if amount is empty/blank
    if (!amount || String(amount).trim() === '') {
        return ''; // Skip this item
    }

    return `
                <div class="container">
                    <div class="container-left">
                        <div class="month-container">
                            <div class="month-container-upper">${each[1]}</div>
                        </div>
                    </div>
                    <div class="container-mid">
                        <div class="container-mid-left" style="color: ${color};" >${each[5]}</div>
                    </div>
                    <div class="container-right" style="color: ${color};">₹&nbsp;${formatIndianNumber(amount)}</div>
                </div>
            `;
});

monthlyList.innerHTML = dataList.join("");

let calculationData = finalData.getData3;


tenContent1.innerHTML = calculationData[34][0]
tenContent2.innerHTML = calculationData[35][0]
tenContent3.innerHTML = calculationData[36][0]
tenContent4.innerHTML = calculationData[37][0]
tenContent5.innerHTML = calculationData[38][0]
tenContent6.innerHTML = calculationData[39][0]
tenContent7.innerHTML = calculationData[40][0]
tenContent8.innerHTML = calculationData[41][0]
tenContent9.innerHTML = calculationData[42][0]
tenContent10.innerHTML = calculationData[43][0]
tenContent11.innerHTML = calculationData[44][0]
tenContent12.innerHTML = calculationData[45][0]
tenContent13.innerHTML = calculationData[46][0]
tenContent14.innerHTML = calculationData[47][0]
tenContent15.innerHTML = calculationData[48][0]
tenContent16.innerHTML = calculationData[49][0]
tenContent17.innerHTML = calculationData[50][0]
tenContent18.innerHTML = calculationData[51][0]

tenAmount1.innerHTML = calculationData[34][1]
tenAmount2.innerHTML = calculationData[35][1]
tenAmount3.innerHTML = calculationData[36][1]
tenAmount4.innerHTML = calculationData[37][1]
tenAmount5.innerHTML = calculationData[38][1]
tenAmount6.innerHTML = calculationData[39][1]
tenAmount7.innerHTML = calculationData[40][1]
tenAmount8.innerHTML = calculationData[41][1]
tenAmount9.innerHTML = calculationData[42][1]
tenAmount10.innerHTML = calculationData[43][1]
tenAmount11.innerHTML = calculationData[44][1]
tenAmount12.innerHTML = calculationData[45][1]
tenAmount13.innerHTML = calculationData[46][1]
tenAmount14.innerHTML = calculationData[47][1]
tenAmount15.innerHTML = calculationData[48][1]
tenAmount16.innerHTML = calculationData[49][1]
tenAmount17.innerHTML = calculationData[50][1]
tenAmount18.innerHTML = calculationData[51][1]

samiranAmount.innerHTML = calculationData[56][0];
samruddhiAmount.innerHTML = calculationData[56][1];
childAmount.innerHTML = calculationData[56][2];



//------------List Area-----------------//

const canvas = document.getElementById('myPieChart');
const ctx = canvas.getContext('2d');

const gradient1 = ctx.createLinearGradient(0, 0, 200, 200);
gradient1.addColorStop(0, '#8e24aa');
gradient1.addColorStop(1, '#f06292'); // Berry Pink

const gradient2 = ctx.createLinearGradient(0, 0, 200, 200);
gradient2.addColorStop(0, '#1e88e5');
gradient2.addColorStop(1, '#00bcd4');

const gradient3 = ctx.createLinearGradient(0, 0, 200, 200);
gradient3.addColorStop(0, '#fbc02d'); // Amber
gradient3.addColorStop(1, '#fb8c00'); // Orange



async function fetchChartData() {
    try {

        const result = finalData;

        // Manually inserting values from API response
        const samiranData = result.getData3[56][0];
        const samruddhiData = result.getData3[56][1];
        const childData = result.getData3[56][2];

        const ctx = document.getElementById('myPieChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Samiran', 'Samruddhi', 'Child'],
                datasets: [{
                    data: [samiranData, samruddhiData, childData], // 🎯 No map() used, values assigned directly
                    backgroundColor: [
                        gradient1, gradient2, gradient3
                    ],
                    borderColor: '#e0e0e0',
                    borderWidth: 4,
                    borderRadius: 12,
                    hoverOffset: 18
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: 'black'
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error fetching chart data:', error);
    }
}

fetchChartData();