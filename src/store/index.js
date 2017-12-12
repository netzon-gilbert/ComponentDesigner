import Vue from 'vue'
import Vuex from 'vuex'
//import BoxShit from './components/BoxModel.js'

Vue.use(Vuex)

let Sides = () => {
    return [
        {
            name: 'lef',
            name2: 'top-lef',
            side: 0,
            sname: 'left',
            sname2: 'top-left'
        },
        {
            name: 'rig',
            name2: 'top-rig',
            side: 0,
            sname: 'right',
            sname2: 'top-right'
        },
        {
            name: 'top',
            name2: 'bot-lef',
            side: 0,
            sname: 'top',
            sname2: 'bottom-left'
        },
        {
            name: 'bot',
            name2: 'bot-rig',
            side: 0,
            sname: 'bottom',
            sname2: 'bottom-right'
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