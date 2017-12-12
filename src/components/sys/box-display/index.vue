<template>
    <div class="box-display-wrapper"
        @mouseup="compRender(false)"
        @mousedown="compRender(true)">
        <label>Box Display</label><br />
        <div class="controls">
            <div class="tools">
                <div class="ctr-tool" >
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./script/box-display.js">
</script>
<style lang="scss">
@import './style/box-display.scss'
</style>