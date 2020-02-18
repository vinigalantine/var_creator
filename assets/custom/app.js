$(document).ready(function() {

});

function gerarVars(){
	let value = $('#value').val();

	snakeCase(value);
	camelCase(value);

	$('#resposta_row').show();
}

function snakeCase(val){
	$('#snake_case').text(val.split(' ').join('_').toLowerCase(''));
}

function camelCase(val){
	let tmp = val.toLowerCase();
	let temp;

	tmp = tmp.split(' ');

	if(tmp.length > 1){
		temp = tmp[0];
		$.each(tmp[1].split(''), function(idx, val) {
			if (idx == 0)
				val = val.toUpperCase();

			temp += val;
		});
	} else {
		temp = tmp;
	}

	$('#camelCase').text(temp)
}