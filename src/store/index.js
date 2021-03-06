import Vue from 'vue'
import Vuex from 'vuex'
import box_model from './dev/boxModel.js'
import box_shadow from './dev/boxShadow.js'
import box_colors from './dev/boxColors.js'

Vue.use(Vuex)

const BoxModel = box_model,
    BoxShadow = box_shadow,
    BoxColors = box_colors


const Component = {
    state: {
        render: false
    }
}

export default new Vuex.Store({
    modules: {
        comp: Component,
        boxModel: BoxModel,
        boxShadow: BoxShadow,
        boxColors: BoxColors
    }
})