<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal-wrapper">
        <div class="p-5 modal" @click.stop>
          <slot></slot>
        </div>

        <div class="close" @click="$emit('close-modal')">
          <button class="font-bold transition duration-300 delay-150 bg-gray-400 close-img hover:delay-0">X</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 1;
}

.modal {
  color: #1d2d50;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 5rem;
  border-radius: 20px;
}

@media only screen and (max-width: 768px) {
  .modal {
    height: 400px;
    width: 350px;
    padding: 3rem;
  }
}

.modal-wrapper {
  position: relative;
}

.close {
  position: absolute;
  top: 35px;
  right: -15px;
  cursor: pointer;
}

button {
  background-color: #2A4365;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 100%;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
