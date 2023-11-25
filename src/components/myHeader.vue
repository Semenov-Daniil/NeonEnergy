<template>
  <header class="header">
        <nav class="nav">
            <div class="nav__left">
                <ul class="nav__list text--caps">
                    <li class=""><a href="#">Энергетики</a></li>
                    <li class=""><a href="#">О нас</a></li>
                    <li class=""><a href="#">Контакты</a></li>
                </ul>

                <div class="mobile--menu">
                    <svg class="icon burger-menu">
                        <use xlink:href="images/icons/icons.svg#burger-menu"></use>
                    </svg>
                </div>
            </div>

            <div class="nav__right">
                <a class="nav__logo conteiner--image" href="#">
                    <img src="images/logo.png" alt="логотип Neon~Energy">
                </a>

                <ul class="nav__list__icon">
                    <li class="icon-search">
                        <a href="#" data-title="Поиск" @click="$emit('update:searchDialog', true)">
                            <svg class="icon icon-search" :class="{'icon-active': searchDialog}">
                                <use xlink:href="images/icons/icons.svg#icon-search"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Личный кабинет">
                            <svg class="icon icon-user">
                                <use xlink:href="images/icons/icons.svg#icon-user"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Избранное">
                            <svg class="icon icon-favorites">
                                <use xlink:href="images/icons/icons.svg#icon-favorites"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Заказы">
                            <svg class="icon icon-favorites">
                                <use xlink:href="images/icons/icons.svg#icon-orders"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Корзина" @click="$emit('update:basketDialog', true)">
                            <svg class="icon icon-favorites" :class="{'icon-active': basketDialog}">
                                <use xlink:href="images/icons/icons.svg#icon-basket"></use>
                            </svg>
                            <div class="count-prod" v-if="basket.length">
                                {{ basket.length }}
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
    },
}
</script>

<style>

</style>