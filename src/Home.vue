<template>
  <div>
    <my-server-status></my-server-status>
    <my-server-status></my-server-status>
    <my-server-status></my-server-status>
  </div>
</template>
<script>
  import ServerStatus from './StatusComponent.vue'
  export default {
    components: {
      'my-server-status': ServerStatus
    }
  }

</script>
<style></style>
