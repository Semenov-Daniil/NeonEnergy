<template>
    <!-- header -->
    <my-header
        :basket="basket"
        v-model:searchDialog="searchDialog"
        v-model:basketDialog="basketDialog"
        v-model:warningDialog="warningDialog"
        v-model:modalMenu="modalMenuDialog"
    />
    <!-- main -->
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
    <!-- footer -->
    <my-footer/>
    <!-- noscript -->
    <noscript>
        <strong>We're sorry but NeonEnergy doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>

    <!-- modal menu -->
    <!-- modal search -->
    <modal-search
        v-model:search="search"
        v-model:searchDialog="searchDialog"
    />
    <!-- modal basket -->
    <modal-basket
        v-model:basket="basket"
        v-model:basketDialog="basketDialog"
        v-model:messages="flashMessages"
        @deleteProduct="deleteProduct"
        v-model:warningDialog="warningDialog"
    />
    <!-- modal warning page -->
    <modal-warning
        v-model:warningDialog="warningDialog"
    />
    <!-- modal menu -->
    <modal-menu
        v-model:modalMenu="modalMenuDialog"
        v-model:basketDialog="basketDialog"
        v-model:warningDialog="warningDialog"
    />
    <!-- modal flesh message -->
    <flash-message-list
        v-model:flashMessages="flashMessages"
    />
    <!-- mmodal navbar -->
    <modal-navbar
        v-model:basket="basket"
        v-model:basketDialog="basketDialog"
        v-model:warningDialog="warningDialog"
    />
    <!-- modal filter -->
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
            tags: [],

            timerLoader: 0,
            loader: true,
        }
    },
    methods: {
        // open, close modal menu
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

        // close modal menu and filter menu
        updateModalMenuDialog(e) {
            if (window.innerWidth > 900) {
                this.modalMenuDialog = false;
            }

            if (window.innerWidth > 768) {
                this.modalFilterDialog = false
            }
        },

        // update basket
        updateBasket(newBasket) {
            this.basket = newBasket;
            this.addFlashMessage('success', `Товар добавлен в корзину`);
        },
        // delete product
        deleteProduct(newBasket) {
            this.basket = newBasket;
            this.addFlashMessage('error', `Товар удален из корзины`);
        },

        // delete flash message
        removeFlash() {
            this.flashMessages = this.flashMessages.filter(
                message =>
                    {
                        return (new Date()) - message.id < 4000
                    }
            );
        },
        // add flash message
        addFlashMessage(type, message) {
            this.flashMessages.push(
                {"type": type, "message": message, "id": (new Date().getTime())}
            );
            setTimeout(() => {
                this.removeFlash();
            }, 5000)
        },

        // create question flesh message
        createQuestion() {
            this.addFlashMessage('success', `Вопрос отправлен.`);
        },

        // create comment flash message
        createComment() {
            this.addFlashMessage('success', `Комментарий создан.`);
        },

        // add filter
        async fetchFilter() {
            try {
                let response = await fetch('./data/filterProducts.json');
                let data = await response.json();
                this.filters = data;
                this.filters.grade = [
                    {"id": 1, "title": "от 5★", "value": true},
                    {"id": 2, "title": "от 4★", "value": false},
                    {"id": 3, "title": "от 3★", "value": false}
                ];
                this.filters.other = [
                    {"id": 1, "title": "Новинки", "value": false},
                    {"id": 2, "title": "Акции", "value": false}
                ];
                this.filters.price = [
                    {"id": 'min_price', "title": "от " + this.minPrice, "value": false},
                    {"id": 'max_price', "title": "до " + this.maxPrice, "value": false}
                ];
            } catch(err) {
                console.log(err.message);
            }
        },
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

        this.$watch(
            () => this.$route.params,
            () => {
                this.loader = true;
                clearTimeout(this.timerLoader);
                this.timerLoader = setTimeout(() => {
                    this.loader = false;
                }, 2000)
            },
            { immediate: true }
        )
    },
    destroyed() {
        window.removeEventListener("resize", this.updateModalMenuDialog);
    },
    mounted() {
        this.fetchFilter();
        let firstTime = localStorage.getItem("first_time");
        if(!firstTime) {
            localStorage.setItem("first_time","1");
        }
    }
}
</script>

<style>

</style>