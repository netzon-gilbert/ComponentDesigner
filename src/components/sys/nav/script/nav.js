import router from '@/router'

export default {
    data() {
        return {
            name: 'navigation'
        }
    },
    methods: {
        goTo(key) {
            router.push(key)
        }
    }
}