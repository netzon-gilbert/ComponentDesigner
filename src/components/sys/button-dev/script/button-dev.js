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

        boxShadowStyle() {
            let style = '',
                shadow = this.$store.state.boxShadow,
                inset = shadow.inset,
                color = shadow.color,
                xpos = shadow.ranges[0],
                ypos = shadow.ranges[1],
                blur = shadow.ranges[2],
                spread = shadow.ranges[3],
                opacity = shadow.ranges[4]

                function hex_to_RGB(hex) {
                    let m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i),
                        rgb = {
                            r: parseInt(m[1], 16),
                            g: parseInt(m[2], 16),
                            b: parseInt(m[3], 16)
                        }

                    return rgb.r + ', ' + rgb.g + ', ' + rgb.b
                }

                style += 'box-shadow:'
                style += (inset.val)? ' inset' : ''
                style += ' ' + xpos.val + 'px'
                style += ' ' + ypos.val + 'px'
                style += ' ' + blur.val + 'px'
                style += ' ' + spread.val + 'px'
                style += ' rgba(' + hex_to_RGB(color.val)
                style += ', ' + opacity.val / 100 + ');'
                console.log(style)
            return style
        },

        renderComp() {
            if (this.$store.state.comp.render) {
                this.styleSheet = this.boxModelStyles()
                this.styleSheet += this.boxShadowStyle()
            }
        }
    },
    mounted() {
        this.renderComp()
        setInterval(this.renderComp, 90)
    }
}