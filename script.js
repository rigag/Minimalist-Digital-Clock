function clock() {
	const now = new Date();
	var saat = now.getHours();
	var dakika = now.getMinutes();
	var saniye = now.getSeconds();
	if (saat < 10) {saat = "0" + saat;}
	if (dakika < 10) {dakika = "0" + dakika;}
	if (saniye < 10) {saniye = "0" + saniye;}
	document.getElementById('hour').innerHTML = saat + ':';
	document.getElementById('minute').innerHTML = dakika + ':';
	document.getElementById('second').innerHTML = saniye;} 
    setInterval(clock, 1000);