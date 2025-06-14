// ✅ Register the Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("✅ Service Worker registered"))
    .catch(err => console.error("❌ Service Worker registration failed:", err));
}

// ✅ Your API URL
const API_URL = 'https://jsonplaceholder.typicode.com/posts/1'; // replace with your API

// ✅ Fetch and Display Data
async function fetchDataAndCache() {
  // ⛑️ SAFELY get the DOM element *after* DOM is loaded
  const dataElement = document.getElementById('data');

  if (!dataElement) {
    console.warn("⚠️ Element with id='data' not found in the DOM.");
    return;
  }

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    // ✅ Display live data
    dataElement.innerText = `Live: ${data.title}`;

    // ✅ Save to sessionStorage
    sessionStorage.setItem('apiData', JSON.stringify(data));

  } catch (err) {
    console.warn("⚠️ Fetch failed:", err.message);

    // ✅ Load from sessionStorage fallback
    const saved = sessionStorage.getItem('apiData');
    if (saved) {
      try {
        const savedData = JSON.parse(saved);
        dataElement.innerText = `Cached: ${savedData.title}`;
      } catch (parseErr) {
        console.error("❌ Failed to parse session data:", parseErr);
        dataElement.innerText = "⚠️ Corrupted session data";
      }
    } else {
      dataElement.innerText = "⚠️ Offline & no cached data available";
    }
  }
}

// ✅ Run only after DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchDataAndCache);
