import Vue from 'vue'
import Vuex from 'vuex'
import box_model from './dev/boxModel.js'
import box_shadow from './dev/boxShadow.js'

Vue.use(Vuex)

const BoxModel = box_model
const BoxShadow = box_shadow

const Component = {
    state: {
        render: false
    }
}
export default new Vuex.Store({
    modules: {
        comp: Component,
        boxModel: BoxModel,
        boxShadow: BoxShadow
    }
})