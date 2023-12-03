<template>
  <div>
    <RouterView />
    <ModalContainer />
  </div>
</template>

<script>
import ModalContainer from "@/components/parts/ModalContainer";

export default {
  components: {
    ModalContainer
  }
}
</script>

<style lang="less">
</style>
