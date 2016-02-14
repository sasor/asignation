Asign.main = function(){
	execBalanceo();
	setMatriz();
}

var execBalanceo = function(){
		if(!isBalanced()){ 
			toBalance(Asign.vars.tasks, Asign.vars.machines);
		}	
		buildMatriz();
}

var setMatriz = function(){
	var counter = 0;
	while(counter<2){
		reducirElements(Asign.vars.matriz);
		changePlaces(Asign.vars.matriz);
		counter++;
	}
}

/**
	@function Verifica si matriz to be Balanceada
	@params [No params]
	@return [boolean]
	*/
var isBalanced = function(){
	return Asign.vars.tasks == Asign.vars.machines;
}

/**
	@function Balancea un matriz
	@params [row, column]
	@return [void] matriz balanceada
	*/
var toBalance = function(r, c){
	if(r<c){
		do{
			Asign.vars.pseudoMatriz = Asign.vars.pseudoMatriz.concat(new Array(c).fill(0)); 	
			r++;
		} while(r<c);
	}
	else{
		var aux = new Array(0);
		do{
			/* Estudiarlo muy bien
			aux.push(Asign.vars.pseudoMatriz.splice(0,c).concat(new Array(r-c).fill(0)));	*/
			var a = Asign.vars.pseudoMatriz.splice(0,c);
			a = a.concat(new Array(r-c).fill(0));
			aux = aux.concat(a);
		} while(Asign.vars.pseudoMatriz.length > 0);

		Asign.vars.pseudoMatriz = aux;
	}
}

/**
	@function Construye la matriz objetivo en base a la pseudoMatriz
	@params [No params]
	@return [void] Matriz creada  */
var buildMatriz = function(){
	Asign.vars.matriz = [];
	do{
		if(Asign.vars.tasks < Asign.vars.machines){
			Asign.vars.matriz.push(Asign.vars.pseudoMatriz.splice(0,Asign.vars.machines));
		}
		else{
			Asign.vars.matriz.push(Asign.vars.pseudoMatriz.splice(0,Asign.vars.tasks));
		}
	} while(Asign.vars.pseudoMatriz.length > 0);
}

/** 
	@function Encuentra el elemento más pequeño en un array 
	@params [array]
	@return [number] Min value of @params
	*/
var minValue = function(vector){
	return Math.min.apply(null,vector);
}

/**
	@function Resta el menor valor d/c elem segun paso 2 del algoritmo de 
	asignacion.
	@params [matriz]
	@return [void]
	*/
var reducirElements = function(collection){
	collection.forEach(function(v, i, c){
		var min = minValue(v);		
		var aux = v.map(function(x){ return x - min;	});
		c[i] = aux;
	});	
}

/**
	@function Modifica la matriz en base a los primeros elems d/c elemento en la
	matriz.
	@params [matriz]
	@return [void] 
	*/
var changePlaces = function(arr){
	var aux_matriz = [];
	var piece = [];	
	while(arr[0].length > 0){
		arr.forEach(function(v, i, c){
			piece = piece.concat(v.splice(0,1));
		});
		aux_matriz.push(piece);
		piece = [];
	}
	Asign.vars.matriz = aux_matriz;
}
