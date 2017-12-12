<template>
  <div id="app">
    <navigation />
    <div class="view">
      <router-view class="view-page" />
    </div>
    <div class="tool-box">
      <box-model class="tool" />
      <box-shadow class="tool" />
      <box-colors class="tool" />
      <box-display class="tool" />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/sys/nav'
import BoxModel from '@/components/sys/box-model'
import BoxShadow from '@/components/sys/box-shadow'
import BoxColors from '@/components/sys/box-colors'
import BoxDisplay from '@/components/sys/box-display'
import '../node_modules/bulma/bulma.sass'
import '../node_modules/bulma/sass/utilities/initial-variables.sass'

export default {
  name: 'app',
  components: {
    Navigation, BoxModel, BoxShadow, BoxColors, BoxDisplay
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
    top: 40%;
    min-height: 60%;
    .tool {
      display: inline-block;
      float: left;
      max-width: 600px;
    }
  }
}
</style>
