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
                <div class="product-page__price-product__wrapper">
                    <span :class="{'product-page__price-product__special-price': ((specialProduct).id == 1)}">
                        {{ (product.price).toLocaleString("ru-RU") }}
                    </span>
                    <span v-if="((specialProduct).id == 1)">
                        {{ (product.price / 100 * (specialProduct).discount).toLocaleString("ru-RU") }}
                    </span>
                    <span v-if="((specialProduct).id == 1)" class="product-page__price-product__special-price__text">
                        скидка -{{ (specialProduct).discount }}%
                    </span>
                    ₽
                </div>
                <div class="product-page__count-product">
                    <button
                        class="product-page__btn_product_count"
                        @click="count <= 1 ? count = 1 : count--"
                        @mousedown="startTimerCount(0)"
                        @mouseup="clearTimerCount"
                    >
                        <svg class="icon_count">
                            <use :xlink:href="imagesUrl + 'images/icons/btn_count.svg#minus'"></use>
                        </svg>
                    </button>
                    <span class="product-page__count_product_number">{{ count }}</span>
                    <button
                        class="product-page__btn_product_count"
                        @click="count++"
                        @mousedown="startTimerCount(1)"
                        @mouseup="clearTimerCount"
                    >
                        <svg class="icon_count">
                            <use :xlink:href="imagesUrl + 'images/icons/btn_count.svg#plus'"></use>
                        </svg>
                    </button>
                </div>
                <button class="page-product__btn-basket" @click="addBasket">В корзину</button>
            </div>
        </section>
        <section class="product-desc__section">
            <h1 class="product-desc__title">{{ product.title }}</h1>
            <div class="product-desc__accordion">
                <ul id="my-accordion" class="accordionjs">
                    <li class="accordion__wrapper accordion__line">
                        <div class="accordion__title">
                            Описание
                            <svg>
                                <use :xlink:href="imagesUrl + 'images/icons/cross.svg#cross'"></use>
                            </svg>
                        </div>
                        <div class="accordion__body">
                            {{ productDesc.description }}
                        </div>
                    </li>
                    <li class="accordion__wrapper accordion__line">
                        <div class="accordion__title">
                            Состав
                            <svg>
                                <use :xlink:href="imagesUrl + 'images/icons/cross.svg#cross'"></use>
                            </svg>
                        </div>
                        <div class="accordion__body">
                            {{ productCompound.compound }}
                        </div>
                    </li>
                    <li class="accordion__wrapper">
                        <div class="accordion__title">
                            Характеристики
                            <svg>
                                <use :xlink:href="imagesUrl + 'images/icons/cross.svg#cross'"></use>
                            </svg>
                        </div>
                        <div class="accordion__body" >
                            <table class="product-desc__charact table">
                                <thead></thead>
                                <tbody>
                                    <tr class="product-desc__charact__tr">
                                        <th>Бренд</th>
                                        <td>{{ productCharacteristics.brand }}</td>
                                    </tr>
                                    <tr class="product-desc__charact__tr">
                                        <th>Содержит</th>
                                        <td>{{ productCharacteristics.shortCompound }}</td>
                                    </tr>
                                    <tr class="product-desc__charact__tr">
                                        <th>Энергетическая ценность в 100 г</th>
                                        <td>{{ productCharacteristics.calories }}</td>
                                    </tr>
                                    <tr class="product-desc__charact__tr">
                                        <th>Углеводы в 100 г</th>
                                        <td>{{ productCharacteristics.cardohydrates }}</td>
                                    </tr>
                                    <tr class="product-desc__charact__tr">
                                        <th>Стандарты производства</th>
                                        <td>{{ productCharacteristics.standart }}</td>
                                    </tr>
                                    <tr class="product-desc__charact__tr">
                                        <th>Срок годности</th>
                                        <td>{{ productCharacteristics.bestBeforeDate }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
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
            product: {},
            count: 1,
            mousedown: false,
            timerId: '',
            productDesc: {},
            productCompound: {},
            productCharacteristics: {}
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.fetchData();
                this.fetchDescProduct();
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
        },
        async fetchDescProduct() {
            try {
                let response = await fetch(this.imagesUrl + 'data/descProduct.json');
                let data = await response.json();
                let productDesc = data.productDesc;
                for (let productItem in productDesc) {
                    if (productDesc[productItem].id == this.productId) {
                        this.productDesc = productDesc[productItem]
                    }
                }
                let productCompound = data.productCompound;
                for (let productItem in productCompound) {
                    if (productCompound[productItem].id == this.productId) {
                        this.productCompound = productCompound[productItem]
                    }
                }
                let productCharacteristics = data.productCharacteristics;
                for (let productItem in productCharacteristics) {
                    if (productCharacteristics[productItem].id == this.productId) {
                        this.productCharacteristics = productCharacteristics[productItem]
                    }
                }
            } catch(err) {
                console.log(err.message);
            }
        },
        async addBasket() {
            let productBasket = {};
            let addNewProduct = true;
            try {
                for (let productItem in this.basket) {
                    let product = this.basket[productItem]
                    if (product.id === this.product.id) {
                        product.count += this.count;
                        addNewProduct = false;
                        break;
                    }
                }

                if (addNewProduct) {
                    let response = await fetch(this.imagesUrl +  'data/products.json');
                    let data = await response.json();
                    let allProducts = data.allProducts;
                    for (let productItem in allProducts) {
                        let product = allProducts[productItem];
                        if (product.id === this.product.id) {
                            productBasket = product;
                            productBasket.count = this.count;
                        }
                    }
                    this.basket.push(productBasket);
                }
                this.$emit('updateBasket', JSON.parse(JSON.stringify(this.basket)));
            } catch(err) {
                console.log(err.message);
            }
        },
        startTimerCount(typeFn) {
            this.mousedown = true;
            if (typeFn) {
                this.timerId = setTimeout(this.plusCountProduct, 500);
            } else {
                this.timerId = setTimeout(this.minusCountProduct, 500);
            }
        },
        clearTimerCount() {
            this.mousedown = false;
            clearTimeout(this.timerId);
        },
        minusCountProduct() {
            this.count <= 1 ? this.count = 1 : this.count--;
            if (this.mousedown) {
                this.timerId = setTimeout(this.minusCountProduct, 100);
            }
        },
        plusCountProduct() {
            this.count++;
            if (this.mousedown) {
                this.timerId = setTimeout(this.plusCountProduct, 100);
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