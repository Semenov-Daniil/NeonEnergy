<template>
    <my-header
        :basket="basket"
        v-model:searchDialog="searchDialog"
        v-model:basketDialog="basketDialog"
    />
    <router-view
        v-model:basket="basket"
        v-model:search="search"
        v-model:searchDialog="searchDialog"
        v-model:basketDialog="basketDialog"
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
            basket: [],
            search: '',
            searchDialog: false,
            basketDialog: false,
        }
    },
}
</script>

<style>

</style>