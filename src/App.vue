<template>
    <my-header
        :basket="basket"
        v-model:searchDialog="searchDialog"
        v-model:basketDialog="basketDialog"
        v-model:warningDialog="warningDialog"
        v-model:modalMenu="modalMenuDialog"
    />
    <router-view
        v-model:basket="basket"
        v-model:flashMessages="flashMessages"
        @updateBasket="updateBasket"
        v-model:search="search"
        v-model:filters="filters"
        v-model:tags="tags"
        v-model:modalFilter="modalFilterDialog"
        @createQuestion="createQuestion"
        @createComment="createComment"
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
        v-model:messages="flashMessages"
        @deleteProduct="deleteProduct"
    />
    <modal-warning
        v-model:warningDialog="warningDialog"
    />
    <modal-menu
        v-model:modalMenu="modalMenuDialog"
    />
    <flash-message-list
        v-model:flashMessages="flashMessages"
    />
    <modal-navbar
        v-model:basket="basket"
        v-model:basketDialog="basketDialog"
        v-model:warningDialog="warningDialog"
    />
    <modal-filter
        v-if="route.name == 'catalog'"
        v-model:modalFilter="modalFilterDialog"
        v-model:filters="filters"
        v-model:tags="tags"
    />
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import myHeader from '@/components/myHeader.vue';
import myFooter from '@/components/myFooter.vue';
import modalSearch from '@/components/modalSearch.vue';
import modalBasket from '@/components/modalBasket.vue';
import flashMessageList from '@/components/flashMessageList.vue';
import modalWarning from '@/components/modalWarning.vue';
import modalMenu from '@/components/modalMenu.vue';
import modalNavbar from '@/components/modalNavbar.vue';
import modalFilter from '@/components/modalFilter.vue';

export default {
    components: {
        myHeader,
        myFooter,
        modalSearch,
        modalBasket,
        flashMessageList,
        modalWarning,
        modalMenu,
        modalNavbar,
        modalFilter
    },
    data() {
        return {
            router: useRouter(),
            route: useRoute(),

            basket: [],
            search: '',

            flashMessages: [],

            searchDialog: false,
            basketDialog: false,
            warningDialog: false,
            modalMenuDialog: false,
            modalFilterDialog: false,

            filters: {},
            tags: []
        }
    },
    methods: {
        modalMenu(value) {
            let body = document.getElementsByTagName('body')[0];
            let header = document.querySelector('header');
            let className = 'modal-active';
            let marginSize = window.innerWidth - body.clientWidth;
            let scrollPosition = window.scrollY;
            if (value) {
                body.style.marginRight = marginSize + "px";
                body.style.top = -scrollPosition + "px";
                header.style.top = scrollPosition + "px";
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
                window.scroll(0, body.style.top.match(/\d+/g).join(''));
                header.style.top = "";
                body.style.marginRight = "";
                body.style.top = "";
            }
        },
        updateBasket(newBasket) {
            this.basket = newBasket;
            this.addFlashMessage('success', `Товар добавлен в корзину`);
        },
        deleteProduct(newBasket) {
            this.basket = newBasket;
            this.addFlashMessage('error', `Товар удален из корзины`);
        },
        removeFlash() {
            this.flashMessages = this.flashMessages.filter(
                message =>
                    {
                        return (new Date()) - message.id < 4000
                    }
            );
        },
        addFlashMessage(type, message) {
            this.flashMessages.push(
                {"type": type, "message": message, "id": (new Date().getTime())}
            );
            setTimeout(() => {
                this.removeFlash();
            }, 5000)
        },
        updateModalMenuDialog(e) {
            if (window.innerWidth > 900) {
                this.modalMenuDialog = false;
            }
        },
        createQuestion() {
            this.addFlashMessage('success', `Вопрос отправлен.`);
        },
        createComment() {
            this.addFlashMessage('success', `Комментарий создан.`);
        }
    },
    watch: {
        basketDialog(value) {
            this.modalMenu(value);
        },
        searchDialog(value) {
            this.modalMenu(value);
        },
        warningDialog(value) {
            this.modalMenu(value);
        },
        modalMenuDialog(value) {
            this.modalMenu(value);
        },
        modalFilterDialog(value) {
            this.modalMenu(value);
        }
    },
    created() {
        window.addEventListener("resize", this.updateModalMenuDialog);
    },
    destroyed() {
        window.removeEventListener("resize", this.updateModalMenuDialog);
    },
}
</script>

<style>

</style>