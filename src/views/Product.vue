<template>
    <main class="main_product_page main">
        <section class="product_section" v-if="(Object.keys(product).length)">
            <div class="swiper_product_wrapper">
                <div class="swiper-pagination swiper-pagination_swiper-page-products"></div>
                <swiper
                    class="swiper_product"
                    :direction="'vertical'"
                    :slidesPerView="1"
                    :spaceBetween="30"
                    :mousewheel="true"
                    :rewind="true"
                    :loop="true"
                    :modules="modules"
                    :navigation="{
                        nextEl: '.swiper-button-next_swiper-page-products',
                        prevEl: '.swiper-button-prev_swiper-page-products'
                    }"
                    :pagination="{
                        el: '.swiper-pagination_swiper-page-products',
                        clickable: true
                    }"
                >
                    <swiper-slide>
                        <div class="slide_image">
                            <img :src="imagesUrl + 'images/energy_drink/' + product.img_title" alt="Jaguar Origin">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="slide_image">
                            <img :src="imagesUrl + 'images/energy_drink_add/' + product.img2" alt="Jaguar Origin">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="slide_image">
                            <img :src="imagesUrl + 'images/energy_drink_add/' + product.img3" alt="Jaguar Origin">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="slide_image">
                            <img :src="imagesUrl + 'images/energy_drink_add/' + product.img4" alt="Jaguar Origin">
                        </div>
                    </swiper-slide>
                </swiper>

                <!-- <div class="swiper-button-next_swiper-page-products swiper-button-next"></div>
                <div class="swiper-button-prev_swiper-page-products swiper-button-prev"></div> -->
            </div>
            <div class="product_info_wrapper">
                <div class="title_product_wrapper">
                    <h1 class="page-product__title-product">{{ product.title }}</h1>
                    <div class="wrapper__rating page-product__rating">
                        <ul class="product__rating">
                            <li
                                v-for="star in 5"
                                :key="star"
                                :class="{'star':true, 'full-star': (star <= product.rating)}"
                            >
                                <svg viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <use :xlink:href="imagesUrl + 'images/icons/Star.svg#star'"></use>
                                </svg>
                            </li>
                        </ul>
                        <span>{{ product.rating }}</span>
                    </div>
                </div>
                <span class="card-product__title-add">{{ product.volume }}</span>
                <div
                    :class="{'spesial__price': ((specialProduct).id == 1)}"
                    class="page-product__price-tag"
                >
                    <div class="price-tag">
                        <span class="price--base">{{ (product.price).toLocaleString("ru-RU") }}</span>
                        <span class="price--spesial" v-if='((specialProduct).id == 1)'>{{ (product.price / 100 * (specialProduct).discount).toLocaleString("ru-RU") }}</span>
                    </div>
                    ₽
                </div>
                <button>В корзину</button>
            </div>
        </section>
    </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
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
            productId: '',
            imagesUrl: '../',
            modules: [Pagination, Navigation, Mousewheel],
            product: {}
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.fetchData()
            },
            { immediate: true }
        )
    },
    methods: {
        fetchData() {
            this.productId = sessionStorage.getItem('productId');
            this.fetchProduct();
        },
        async fetchProduct() {
            try {
                let response = await fetch(this.imagesUrl + 'data/products.json');
                let data = await response.json();
                let allProducts = data.allProducts;
                for (let productItem in allProducts) {
                    if (allProducts[productItem].id == this.productId) {
                        this.product = allProducts[productItem]
                    }
                }
            } catch(err) {
                console.log(err.message);
            }
        }
    },
    computed: {
        specialProduct() {
            return this.product["speсial"]
        }
    },
}
</script>

<style>

</style>