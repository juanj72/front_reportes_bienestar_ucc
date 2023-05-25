<template>
	


	<div class="sidebar">
		
		<div class="logo">
			<img src="../assets/ucc.png" alt="">
			
		</div>
		<hr>
	
		<router-link :to="{name:'inicio'}"><font-awesome-icon :icon="['fas', 'house']" /> inicio</router-link>
		

		<!-- <a href="#formulario"> <font-awesome-icon icon="user" />Consulta evento</a> -->
		<a href="#eventos"><font-awesome-icon :icon="['fas', 'calendar-check']" /> Eventos</a>
		
		<a href="#consulta_est"><font-awesome-icon :icon="['fas', 'file-export']" /> Certificado horas</a>
		<a href="#estudiantes_programa"><font-awesome-icon :icon="['fas', 'chart-line']" /> Estudiantes por programa</a>
		<a href="#actividades"><font-awesome-icon :icon="['fas', 'briefcase']" /> Actividades</a>
		<a href="#horas_bienestar"><font-awesome-icon :icon="['fas', 'hourglass-half']" /> Horas</a>
		<a href="#estudiantes"><font-awesome-icon :icon="['fas', 'users']" /> Estudiantes</a>
		<a href="#Asistencia"><font-awesome-icon :icon="['fas', 'clipboard-question']" /> Asistencia</a>
	
	</div>

	<div class="main">
		<img src="../assets/logotipo.svg" alt="">

		<RouterView></RouterView>
	</div>

</template>

<script>
import axios from 'axios';

export default{
    name:"BarraLateral",
	components:{


		

	},
	mounted(){
		axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('TOKEN')

		const token = localStorage.getItem('TOKEN')
		console.log(token)
		if (!token || token === null) {
      // Redirigir al login si el token no existe o es inválido
      this.$router.push('/login');
    } else {
      // El token es válido, puedes realizar otras acciones necesarias
    }
	},
	methods:{
		logout(){
			localStorage.removeItem('TOKEN')
		}
	}

    
}

</script>

<style scoped>
.sidebar{
	text-align: left;
	
	overflow-y: scroll ;


}

.logo img{
	margin-left: 27px;
	width: 150px;
	margin-bottom: 5px;
	margin-top: 5px;
}
hr{

	border-top: 9px solid rgb(255, 255, 255);
	width: 80%;
	margin-left: 20px;
	

}
.logo{
	margin-left: 20px;
	padding-right: 5px;
	width: 200px;
	background-color: rgb(255, 255, 255);
	border-radius: 40px;
	border-bottom: #80BA27 solid 2px;
	margin-bottom: 10px;
	border-right: #132740 solid 4px;
	

}


/* Estilos para dispositivos de pantalla grande */
@media only screen and (min-width: 768px) {
	.sidebar {
		position: fixed;
		
		/*left: 0;*/
		width: 250px;
		height: 100%;
		background-color: #00ACC9;
		padding-top: 3%;
		
		padding-bottom: 70px;
		
		
	}

	.sidebar a {
		display: block;
		color: #fff;
		padding: 16px;
		text-decoration: none;
		margin-left: 20px;
		transition: color 0.7s ease;
		
		
	
	}

	.sidebar a:hover {
		/* background-color: white; */
		border-bottom: #132740 solid 2px;
		/* border-right: #132740 solid 9px; */
		/* border-radius: 100px; */
		color: #132740;
		margin-right: 20px;
		
	}

	.main {
		
		margin-left: 250px;
		padding: 0 20px;
	}
	.main img{
		margin-top: 1%;
	}
}

/* Estilos para dispositivos de pantalla pequeña */
@media only screen and (max-width: 767px) {
	.sidebar {
		position: fixed;
		top: 0;
		left: -200px;
		width: 200px;
		height: 100%;
		background-color: #333;
		padding-top: 20px;
		transition: all 0.3s;
	}

	.sidebar a {
		display: block;
		color: #fff;
		padding: 16px;
		text-decoration: none;
	}

	.sidebar a:hover {
		background-color: #666;
	}

	.main {
		padding: 0 20px;
	}


}



</style>