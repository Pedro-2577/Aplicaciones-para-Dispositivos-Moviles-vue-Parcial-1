Vue.component('mi-componente', {
	data:function(){
		return {

			nombre: "",
			cat: "",
			descripcion: "",

			errores:[],

			ls:[]
		}
	},

	computed : {
    hayErrores: function(){
    	return this.errores.length;
    }
	},

template:` <div>

	<div class="form">
			<form v-on:submit.prevent>
			
			<label>Nombre del Armamento:</label>
				<input type="text" v-model="nombre" placeholder="Armamento a solisitar" name:nombre/>

			<label>Categoria:</label>
				<select v-model="cat" name="cat">
					<option>Arma de fuego</option>
					<option>Armadura</option>
		  		<option>Equipamento</option>
		  		<option>Arma mele</option>
		  		<option>Explosivo</option>
		  		<option>Vehiculos de guerra</option>
		  		<option>Vehiculos de transporte</option>
				</select>

			<label>Descripcion</label>
			<textarea v-model="descripcion" name="descripcion"></textarea>

			<button type="button" @click="guardar()" value="Guardar">Enviar solisitud </button>
			</form>
			
			<div><p v-for="x in errores">{{x}}</p></div>

	</div>
			


	</div>`,

methods:{
	guardar:function(){

      this.errores=[]
			codigo: ""


             
	  	if(this.nombre == "") {
	   	this.errores.push('El proyecto debe ser nombrado.');
      }
      if(!this.nombre == "" && this.nombre.length < 3) {
        this.errores.push('El nombre debe tener mas de 3 caracteres.');
      }

      if(this.cat == ""){
      	this.errores.push('El proyecto debe ser categorisado.');
      }

	  	if(this.descripcion == "") {
	   	this.errores.push('El proyecto debe ser descripto.');
      }
      if(!this.descripcion == "" && this.descripcion.length < 15) {
        this.errores.push('La descripcion del proyecto debe ser mas extensa.');
      }
     	
     if(this.errores.length == 0){

     		if (this.cat == "Arma de fuego"){ codigo = "imgs/bl/weapon.jpg"};
     		if (this.cat == "Armadura"){ codigo = "imgs/bl/armor.jpg"};
     		if (this.cat == "Arma mele"){ codigo = "imgs/bl/mele.jpg"};
     		if (this.cat == "Explosivo" || this.cat == "Equipamento"){ codigo = "imgs/bl/ex.jpg"};
     		if (this.cat == "Vehiculos de guerra" || this.cat == "Vehiculos de transporte"){ codigo = "imgs/bl/auto.jpg"};
     	     	 
     nuevoObj = {
     			nombre: this.nombre,
					cat: this.cat,
					descripcion: this.descripcion,
					src: codigo
					}
			
      if(!localStorage.datos){
					this.ls=[]
				}else{
					this.ls=JSON.parse(localStorage.getItem("datos"))
				}

				this.ls.push(nuevoObj)
				localStorage.setItem("datos",JSON.stringify(this.ls))
   		}
}

},

});
