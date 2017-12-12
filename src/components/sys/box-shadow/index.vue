<template>
    <div class="box-shadow-wrapper"
        @mouseup="compRender(false)"
        @mousedown="compRender(true)">
        <label>Box Shadow</label><br />
        <div class="controls">
            <div class="tools">
                <div class="ctr-tool">
                    <sup>{{ $store.state.boxShadow.inset.name }}</sup>
                    <input type="checkbox"
                        v-model="$store.state.boxShadow.inset.val" />
                </div>
                <div class="ctr-tool">
                    <sup>{{ $store.state.boxShadow.color.name }}</sup>
                    <input type="color"
                        v-model="$store.state.boxShadow.color.val" />
                </div>
            </div>
            <div class="tools">
                <div class="ctr-tool"
                    v-for="range, key in $store.state.boxShadow.ranges">
                    <sup>{{ range.name }} </sup>
                    <sup>
                        <input type="number" v-model="range.val" />
                    </sup><br />
                    <input type="range" v-model="range.val" />
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./script/box-shadow.js">
</script>
<style lang="scss">
@import './style/box-shadow.scss'
</style>