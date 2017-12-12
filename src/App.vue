<template>
  <div id="app">
    <navigation />
    <div class="view">
      <router-view class="view-page" />
    </div>
    <div class="tool-box">
      <box-model class="tool" />
      <box-shadow class="tool" />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/sys/nav'
import BoxModel from '@/components/sys/box-model'
import BoxShadow from '@/components/sys/box-shadow'
import '../node_modules/bulma/bulma.sass'
import '../node_modules/bulma/sass/utilities/initial-variables.sass'

export default {
  name: 'app',
  components: {
    Navigation, BoxModel, BoxShadow
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
    top: 50%;
    min-height: 50%;
    .tool {
      display: inline-block;
      float: left;
      max-width: 600px;
    }
  }
}
</style>
