// ✅ Register the Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("✅ Service Worker registered"))
    .catch(err => console.error("❌ Service Worker registration failed:", err));
}

// ✅ API URL (replace with your actual API)
const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

// ✅ Fetch and display data from API only (no storage)
async function fetchData() {
  const dataElement = document.getElementById('data');

  if (!dataElement) {
    console.warn("⚠️ Element with id='data' not found.");
    return;
  }

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("API request failed");

    const data = await response.json();
    dataElement.innerText = `Live: ${data.title}`;

  } catch (err) {
    console.error("❌ Error fetching data:", err.message);
    dataElement.innerText = "⚠️ Unable to load data. Please check your connection.";
  }
}

// ✅ Run after DOM is ready
document.addEventListener("DOMContentLoaded", fetchData);
