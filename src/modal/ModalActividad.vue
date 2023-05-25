<template>
  <div class="modal" :class="{ 'is-active': isOpen }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <!-- Contenido del modal -->
      <h2>Estudiante: {{ actividad }}</h2>
    </div>
    <button class="modal-close is-large" @click="closeModal"></button>
  </div>
</template>

<script>
export default {

  name:'ModalActividad',
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
  mounted(){
    console.log(this.actividad)
  }
};
</script>

<style scoped>
.modal {
  display: none;
  width: 60%;
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
  width: 100%;
  height: 100%;
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
</style>
