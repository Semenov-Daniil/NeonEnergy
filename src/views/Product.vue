<template>

</template>

<script>
export default {
    props: {
        basket: {
            type: Array
        },
        flashMessages: {
            type: Object
        }
    },
    data() {
        return {
            productId: ''
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.fetchData()
            },
            { immediate: true }
        )
    },
    methods: {
        fetchData() {
            this.productId = sessionStorage.getItem('productId');
            console.log(this.productId)
        }
    }
}
</script>

<style>

</style>