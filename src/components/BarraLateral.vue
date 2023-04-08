<template>
<body>
	<header>
		<h1>Reportes bienestar UCC</h1>
	</header>
	<nav>
		<ul>
			<li><a href="#hello">Inicio</a></li>
			<li><a href="#formulario">Formulario</a></li>
			<li><a href="#eventos">Eventos</a></li>
			<li><a href="">Consultar Eventos</a></li>
		</ul>
	</nav>
	<main>
		<router-view></router-view>
	</main>
</body>

</template>

<script>

export default{
    name:"BarraLateral",
	components:{
		

	}
    
}

</script>

<style scoped>
body {
	margin: 0;
	padding: 0;
}
header {
	background-color: #333;
	color: #fff;
	text-align: center;
	padding: 10px;
}
nav {
	background-color: #ccc;
	height: 100%;
	position: fixed;
	width: 200px;
}
nav ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
nav li {
	border-bottom: 1px solid #888;
}
nav li a {
	color: #333;
	display: block;
	padding: 10px;
	text-decoration: none;
}
nav li a:hover {
	background-color: #eee;
}
main {
	margin-left: 200px;
	padding: 10px;
}


</style>