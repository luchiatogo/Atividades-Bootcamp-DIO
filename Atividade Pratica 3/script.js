function subNumPar(array) {
	if (!array.length) return console.log(-1);

	const nZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && nZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!nZero(array[i])) {
			console.log('Ops, você já vale 0!');
		}
	}
	console.log(array);
}

subNumPar([2, 0, 3, 5]);