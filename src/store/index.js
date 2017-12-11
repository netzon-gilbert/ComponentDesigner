import Vue from 'vue'
import Vuex from 'vuex'
//import BoxShit from './components/BoxModel.js'

Vue.use(Vuex)

let Sides = () => {
    return [
        {
            name: 'lef',
            side: 0,
            sname: 'left'
        },
        {
            name: 'rig',
            side: 0,
            sname: 'right'
        },
        {
            name: 'top',
            side: 0,
            sname: 'top'
        },
        {
            name: 'bot',
            side: 0,
            sname: 'bottom'
        }
    ]
}

const BoxModel = {
    state: [
        {
            name: 'padding',
            sides: new Sides()
        },
        {
            name: 'margin',
            sides: new Sides()
        },
        {
            name: 'width',
            sides: new Sides()
        },
        {
            name: 'radius',
            sides: new Sides()
        }
    ]
}

const Component = {
    state: {
        render: false
    }
}
export default new Vuex.Store({
    modules: {
        comp: Component,
        boxModel: BoxModel
    }
})