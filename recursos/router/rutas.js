const err = { template: `
        <div>
          <h1>Algo a salido mal!</h1>
        </div>
  `, name:'err' 
}

const home = {template: `<inicio></inicio>`, name:"home"
}
const ingresar = {template: `<mi-componente> </mi-componente>`, name:"ingresar"
}
const mostrar = {template: `<ver></ver>`, name:"mostrar"
}

const routes = [
  { path: '/', component: home },
  { path: '/ingresar', component: ingresar },
  { path: '/mostrar', component: mostrar },
  { path: '*', component: err }

]

const router = new VueRouter({
  routes
})

const app = new Vue({
  el:".app",
    router
})