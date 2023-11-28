<template>
    <main class="main main__index">
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
                                @addBasket="addBasket"
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
                            v-for="product in products.specialProducts"
                            :key="product.id"
                        >
                            <card-product
                                :product="product"
                                @addBasket="addBasket"
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
        basket: {
            type: Array
        },
        flashMessages: {
            type: Object
        }
    },
    data() {
        return {
            products: {},
            modules: [Pagination, Navigation],
        }
    },
    methods: {
        async getProducts() {
            try {
                let response = await fetch('./data/products.json');
                this.products = await response.json();
            } catch(err) {
                console.log(err.message);
            }
        },
        async addBasket(event) {
            let productBasket = {};
            let addNewProduct = true;
            try {
                for (let productItem in this.basket) {
                    let product = this.basket[productItem]
                    if (product.id === event) {
                        product.count++;
                        addNewProduct = false;
                        break;
                    }
                }

                if (addNewProduct) {
                    let response = await fetch('./data/products.json');
                    let data = await response.json();
                    let allProducts = data.allProducts;
                    for (let productItem in allProducts) {
                        let product = allProducts[productItem];
                        if (product.id === event) {
                            productBasket = product;
                            productBasket.count = 1;
                        }
                    }
                    this.basket.push(productBasket);
                }
                this.$emit('updateBasket', JSON.parse(JSON.stringify(this.basket)));
            } catch(err) {
                console.log(err.message);
            }
        }
    },
    mounted() {
      this.getProducts();
    },
}
</script>

<style>

</style>