<template>
    <my-header
        :basket="basket"
        v-model:searchDialog="searchDialog"
        v-model:basketDialog="basketDialog"
    />
    <router-view
        v-model:basket="basket"
    ></router-view>
    <my-footer/>
    <noscript>
        <strong>We're sorry but NeonEnergy doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <modal-search
        v-model:search="search"
        v-model:searchDialog="searchDialog"
    />
    <modal-basket
        v-model:basket="basket"
        v-model:basketDialog="basketDialog"
    />
</template>

<script>
import myHeader from '@/components/myHeader.vue';
import myFooter from '@/components/myFooter.vue';
import modalSearch from '@/components/modalSearch.vue';
import modalBasket from '@/components/modalBasket.vue';

export default {
    components: {
        myHeader,
        myFooter,
        modalSearch,
        modalBasket
    },
    data() {
        return {
            basket: [],
            search: '',
            searchDialog: false,
            basketDialog: false,
        }
    },
    watch: {
        basketDialog() {
            let body = document.getElementsByTagName('body')[0];
            let className = 'modal-active';
            if (this.basketDialog) {
                if (body.classList) {
                    body.classList.add(className);
                } else {
                    if (body.className.indexOf(className) === -1) {
                        body.className += ' ' + className;
                    }
                }
            } else {
                if (body.classList) {
                    body.classList.remove(className);
                } else {
                    if (body.className.indexOf(className) !== -1) {
                        body.className = body.className.replace(className, '');
                    }
                }   
            }
        }
    }
}
</script>

<style>

</style>