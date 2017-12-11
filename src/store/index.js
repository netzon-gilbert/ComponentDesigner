import Vue from 'vue'
import Vuex from 'vuex'
//import BoxShit from './components/BoxModel.js'

Vue.use(Vuex)

let Sides = () => {
    return {
        lef: 0,
        rig: 0,
        top: 0,
        bot: 0
    }
}

const BoxModel = {
    state: {
        padding: new Sides(),
        margin: new Sides(),
        radius: new Sides(),
        width: new Sides()
    }
}

export default new Vuex.Store({
    modules: {
        boxModel: BoxModel
    }
})