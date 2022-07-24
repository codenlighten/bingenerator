const onSubmit = () => {
	let data = document.getElementById("data");
	if (!data.value) {
		alert("data required");
		return;
	}
	let d = data.value;
	d = parseInt(d);
	let bin = d.toString(2);
	console.log(bin);
	document.getElementById("result").innerHTML = bin;
};
