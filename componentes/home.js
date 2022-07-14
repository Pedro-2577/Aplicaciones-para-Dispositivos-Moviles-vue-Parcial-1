Vue.component("inicio", {
	data:function(){
			return {
				imgs:[
					{
						nombre:"balista",
						alt:"Balista, Cañon de riel modificado",
						src: "imgs/balista.jpg",
						txt: "La Balista es un arma muy potente aunque por ello, también, de una cadencia bastante lenta. Sobre todo la querrás a tu lado con los enemigos carne de cañón, cuando haya muchos de ellos juntos, ya que con su modificación Hoja destructora puedes cortar por la mitad a varios al mismo tiempo."},
					{
						nombre:"plasma_rifle",
						alt:"Rifle de plasma, potente arma disparadora de energia pura",
						src: "imgs/plasma_rifle.jpg",
						txt: "Este fusil es ideal frente a los escudos de energía de muchos de nuestros enemigos, como el de los Cazadores infernales. Tiene una cadencia bastante rápida y es mejor en cortas y medias distancias. Para los combates más frenéticos viene de perlas."},
					{
						nombre:"chaingun",
						alt:"Minigun, la mejor opcion para opuarse de los demonios mas duros",
						src: "imgs/chaingun.jpg",
						txt: "La Ametralladora Gatling es sin duda el arma más rápida del juego y una tragadera de balas impresionante. Cuando hace pop ya no hay stop. Funciona de maravilla con los más grandotes que intenten embestirte o vayan a la carga. O si lo prefieres puedes ponerte en plan Rambo con ella y disparar a todo lo que se mueva."},
					{
						nombre:"rail_gun",
						alt:"Cañon de riel, la version original de este pontente cañon electromagnetico",
						src: "imgs/rail_gun.jpg",
						txt: "El Cañón de riel o Rail Gun en ingles, es un arma de alta tecnología, que usa la inducción electromagnética para acelerar proyectiles, en vez de una acción mecánica. "},
					{
						nombre:"chainsaw",
						alt:"Chainsaw, para cuando confundis un demonio con un arbol",
						src: "imgs/chainsaw.jpg",
						txt: "La motosierra es nuestra principal aliada en cortas distancias. Es más una herramienta que un arma, ya que gracias a ella podemos desmembrar a un montón de enemigos y recuperar así vida y munición de los mismos (especialmente esto último). Así que es importante tenerla en cuenta cuando estemos bajos de recursos, ya que puede ser vital para salvarnos la vida. Se puede recargar con depósitos de combustible que hay por los escenarios y ojo, que no funciona con todos los demonios (a los más grandes no es posible matarlos con ella)."},
					{
						nombre:"ssg",
						alt:"Super escopeta, el arma",
						src: "imgs/ssg.jpg",
						txt: "La superescopeta es como la escopeta de combate, pero super. Sí, tal cual. Puede reventar muchos demonios a quemarropa y aún por encima posee un gancho rápido que acorta las distancias con ellos enseguida, para cuando quieras mostrarles cariño."},
					{
						nombre:"combatsh",
						alt:"Escopeta de combate, el arma mas clasica que podemos ofrecer",
						src: "imgs/combatsh.jpg",
						txt: "a escopeta de combate es el arma básica del DOOM Slayer en este videojuego, y una de las que más estaremos usando, especialmente al principio. Es un arma ideal para los demonios carne de cañón, es decir, lo más estándar del juego. Su potencia interrumpe fácilmente las acciones de estos demonios dejándolos a merced de las ejecuciones y, además, a los más pequeños directamente puede deshacerlos a quemarropa. Por otro lado, la modificación de las bombas nos puede venir fenomenal para hacer explotar a los cacodemonios voladores"},
					{
						nombre:"unmaykr",
						alt:"unmaykr, arma desconocida echa por los maykr",
						src: "imgs/unmaykr.jpg",
						txt: "La Desmaykr es otra arma especial y realmente potente, que se desbloquea solo como premio por recoger las 6 Llaves de Empíreo al superar los retos de los Portales de Slayer. Cuando tengas las llaves ve a la máquina de los Maykr que está en tu nave y abre las cerraduras para recogerla. Este arma comparte munición con la BFG-9000."}

			]
		}
	},

	template:`

        <div>
          <h2>Armamento disponible</h2>
          <div class="galeria">
          	<div v-for="(x,index) in imgs">	
          		<img v-bind:class="index % 2 == 0 ? 'left' : 'right' " v-bind:src="x.src" v-bind:alt="x.alt"/>
          		<h3>{{x.nombre.replace("_", " ") | capitalize({ onlyFirstLetter: true })}}</h3>
          		<p>{{x.txt}}</p>
          	</div>
          </div>
        </div>
  
		`
})

	