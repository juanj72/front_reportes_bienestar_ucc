<template>
    <div class="modal" v-show="isOpen">
      <div class="modal-overlay" @click="close"></div>
      <div class="modal-content" v-if="id" >
        <h2>Detalle de actividad</h2>
        <h5>Encargado: {{ id.admin_nombre }} {{ id.apellido }}</h5>
        <h5>Cargo: {{ id.cargo }} </h5>
        <h5> <b>Lugar: </b> {{ id.lugar }}</h5>
        <h5> <b>Dia:</b> {{ id.dia }}</h5>
        <h5> <b>Horario:</b> {{ id.horario }}</h5>
        <h4>Descripción: {{ id.descripcion }}</h4>
      
      
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name:'ModalActividad',
    props: {
      isOpen: {
        type: Boolean,
        required: true,
      
      },
      id:[]
    },
    methods: {
      close() {
        this.$emit('close');
        console.log(this.id)
      },

    },

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