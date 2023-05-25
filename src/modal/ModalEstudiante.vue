<template>
    <div class="modal" v-show="isOpen">
      <div class="modal-overlay" @click="close"></div>
      <div class="modal-content" v-if="id" >
        <h2>Detalle</h2>
        <h5>Nombre: {{ id.nombre }}</h5>
      
        <h5> <b>Telefono:</b> {{ id.telefono }}</h5>
        <h5> <b>Codigo:</b> {{ id.id }}</h5>
        <h5>carrera: {{ id.programa }}</h5>
      
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name:'ModalEstudiante',
    props: {
      isOpen: {
        type: Boolean,
        required:true
    
      
      },
      id:[]
    },
    methods: {
      close() {
        this.$emit('close');
        console.log(this.id)
      },

    },
    mounted(){
      
    }

  };
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
  }
  
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
  }
  </style>