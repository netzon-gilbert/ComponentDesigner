<template>
    <div class="box-model-wrapper"
        @mouseup="compRender(false)"
        @mousedown="compRender(true)">
        <label>Box Model</label><br />
        <div class="box-sides"
            v-for="sides, key in $store.state.boxModel">
            <label>{{ sides.name }}</label><br />
            <span class="side"
                v-for="each, count in $store.state.boxModel[key].sides">
                <sub>{{ each.name }}</sub>
                <sup>{{ each.side }}</sup><br />
                <input type="range" v-model="each.side" />
            </span>
        </div>
    </div>
</template>

<script src="./script/box-model.js">
</script>
<style lang="scss">
@import './style/box-model.scss'
</style>