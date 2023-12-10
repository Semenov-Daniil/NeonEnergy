<template>
  <header class="header">
        <nav class="nav">
            <div class="nav__left">
                <ul class="nav__list text--caps">
                    <li class=""><a href="#" @click.prevent="$emit('update:warningDialog', true)">Энергетики</a></li>
                    <li class=""><a href="#" @click.prevent="$router.push('/about')">О нас</a></li>
                    <li class=""><a href="#" @click.prevent="$emit('update:warningDialog', true)">Контакты</a></li>
                </ul>

                <div class="mobile--menu" @click="$emit('update:modalMenu', true)">
                    <svg class="icon burger-menu">
                        <use :xlink:href="imagesUrl + 'images/icons/icons.svg#burger-menu'"></use>
                    </svg>
                </div>
            </div>

            <div class="nav__right">
                <a class="nav__logo conteiner--image" href="#" @click.prevent="$router.push('/')">
                    <img :src="imagesUrl + 'images/logo.png'" alt="логотип Neon~Energy">
                </a>

                <ul class="nav__list__icon">
                    <li class="icon-search">
                        <a href="#" data-title="Поиск" @click.prevent="$emit('update:searchDialog', true)">
                            <svg class="icon icon-search" :class="{'icon-active': searchDialog}">
                                <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-search'"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Личный кабинет" @click.prevent="$emit('update:warningDialog', true)">
                            <svg class="icon icon-user">
                                <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-user'"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Избранное" @click.prevent="$emit('update:warningDialog', true)">
                            <svg class="icon icon-favorites">
                                <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-favorites'"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Заказы" @click.prevent="$emit('update:warningDialog', true)">
                            <svg class="icon icon-favorites">
                                <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-orders'"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Корзина" @click.prevent="$emit('update:basketDialog', true)">
                            <svg class="icon icon-favorites" :class="{'icon-active': basketDialog}">
                                <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-basket'"></use>
                            </svg>
                            <div class="count-prod" v-if="basket.length">
                                {{ countProducts }}
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'my-header',
    props: {
        basket: {
            type: Array
        },
        searchDialog: {
            type: Boolean
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
    computed: {
        countProducts() {
            let countProducts = 0;
            for(let productItem in this.basket) {
                countProducts += this.basket[productItem].count;
            }
            return countProducts;
        }
    },
    data() {
        return {
            imagesUrl: '../'
        }
    }
}
</script>

<style>

</style>