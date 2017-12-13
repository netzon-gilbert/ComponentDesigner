export default {
    state: {
        render: false,
        stylesheet: '',
        inset:  {
            name: 'Inset',
            val: false
        },
        color: {
            name: 'Color',
            val: '#000000'
        },
        ranges: [
            {
                name: 'X pos',
                sname: 'offset-x',
                val: 0
            },
            {
                name: 'Y pos',
                sname: 'offset-y',
                val: 0
            },
            {
                name: 'Blur',
                sname: 'blur-radius',
                val: 0
            },
            {
                name: 'Spread',
                sname: 'spread-radius',
                val: 0
            },
            {
                name: 'Opacity',
                sname: 'opacity',
                val: 100
            }
        ]
    }
}