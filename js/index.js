// Add opacity class to site header
	$( document ).on('scroll', function(){

		


		if ( $( document ).scrollTop() > 0 ){

			console.log('we are scrolling');
			$( '.ft-navbar' ).addClass( 'ft-navbar-down ' );			

		} else {

			$( '.ft-navbar' ).removeClass( 'ft-navbar-down' );	

			console.log('top');
		}

					

	});




$(document).ready(function () {
    init();
    calcularSaving();
});

function init() {

 
    $("#slcCalculatorFromCountry, #slcCalculatorToCountry").change(function () {
        var elemento = $(this).attr("id");
        var elementoDos;
        if (elemento == "slcCalculatorFromCountry") {
            elementoDos = "slcCalculatorToCountry";
        } else {
            elementoDos = "slcCalculatorFromCountry";
        }

        if ($(this).val() != 1) {
            $("#" + elementoDos).val(1);
        }
        calcularSaving();
    });

    $('#txtCalculatorAmount').on('input', function (e) {
        calcularSaving();
    });
}

function calcularSaving() {//TODO hacer que si selecciona latino -> USA
    var monto = $("#txtCalculatorAmount").val();

    console.log(monto)
    var desde = $("#slcCalculatorFromCountry").val();
    var hasta = $("#slcCalculatorToCountry").val();
    var resultado = $("#txtCalculatorResult");

    if ($.isNumeric(monto) && desde != hasta) {
        if (desde == 1) {
            if (monto < 500) {
                saving = 15.46;
            } else {
                saving = 15.46 + (monto * 0.0077);
            }
        }
        else if (hasta == 1) {
            if (desde == 4) {
                if (monto <= 1098) {
                    if (monto < 500) {//otros paises
                        saving = 35;
                    } else {
                        saving = 35 + (monto * 0.0372);
                    }//otros paises
                } else {
                    saving = monto * 0.11;
                }
            } else {
                if (monto < 500) {//otros paises
                    saving = 35;
                } else {
                    saving = 35 + (monto * 0.0372);
                }//otros paises
            }

        }
        $(resultado).html(saving.toFixed(2));
    }
    else {
        $(resultado).val("");
    }
}

