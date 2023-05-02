<template>

<div>
    {{ dato_prueba }}
</div>

</template>

<script>
export default{
    name : 'CardPrueba',
    props:{
        dato_prueba:{
            type:String,
            required:true,
        }
    }

}
</script>