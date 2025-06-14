let api = "https://script.google.com/macros/s/AKfycbxnW0rn45fYT3gtgRySiGnx-WxSH-qrnBTre_R0SnNY0gDE4_QSRsq8m9ZKpNbD-lazwA/exec";



//Session Storage Data.
// ✅ Step 1: Fetch data from API
fetch(api)
    .then(response => response.json())
    .then(data => {
        // ✅ Step 2: Store the data in localStorage
        sessionStorage.setItem('apiData', JSON.stringify(data));

    });


let sessionData = sessionStorage.getItem("apiData")
let finalData = JSON.parse(sessionData)

//Session Storage