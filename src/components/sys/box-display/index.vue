<template>
    <div class="box-display-wrapper"
        @mouseup="compRender(false)"
        @mousedown="compRender(true)">
        <label>Box Display</label><br />
        <div class="controls">
            <div class="tools">
                <div class="ctr-tool">
                    <sup>{{ $store.state.boxDisplay.font.selectedFont.name }}</sup>
                    <select v-model="$store.state.boxDisplay.font.selectedFont.val">
                        <option 
                            v-for="font, key in $store.state.boxDisplay.font.families"
                            :value="font.val">
                            {{ font.name }}
                        </option>
                    </select>
                </div>
                <div class="ctr-tool">
                    <sup>{{ $store.state.boxDisplay.font.size.name }}</sup>
                    <sup>
                        <input type="number" v-model="$store.state.boxDisplay.font.size.val" />
                    </sup>
                    <br />
                    <input type="range" v-model="$store.state.boxDisplay.font.size.val" />
                </div>
                <div class="ctr-tool">
                    <sup>{{ $store.state.boxDisplay.font.weight.name }}</sup>
                    <sup>
                        <input type="number" v-model="$store.state.boxDisplay.font.weight.val" />
                    </sup>
                    <br />
                    <input type="range" v-model="$store.state.boxDisplay.font.weight.val" />
                </div>
                <div class="ctr-tool">
                    <sup>{{ $store.state.boxDisplay.font.wordSpace.name }}</sup>
                    <sup>
                        <input type="number" v-model="$store.state.boxDisplay.font.wordSpace.val" />
                    </sup>
                    <br />
                    <input type="range" v-model="$store.state.boxDisplay.font.wordSpace.val" />
                </div>
                <div class="ctr-tool">
                    <sup>{{ $store.state.boxDisplay.opacity.name }}</sup>
                    <sup>
                        <input type="number" v-model="$store.state.boxDisplay.opacity.val" />
                    </sup>
                    <br />
                    <input type="range" v-model="$store.state.boxDisplay.opacity.val" />
                </div>
                <div class="ctr-tool">
                    <sup>{{ $store.state.boxDisplay.size.width.name }}</sup>
                    <sup>
                        <input type="number" v-model="$store.state.boxDisplay.size.width.val" />
                    </sup>
                    <br />
                    <input type="range" v-model="$store.state.boxDisplay.size.width.val" />
                </div>
                <div class="ctr-tool">
                    <sup>{{ $store.state.boxDisplay.size.height.name }}</sup>
                    <sup>
                        <input type="number" v-model="$store.state.boxDisplay.size.height.val" />
                    </sup>
                    <br />
                    <input type="range" v-model="$store.state.boxDisplay.size.height.val" />
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