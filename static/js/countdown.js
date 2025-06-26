// Set the countdown date (September 20, 2025, 09:00 UTC)
const countdownDate = new Date('September 20, 2025 09:00:00 UTC').getTime();

// Update the countdown every second
const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById('days').innerHTML = String(days).padStart(2, '0');
    document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');
    
    // If the countdown is finished
    if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "COMPETITION STARTED";
    }
}, 1000);