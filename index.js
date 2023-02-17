setInterval( ()=> {

   d = new Date();

   hhour = d.getHours();
   mminute = d.getMinutes();
   ssecond = d.getSeconds();

   hrotate = (30*hhour + mminute/2);
   mrotate = (6*mminute);
   srotate = (6*ssecond);

   hour.style.transform = `rotate(${hrotate}deg)`;
   mnt.style.transform = `rotate(${mrotate}deg)`;
   scnd.style.transform = `rotate(${srotate}deg)`;

},1000);