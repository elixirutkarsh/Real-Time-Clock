function updateTime() {
    const clock = document.getElementById('clock');
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;
    clock.textContent = time;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display the time immediately
  updateTime();
  