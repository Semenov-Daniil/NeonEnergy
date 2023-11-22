<template>
    <main class="main__index">
        <section class="section__opening">
            <div class="content--left">
                <img src="images/logo.png" alt="логотип Neon~Energy">
            </div>
            <div class="content--bottom">
                <h1 class="slogan text--caps">ТВОЙ ПОСТАВЩИК ЭНЕРГИИ</h1>
                <p class="opening--desc">
                    Neon~Energy — погрузись в мир энергии.
                        Найди идеальный энергетик для твоего стиля жизни.
                        Покаряй новые вершины и достигай взрыва энергии!
                        Не жди, заряжайся вместе с <b>Neon~Energy</b>.
                </p>
            </div>
            <div class="content--right">
                <div class="fly--energy">
                    <img src="images/energy_drink/Jaguar_Live.png" alt="энергетик Jaguar Live">
                </div>
                <div class="oval--backlight">
                    <img src="images/OvalBacklight.png" alt="">
                </div>
            </div>
        </section>

        <section class="section--products">
            <div class="container--products">
                <div class='container--products__header'>
                    <div class='products__header--left'>
                        <a href="#" class="products--link">
                            Популярные товары
                            <svg class="icon-arrow">
                                <use xlink:href="images/icons/arrow.svg#arrow"></use>
                            </svg>

                        </a>
                    </div>
                    <div class='products__header--right'></div>
                </div>
                <div class='container--products__body'>
                    <swiper
                        class="container__card-product"
                        :modules="modules"
                        :navigation="{
                            nextEl: '.swiper-button-next_swiper-popular-products',
                            prevEl: '.swiper-button-prev_swiper-popular-products'
                        }"
                        :pagination="{
                            el: '.swiper-pagination_swiper-popular-products',
                            clickable: true
                        }"
                        :slidesPerView="4"
                        :spaceBetween="50"

                        :watchOverflow="true"

                        :breakpoints="{
                            '0': {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            '480': {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            '900': {
                                slidesPerView: 2,
                                spaceBetween: 80
                            },
                            '1600': {
                                slidesPerView: 3,
                                spaceBetween: 45,
                            },
                            '1900': {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            }
                        }"
                    >
                        <swiper-slide
                            v-for="product in products.popularProducts"
                            :key="product.id"
                        >
                            <card-product
                                :product="product"
                                @addCard="addCard"
                            >
                            </card-product>
                        </swiper-slide>
                    </swiper>
                    <div class="swiper-pagination swiper-pagination_swiper-popular-products"></div>
                    <div class="swiper-button-next_swiper-popular-products swiper-button-next"></div>
                    <div class="swiper-button-prev_swiper-popular-products swiper-button-prev"></div>
                </div>
                <div class="container--products__background bg-g"></div>
                <div class="container--products__background bg-w"></div>
            </div>

            <div class="container--products cp--mirrored">
                <div class='container--products__header'>
                    <div class='products__header--left'>
                        <a href="#" class="products--link">
                            Новинки и акции
                            <svg class="icon-arrow">
                                <use xlink:href="images/icons/arrow.svg#arrow"></use>
                            </svg>
                        </a>
                    </div>
                    <div class='products__header--right'></div>
                </div>
                <div class='container--products__body'>
                    <swiper
                        class="container__card-product"
                        :modules="modules"
                        :navigation="{
                            nextEl: '.swiper-button-next_swiper-new-products',
                            prevEl: '.swiper-button-prev_swiper-new-products'
                        }"
                        :pagination="{
                            el: '.swiper-pagination_swiper-new-products',
                            clickable: true
                        }"
                        :slidesPerView="4"
                        :spaceBetween="50"

                        :watchOverflow="false"

                        :breakpoints="{
                            '0': {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            '480': {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            '900': {
                                slidesPerView: 2,
                                spaceBetween: 80
                            },
                            '1600': {
                                slidesPerView: 3,
                                spaceBetween: 45,
                            },
                            '1900': {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            }
                        }"
                    >
                        <swiper-slide
                            v-for="product in products.newProducts"
                            :key="product.id"
                        >
                            <card-product
                                :product="product"
                                @addCard="addCard"
                            >
                            </card-product>
                        </swiper-slide>
                    </swiper>
                    <div class="swiper-pagination swiper-pagination_swiper-new-products"></div>
                    <div class="swiper-button-next swiper-button-next_swiper-new-products"></div>
                    <div class="swiper-button-prev swiper-button-prev_swiper-new-products"></div>
                </div>
                <div class="container--products__background bg-w"></div>
                <div class="container--products__background bg-g"></div>
            </div>
        </section>

        <section class="section--answers">
            <div class="answers__title">
                <h2>часто задаваемые</h2>
                <h1>вопросы</h1>
            </div>

            <div class="answers__accordion">
                <ul id="my-accordion" class="accordionjs">
                    <li class="accordion__wrapper accordion__line">
                        <div class="accordion__title">
                            Доставка
                            <svg>
                                <use xlink:href="images/icons/cross.svg#cross"></use>
                            </svg>
                        </div>
                        <div class="accordion__body">
                            Мы доставляем заказы в любую точку России. Стоимость и сроки доставки зависят от региона, веса посылки и способа доставки. Стоимость рассчитывается автоматически и сразу включается в счет заказа. Больше о доставке можно узнать во вкладке О нас.
                        </div>
                    </li>
                    <li class="accordion__wrapper">
                        <div class="accordion__title">
                            Оплата
                            <svg>
                                <use xlink:href="images/icons/cross.svg#cross"></use>
                            </svg>
                        </div>
                        <div class="accordion__body">
                            Оплата осуществляется по банковским картам и через СБП. Мы не просим и не принимаем деньги прямым переводом на карту или кошелек. Мы не работаем по пост оплате (оплата при получении). Больше об оплате можно узнать в кладке О нас.
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    <div class="dialog_wrapper" v-show="this.searchDialog" @click="$emit('update:searchDialog', false)">
        <div
            class="searh_dialog_content dialog_content"
            :class="{'dialog_focus': focusDialog}"
            @click.stop
        >
            <input
                class="search_input"
                type="text"
                placeholder="Поиск на сайте NeonEnergy..."
                @focus="focusDialog = true"
                @blur="focusDialog = false"
                v-model="searchValue"
            />
            <button class="search_btn search_input_reset" v-show="searchValue.length" @click="searchValue = ''">
                <svg class="icon icon-cross">
                    <use xlink:href="images/icons/cross2.svg#cross"></use>
                </svg>
            </button>
            <a href="#" class="search_btn search_btn_icon">
                <svg class="icon icon-search">
                    <use xlink:href="images/icons/icons.svg#icon-search"></use>
                </svg>
            </a>
        </div>
    </div>
    <div class="dialog_wrapper">
        <div class="dialog_content card_dialog_content">
            <header class="card_dialog_header">
                <h1 class="card_title">КОРЗИНА ТОВАРОВ</h1>
                <button class="close_card_btn">
                    <svg class="icon icon-cross">
                        <use xlink:href="images/icons/cross2.svg#cross"></use>
                    </svg>
                </button>
            </header>
            <main class="card_main">
                <div class="card_product">
                    <div class="conteiner--image">
                        <img src="images/energy_drink/Jaguar_Live.png" alt="Jaguar Live">
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

export default {
    components: {
        Swiper,
        SwiperSlide,
        Accordion,
        AccordionTab
    },
    props: {
        card: {
            type: Array
        },
        search: {
            type: String, Number
        },
        searchDialog: {
            type: Boolean
        }
    },
    data() {
        return {
            products: {},
            modules: [Pagination, Navigation],
            focusDialog: false,
            searchValue: '',
        }
    },
    methods: {
        async getPopularProducts() {
            try {
                let response = await fetch('./data/products.json');
                this.products = await response.json();
            } catch(err) {
                console.log(err.message);
            }
        },
        async addCard(event) {
            let prod = {};
            try {
                let response = await fetch('./data/products.json');
                let products = await response.json();
                for (let productsItem in products) {
                    products[productsItem].find((pr) => {if (pr.id === event) prod = pr });
                }
                this.card.push(prod);
                this.$emit('update:card', this.card);
            } catch(err) {
                console.log(err.message);
            }
        }
    },
    mounted() {
      this.getPopularProducts();
    },
}
</script>

<style>

</style>