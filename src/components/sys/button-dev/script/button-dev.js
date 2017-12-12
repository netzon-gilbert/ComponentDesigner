export default {
    data() {
        return {
            name: 'Button',
            route: 'button',
            styleSheet: ''
        }
    },
    methods: {
        boxModelStyles() {
            let box = this.$store.state.boxModel,
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
            return boxStyles
        },

        renderComp() {
            if (this.$store.state.comp.render) {
                this.styleSheet = this.boxModelStyles()
            }
        }
    },
    mounted() {
        this.renderComp()
        setInterval(this.renderComp, 90)
    }
}