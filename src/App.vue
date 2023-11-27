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
    <flash-message-list
        v-model:messages="fleshMessages"
    />
</template>

<script>
import myHeader from '@/components/myHeader.vue';
import myFooter from '@/components/myFooter.vue';
import modalSearch from '@/components/modalSearch.vue';
import modalBasket from '@/components/modalBasket.vue';
import flashMessageList from '@/components/flashMessageList.vue';

export default {
    components: {
        myHeader,
        myFooter,
        modalSearch,
        modalBasket,
        flashMessageList
    },
    data() {
        return {
            basket: [],
            search: '',
            searchDialog: false,
            basketDialog: false,
            fleshMessages: [
                {'type': 'success', 'message': 'Товар добавлен в корзину1', 'id': 1},
                {'type': 'success', 'message': 'Товар добавлен в корзину2', 'id': 2},
                {'type': 'success', 'message': 'Товар добавлен в корзину3', 'id': 3},
                {'type': 'success', 'message': 'Товар добавлен в корзину4', 'id': 4},
                {'type': 'success', 'message': 'Товар добавлен в корзину5', 'id': 5}
            ]
        }
    },
    methods: {
        modalMenu(value) {
            let body = document.getElementsByTagName('body')[0];
            let className = 'modal-active';
            let marginSize = window.innerWidth - body.clientWidth;
            if (value) {
                body.style.marginRight = marginSize + "px";
                if (body.classList) {
                    body.classList.add(className);
                } else {
                    if (body.className.indexOf(className) === -1) {
                        body.className += ' ' + className;
                    }
                }
            } else {
                body.style.marginRight = "";
                if (body.classList) {
                    body.classList.remove(className);
                } else {
                    if (body.className.indexOf(className) !== -1) {
                        body.className = body.className.replace(className, '');
                    }
                }
            }
        }
    },
    watch: {
        basketDialog(value) {
            this.modalMenu(value);
        },
        searchDialog(value) {
            this.modalMenu(value);
        }
    }
}
</script>

<style>

</style>