/**
 * function L.hatchClass()
 *
 * creates hatched fill classes for svg polygons to be used with Leaflet
 *
 * MIT License
 * Copyright (c) 2022 Gede Mátyás
 */
 
L.hatchClass = function(colors=['black', 'white'], strokeWidth=6, angle=45) {
	// create an svg element for hatch definitions if there isn't one yet
	let svgElem = document.querySelector('#svgforhatches');
	if (!svgElem) {
		svgElem = document.createElementNS('http://www.w3.org/2000/svg','svg');
		svgElem.id = 'svgforhatches';
		svgElem.setAttribute('width', 0); svgElem.setAttribute('height', 0);
		svgElem.appendChild(document.createElementNS('http://www.w3.org/2000/svg','defs'));
		document.body.appendChild(svgElem);
	}
	// create a free class name
	let n = svgElem.querySelectorAll('pattern').length;
	let hcName = 'leafletSvgHatchPattern'+(n);
	// create pattern node
	let defElem = svgElem.querySelector('defs');
	let pElem = document.createElementNS('http://www.w3.org/2000/svg','pattern');
	pElem.id = hcName;
	let size = strokeWidth*colors.length;
	pElem.setAttribute('x',"0"); pElem.setAttribute('y', "0"); 
	pElem.setAttribute('width', size); pElem.setAttribute('height', size); 
	pElem.setAttribute('patternUnits', "userSpaceOnUse"); 
	pElem.setAttribute('patternContentUnits', "userSpaceOnUse"); 
	pElem.setAttribute('patternTransform', "rotate("+angle+")");
	for (let i=0; i<colors.length; i++) {
		pElem.innerHTML+='<path stroke="'+colors[i]+'" stroke-width="'+strokeWidth+'" d="M0 '+(i+.5)*strokeWidth+'h'+size+'" />';
	}
	defElem.appendChild(pElem);
	// create style element and add class style
	let sE = document.createElement('style');
	sE.innerHTML = '.' + hcName + ' { fill: url("#' + hcName + '"); }';
	document.body.appendChild(sE);
	// return class name
	return hcName;
}
