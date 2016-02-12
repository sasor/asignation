Asign.main = function(){
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
	@function Encuentra el elemento más pequeño en un array 
	@params [array]
	@return [number] Min value of @params
	*/
var minValue = function(vector){
	return Math.min.apply(null,vector);
}

/**
	@function Construye la matriz objetivo en base a la pseudoMatriz
	@params [No params]
	@return [void] Matriz creada  */
var buildMatriz = function(){
	Asign.vars.matriz = [];
	do{
		Asign.vars.matriz.push(Asign.vars.pseudoMatriz.splice(0,Asign.vars.machines));
	} while(Asign.vars.pseudoMatriz.length > 0);
}
