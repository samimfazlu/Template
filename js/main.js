/**********************
 * Modernizr para CSS *
 **********************/

//mirar la hoja de estilos

if (Modernizr.boxshadow){
	console.debug("boxshadow soportado");
}
else{
	console.error("boxshadow NO soportado");
} 

if (Modernizr.borderradius){
	console.debug("borderradius soportado");
}
else{
	console.error("borderradius NO soportado");
} 

/**********************
*  Modernizr para JS  *
**********************/

Modernizr.load({
	test: Modernizr.geolocation,
	yep : 'js/geo-extras.js',
	nope: 'js/geo-polyfill.js',
	both: 'js/migeolocalizacion.js',
	complete: function(){
		inicializar_geolocalizacion();
	}
}); 