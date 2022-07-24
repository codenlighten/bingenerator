let data = document.getElementById("data");
data.addEventListener("keyup", () => {
	let d = data.value;
	if (!d) {
		return;
	}
	d = parseInt(d);
	let bin = d.toString(2);
	let hex = d.toString(16);
	// console.log(bin);
	document.getElementById(
		"result"
	).innerHTML = `Hex:<br>${hex}<br>Binary:<br> ${bin}`;
	data.innerHTML = "";
});
