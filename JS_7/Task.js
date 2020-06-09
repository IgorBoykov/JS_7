function showText() {
	var elements = document.querySelectorAll('ul > li');

	for (var i = 0; i < elements.length; i++) {
		var currentElement = elements[i];
		currentElement.innerHTML = 'Boikov Igor 28/04/1992' + i;
	}

	var div = document.getElementById('total');
	div.innerHTML = 'Total - ' + elements.length;

}