Vue.component("ver", {
	data:function(){
			return {
				local:[],
				sin_datos: ""				
			}
	},
	template:`
			<div>
				<h2>Solisitudes realizadas</h2>
				<div v-if="local.length > 0 ">
					<ul class= "galeria"> 
						<li v-for="(x,index) in local" v-bind:key="index">
							<img v-bind:class="index % 2 == 0 ? 'left' : 'right' " v-bind:src="x.src" v-bind:alt="x.cat"/>
          					<h3>{{x.nombre}}</h3>
          					<p>{{x.descripcion}}</p>
						</li>
					</ul>
				</div>
				<h2 v-else>{{sin_datos}}</h2>
				</div>
		`,

	mounted:function(){
		this.ver_local();
	},
	
	methods:{
		ver_local:function(){
			
		if(localStorage.datos){
			this.local=JSON.parse(localStorage.getItem("datos"))	
		}else{	
			this.sin_datos = "No hay tramites pendientes"
		}
	}



	}



})