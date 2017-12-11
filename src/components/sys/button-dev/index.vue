<template>
    <div class="button-wrapper">
        <p>Design html components easily, without knowledge in webdevelopment</p>
        <button :style="styleSheet" @click="renderComp()">natural</button> <button>hover</button>
        <p>Design html components easily, without knowledge in webdevelopment</p>
    </div>
</template>

<script src="./script/button-dev.js">
</script>
<style lang="scss">
@import './style/button-dev.scss'
</style>