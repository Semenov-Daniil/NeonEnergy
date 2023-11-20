<template>
    <!-- <swiper-slide class="wrapper__card-product swiper-slide"> -->
        <div class="card-product">
            <a href="#" class="card-product__img-product">
                <img src="images/energy_drink/Jaguar_Live.png" alt="Jaguar Live">
            </a>
            <div class="card-product__body">
                <div class="wrapper__rating">
                    <ul class="product__rating">
                        <li
                            v-for="star in 5"
                            :key="star"
                            :class="{'star':true, 'full-star': (star <= product.rating)}"
                        >
                            <svg viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <use xlink:href="images/icons/Star.svg#star"></use>
                            </svg>
                        </li>
                    </ul>
                    <span>{{ product.rating }}</span>
                </div>
                <a href="#" class="card-product__title">{{ product.title }} <span class="card-product__title-add">{{ product.volume }}</span></a>
            </div>
            <div class="card-product__footer">
                <div :class="{'card-product__price-tag': true, 'spesial__price': product.spesialPrice && product.spesial}">
                    <div class="price-tag">
                        <span class="price--base">{{ product.price }}</span>
                        <span class="price--spesial" v-if='product.spesial'>{{ product.spesialPrice }}</span>
                    </div>
                    ₽
                </div>
                <button class="card-product__btn" @click="$emit('addCard', product.id)">
                    <svg class="icon card-product-icon-basket">
                        <use xlink:href="images/icons/icons.svg#icon-basket"></use>
                    </svg>
                    Купить
                </button>
            </div>
            <div :class="{'card-product__wishlist': true, 'wishlist--active': product.favorites}" @click="product.favorites = !product.favorites">
                <svg class="icon card-product-icon-favorites">
                    <use xlink:href="images/icons/icons.svg#icon-favorites"></use>
                </svg>
            </div>
            <div v-if='product.spesial' class="card-product__special">
            {{ product.spesialTitle }}
            </div>
        </div>
    <!-- </swiper-slide> -->
</template>

<script>
export default {
    name: 'card-product',
    props: {
        product: {
            type: Object,
        }
    }
}
</script>

<style>

</style>