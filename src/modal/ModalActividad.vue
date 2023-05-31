<template>
  <div class="modal" :class="{ 'is-active': isOpen }">
    <div class="modal-background" @click="closeModal"></div>

    <div class="modal-content">
      <!-- Contenido del modal -->
      <div class="card-container">
        <div class="card">
          <div class="card-header">
            <h1>{{ actividad.nombre }}</h1>
          </div>
         
          <img src="../assets/logotipo.svg" alt="">
          <div class="card-body" >
            <h2><font-awesome-icon :icon="['fas', 'diagram-project']" /> <b>Código:</b>{{ actividad.id }}  </h2>
            <h2><font-awesome-icon :icon="['fas', 'puzzle-piece']" /> <b>Nombre:</b> {{ actividad.nombre }}</h2>
            <h2><font-awesome-icon :icon="['fas', 'circle-question']" /> <b>Descripción:</b> {{ actividad.descripcion }}</h2>
            <h2><font-awesome-icon :icon="['fas', 'location-dot']" /> <b>Lugar:</b> {{ actividad.lugar }}</h2>
            <h2><b>Fecha de inicio:</b> {{ actividad.fecha_inicio }}</h2>
            <h2><b>Fecha de culminación:</b> {{ actividad.fecha_fin }}</h2>


           

          </div>
        </div>

     

      </div>
    </div>
    <button class="modal-close is-large" @click="closeModal"></button>
  </div>
</template>

<script>
export default {

  name: 'ModalActividad',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    actividad: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  },
  mounted() {
    console.log(this.actividad)
  }
};
</script>

<style scoped>
.modal {
  display: none;
  
}
.icono{
  font-size: 80px;
}
img{
  width: 30%;
  margin-left: 35%;
  margin-top: 5%;
}
.modal.is-active {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

.modal-close::before,
.modal-close::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 2px;
  background-color: #333;
  transform: translate(-50%, -50%);
}

.modal-close::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.modal-close::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}


.card-container {
  align-items: center;
  display: flex;
  flex-direction: column;

}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  margin-right: 10px;
  width: 80%;
}

.card-header {
  background-color: #f2f2f2;
  font-weight: bold;
  padding: 10px;
}

.card-body {
  padding: 10px;
  margin-bottom: 5%;
  text-align: left;
}
.card-body h2{
  margin-left: 20%;
}
</style>
