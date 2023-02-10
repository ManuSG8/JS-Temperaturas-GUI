const $d = document,
	$tempCelsius = $d.querySelector("#temp1"),
	$tempFarenheit = $d.querySelector("#temp2"),
	$resultadoCelsius = $d.querySelector("#out1"),
	$resultadoFarenheit = $d.querySelector("#out2")

const celsiusToFahrenheit = (degrees) => degrees * (9 / 5) + 32

const fahrenheitToCelsius = (degrees) => (degrees - 32) / (9 / 5)

$tempCelsius.addEventListener("input", function () {
	celsiusToFahrenheit(this.value) >= $tempFarenheit.max ? ($tempCelsius.value = ($tempFarenheit.max - 32) / (9 / 5)) : ($tempFarenheit.value = celsiusToFahrenheit(this.value))

	$resultadoCelsius.innerHTML = this.value
	$resultadoFarenheit.innerHTML = celsiusToFahrenheit(this.value).toFixed(2)
})

$tempFarenheit.addEventListener("input", function () {
	fahrenheitToCelsius(this.value) <= $tempCelsius.min
		? ($tempFarenheit.value = 32) // Aqui es cuando los grados Farenheit son equivalentes a 0 grados Celsius
		: ($tempCelsius.value = fahrenheitToCelsius(this.value))

	$resultadoCelsius.innerHTML = fahrenheitToCelsius(this.value).toFixed(2)
	$resultadoFarenheit.innerHTML = this.value
})
