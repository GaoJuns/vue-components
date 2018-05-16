<template>
  <transition name="gl-zoom">
    <div class="gl-toast" v-if="visible" :class="position == 'top' ? 'top' : position == 'center' ? 'center' : 'bottom'">
      {{message}}
    </div>
  </transition>
</template>
<script>
export default {
  name: 'glToast',
  data: function() {
    return {
      visible: false,
      message: '',
      position: 'center'
    }
  }
}

</script>
<style scoped>
  .gl-zoom-enter-active,
  .gl-zoom-leave-active {
    transition: 0.3s ease-out;
  }

  .gl-zoom-enter {
    opacity: 0;
    transform: scale(1.2);
  }

  .gl-zoom-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }
</style>
