<template>
  <div id="app">
    <navigation />
    <div class="view">
      <router-view class="view-page" />
    </div>
    <div class="tool-box">
      <box-model class="tool" />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/sys/nav'
import BoxModel from '@/components/sys/box-model'
import '../node_modules/bulma/bulma.sass'
import '../node_modules/bulma/sass/utilities/initial-variables.sass'

export default {
  name: 'app',
  components: {
    Navigation, BoxModel
  }
}
</script>

<style lang="scss">
#app {
  background: transparent;
  .view {
    padding: 20px;
    .view-page {
      margin: auto;
    }
  }
  .tool-box {
    position: fixed;
    top: 60%;
    min-height: 40%;
    .tool {
      max-width: 600px;
    }
  }
}
</style>
