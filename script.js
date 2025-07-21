// script.js

document.getElementById('generateForm').addEventListener('submit', async function (e) { e.preventDefault();

const imageInput = document.getElementById('imageInput'); const promptInput = document.getElementById('promptInput'); const previewSection = document.getElementById('previewSection'); const outputVideo = document.getElementById('outputVideo');

if (!imageInput.files[0]) return alert('Please upload an image.'); if (!promptInput.value.trim()) return alert('Please enter a prompt.');

// Display loading state (you can improve this with actual UI changes) outputVideo.innerHTML = ''; previewSection.classList.remove('hidden'); outputVideo.poster = 'loading.gif'; // Optional loading poster if you have one

// Simulate API processing setTimeout(() => { // For now, just show a sample video (replace with real API output later) outputVideo.src = 'sample-output.mp4'; outputVideo.load(); outputVideo.play(); }, 3000); });

