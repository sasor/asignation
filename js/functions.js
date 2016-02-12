/* Gets #tasks & #machines 
	 and call a function that draw matriz 
	 [args] -> event */
Asign.methods.catch_data = function(ev){
	ev.preventDefault();
	Asign.vars.tasks = Number($('input[name=tasks]').val());
	Asign.vars.machines = Number($('input[name=machines]').val());
	Asign.methods.draw_matriz(Asign.vars.tasks, Asign.vars.machines);
}

/* Function that draw matriz
	 [args] -> tasks & machines */
Asign.methods.draw_matriz = function(t, m){
	for(var i=0; i<t; i++){
		for(var j=0; j<m; j++){
			$('#js-form-matriz').append('<input type="text" row="'+i+'" column="'+j+'"/>');
		}	
	}		
	$('#js-form-matriz').append('<input type="submit" value="solve"/>');
}

/* Gets data's matriz and call main function */
Asign.methods.catch_data_data = function(ev){
	ev.preventDefault();
	Asign.vars.pseudoMatriz = [];
	$('#js-form-matriz input[type=text]').each(Asign.methods.create_pseudo_matriz);

	// Asign.methods.create_definitive_matriz(Asign.vars.pseudoMatriz);
	Asign.main();
}

/* Function add values in array */
Asign.methods.create_pseudo_matriz = function(){
	Asign.vars.pseudoMatriz.push(Number($(this).val()));
}

/*Asign.methods.create_definitive_matriz = function(pseudo){
	Asign.vars.matrix = _.chunk(pseudo, Asign.vars.machines);
}*/
