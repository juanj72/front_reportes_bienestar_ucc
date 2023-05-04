<template>
	
<body>

	<div class="sidebar">
		<a href="#"><font-awesome-icon :icon="['fas', 'house']" />  Inicio</a>
		<!-- <a href="#formulario"> <font-awesome-icon icon="user" />Consulta evento</a> -->
		<a href="#eventos"><font-awesome-icon :icon="['fas', 'calendar-check']" /> Eventos</a>
		
		<a href="#consulta_est"><font-awesome-icon :icon="['fas', 'file-export']" /> Certificado horas</a>
		<a href="#estudiantes_programa"><font-awesome-icon :icon="['fas', 'chart-line']" /> Estudiantes por programa</a>
		<a href="#perfiles"><font-awesome-icon :icon="['fas', 'briefcase']" /> Actividades</a>
		<a href="#horas_bienestar"><font-awesome-icon :icon="['fas', 'hourglass-half']" /> Horas</a>
		<a href="#tablabonita"><font-awesome-icon :icon="['fas', 'users']" /> Estudiantes</a>
		<a href="#Asistencia"><font-awesome-icon :icon="['fas', 'clipboard-question']" /> Asistencia</a>
	</div>

	<div class="main">
		<img src="../assets/logotipo.svg" alt="">

		<RouterView></RouterView>
	</div>
</body>

</template>

<script>


export default{
    name:"BarraLateral",
	components:{


		

	},

    
}

</script>

<style scoped>

/* Estilos para dispositivos de pantalla grande */
@media only screen and (min-width: 768px) {
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 200px;
		height: 100%;
		background-color: #00ACC9;
		padding-top: 20px;
		
	}

	.sidebar a {
		display: block;
		color: #fff;
		padding: 16px;
		text-decoration: none;
	}

	.sidebar a:hover {
		background-color: #80BA27;
		color: #333;
	}

	.main {
		margin-left: 200px;
		padding: 0 20px;
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

	.show-sidebar {
		left: 0;
	}
}



</style>