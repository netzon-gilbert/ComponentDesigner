<template>
    <div class="box-colors-wrapper"
        @mouseup="compRender(false)"
        @mousedown="compRender(true)">
        <label>Box Colors</label><br />
        <div class="controls">
            <div class="tools">
                <div class="ctr-tool">
                </div>
            </div>
            <div class="tools">
                <div class="ctr-tool"
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