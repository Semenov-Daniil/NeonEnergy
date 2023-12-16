<template>
    <div class="wrapper_navbar">
        <div class="navbar_content">
            <nav class="navbar_nav">
                <ul class="navbar_nav_list">
                    <li class="navbar_nav_item">
                        <a href="#" @click="$router.push('/')">
                            <svg class="icon icon-main" :class="{'icon-active': (route.name == 'home')}">
                                <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-main'"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="navbar_nav_item">
                        <a href="#" @click="$router.push('/catalog')">
                            <svg class="icon icon-catalog" :class="{'icon-active': (route.name == 'catalog')}">
                                <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-catalog'"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="navbar_nav_item" @click.prevent="$emit('update:warningDialog', true)">
                        <a href="#">
                            <svg class="icon icon-user">
                                <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-user'"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="navbar_nav_item" @click.prevent="$emit('update:warningDialog', true)">
                        <a href="#">
                            <svg class="icon icon-favorites">
                                <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-favorites'"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="navbar_nav_item">
                        <a href="#" @click.prevent="$emit('update:basketDialog', true)" class="navbar_nav_link">
                            <svg class="icon icon-favorites" :class="{'icon-active': basketDialog}">
                                <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-basket'"></use>
                            </svg>
                            <div class="count-prod" v-if="basket.length">
                                {{ countProducts }}
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
export default {
    name: 'modal_navbar',
    props: {
        basket: {
            type: Array
        },
        basketDialog: {
            type: Boolean
        },
        warningDialog: {
            type: Boolean
        },
        modalMenu: {
            type: Boolean
        }
    },
    data() {
        return {
            router: useRouter(),
            route: useRoute(),
            imagesUrl: '../',
        }
    },
    computed: {
        countProducts() {
            let countProducts = 0;
            for(let productItem in this.basket) {
                countProducts += this.basket[productItem].count;
            }
            return countProducts;
        }
    }
}
</script>

<style>

</style>