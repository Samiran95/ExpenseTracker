// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("✅ Service Worker registered"))
    .catch(err => console.error("❌ SW registration failed:", err));
}

// Fetch API data and store in localStorage
const API_URL = 'https://jsonplaceholder.typicode.com/posts/1'; // sample API

async function fetchData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    localStorage.setItem('apiData', JSON.stringify(data));
    document.getElementById('data').innerText = `Title: ${data.title}`;
  } catch (error) {
    const savedData = JSON.parse(localStorage.getItem('apiData'));
    if (savedData) {
      document.getElementById('data').innerText = `Cached: ${savedData.title}`;
    } else {
      document.getElementById('data').innerText = "⚠️ Offline & No Cached Data";
    }
  }
}

window.addEventListener("DOMContentLoaded", fetchData);