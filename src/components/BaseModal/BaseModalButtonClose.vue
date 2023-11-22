<template>
  <button class="p-2 focus:outline-none" data-testid="base-modal-button-close">
    <BaseIcon name="x" />
  </button>
</template>

<script>
import BaseIcon from '../Icon/BaseIcon.vue'

export default {
  components: {
    BaseIcon
  }
}
</script>
