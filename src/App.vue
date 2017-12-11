<template>
  <div id="app">
    <navigation />
    <div class="view"
      <router-view class="view-page" />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/sys/nav'
import '../node_modules/bulma/bulma.sass'
import '../node_modules/bulma/sass/utilities/initial-variables.sass'

export default {
  name: 'app',
  components: {
    Navigation
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
}
</style>
