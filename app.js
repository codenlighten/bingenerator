let data = document.getElementById("data");
data.addEventListener("keyup", () => {
	let d = data.value;
	if (!d) {
		return;
	}
	d = parseInt(d);
	let bin = d.toString(2);
	console.log(bin);
	document.getElementById("result").innerHTML = bin;
	data.innerHTML = "";
});
