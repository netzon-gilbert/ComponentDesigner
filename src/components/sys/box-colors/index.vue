<template>
    <div class="box-colors-wrapper"
        @mouseup="compRender(false)"
        @mousedown="compRender(true)">
        <label>Box Colors</label><br />
        <div class="controls">
            <div class="tools">
                <div class="ctr-tool" >
                    <sup>{{ $store.state.boxColors.background.name }}</sup>
                    <input type="color" 
                        v-model="$store.state.boxColors.background.val" />
                </div>
                <div class="ctr-tool" >
                    <sup>{{ $store.state.boxColors.foreground.name }}</sup>
                    <input type="color" 
                        v-model="$store.state.boxColors.foreground.val" />
                </div>
                <label>border</label>
                <div class="ctr-tool"
                    v-for="side, key in $store.state.boxColors.sides">
                    <sup>{{ side.name }}</sup>
                    <input type="color" v-model="side.val" />
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./script/box-colors.js">
</script>
<style lang="scss">
@import './style/box-colors.scss'
</style>