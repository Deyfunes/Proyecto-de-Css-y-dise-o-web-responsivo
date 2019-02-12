//js document


var indice=0;
		var funcionComenzar = null;

		function Comenzar(){
			var listaImagen = ['./fotografia/argentina.jpg','./fotografia/Dubai.jpg','./fotografia/eiffel.jpg','./fotografia/ocean.jpg', './fotografia/pavones.jpg'];

			if(indice <= 4){
				document.getElementById('fotografia').src = listaImagen[indice];

			}else{
				indice=0;
				document.getElementById('fotografia').src = listaImagen[indice];
			}

			indice+= 1;

			funcionComenzar = setTimeout(function(){Comenzar(indice)
			},2000);

		}

		function Terminar(){
			clearTimeout(funcionComenzar);
		}

		 