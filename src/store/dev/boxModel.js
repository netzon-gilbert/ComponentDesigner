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

export default {
    state: {
        render: false,
        stylesheet: '',
        boxStyles: [
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
    },
    mutations: {
        boxModelStyles() {
            let box = this.state.boxModel.boxStyles,
                padding = box[0],
                margin = box[1],
                width = box[2],
                radius = box[3],
                boxStyles = 'border-color: black;'

            function procPadd() {
                let style = ''
                for (let i = 0; i < padding.sides.length; i++) {
                    style += 'padding-'
                    style += padding.sides[i].sname
                    style += ':'
                    style += padding.sides[i].side
                    style += 'px;\n'
                }
                return style
            }

            function procMarg() {
                let style = ''
                for (let i = 0; i < margin.sides.length; i++) {
                    style += 'margin-'
                    style += margin.sides[i].sname
                    style += ':'
                    style += margin.sides[i].side
                    style += 'px;\n'
                }
                //console.log(style)
                return style
            }

            function procWidth() {
                let style = ''
                for (let i = 0; i < width.sides.length; i++) {
                    style += 'border-'
                    style += width.sides[i].sname
                    style += '-width:'
                    style += width.sides[i].side
                    style += 'px;\n'
                }
                return style
            }

            function procRad() {
                let style = ''
                for (let i = 0; i < radius.sides.length; i++) {
                    style += 'border-'
                    style += radius.sides[i].sname2
                    style += '-radius:'
                    style += radius.sides[i].side
                    style += 'px;\n'
                }
                return style
            }

            boxStyles += procPadd()
            boxStyles += procMarg()
            boxStyles += procWidth()
            boxStyles += procRad()

            console.log(boxStyles)
        }
    }
}