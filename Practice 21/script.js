function realCountDown() {
   const now = new Date();
   const targetTime = new Date(`January 1, ${now.getFullYear() + 1} 00:00:00`); 
   
   const diff = targetTime - now;
   
   const d = Math.floor(diff / (24 * 60 * 60 * 1000));
   const h = Math.floor(diff / (24 * 60 * 1000)) % 24;
   const m = Math.floor(diff / (60 * 1000)) % 60;
   const s = Math.floor(diff / 1000) % 60;
   
   document.getElementById('day-box').innerHTML = d;
   document.getElementById('hr-box').innerHTML = ("0" + h).slice(-2);
   document.getElementById('min-box').innerHTML = ("0" + m).slice(-2);
   document.getElementById('sec-box').innerHTML = ("0" + s).slice(-2);
 }
 
 setInterval(realCountDown, 	1000);
