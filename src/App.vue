<template>
    <my-header
        :card="card"
    />
    <router-view
        v-model:card="card"
        v-model:search="search"
    ></router-view>
    <my-footer/>
    <noscript>
        <strong>We're sorry but NeonEnergy doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
</template>

<script>
import myHeader from '@/components/myHeader.vue';
import myFooter from '@/components/myFooter.vue';

export default {
    components: {
        myHeader,
        myFooter,
    },
    data() {
        return {
            card: [
            ],
            search: '',
        }
    },
}
</script>

<style>

</style>