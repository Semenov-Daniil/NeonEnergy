<template>
    <div class="card-product">
        <a href="#" class="card-product__img-product" @click="navigateToProduct(product.title.replace(/\s/g, '-'), product.id)">
            <img :src="imagesUrl + 'images/energy_drink/' + product.img_title" alt="Jaguar Live">
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
                            <use :xlink:href="imagesUrl + 'images/icons/Star.svg#star'"></use>
                        </svg>
                    </li>
                </ul>
                <span>{{ product.rating }}</span>
            </div>
            <a href="#" class="card-product__title" @click="navigateToProduct(product.id, { title: product.title })">{{ product.title }} <span class="card-product__title-add">{{ product.volume }}</span></a>
        </div>
        <div class="card-product__footer">
            <div
                :class="{'spesial__price': ((specialProduct).id == 1)}"
                class="card-product__price-tag"
            >
                <div class="price-tag">
                    <span class="price--base">{{ (product.price).toLocaleString("ru-RU") }}</span>
                    <span class="price--spesial" v-if='((specialProduct).id == 1)'>{{ (product.price / 100 * (specialProduct).discount).toLocaleString("ru-RU") }}</span>
                </div>
                ₽
            </div>
            <button class="card-product__btn" @click="$emit('addBasket', product.id)">
                <svg class="icon card-product-icon-basket">
                    <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-basket'"></use>
                </svg>
                Купить
            </button>
        </div>
        <div :class="{'card-product__wishlist': true, 'wishlist--active': product.favorites}" @click="product.favorites = !product.favorites">
            <svg class="icon card-product-icon-favorites">
                <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-favorites'"></use>
            </svg>
        </div>
        <div v-if='(specialProduct).id != 0' class="card-product__special">
            {{ (specialProduct).id == 1 ? `-${(specialProduct).discount}%` : 'NEW'}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-product',
    props: {
        product: {
            type: Object,
        }
    },
    computed: {
        specialProduct() {
            return this.product["speсial"]
        }
    },
    methods: {
        navigateToProduct(title, id) {
            sessionStorage.setItem('productId', id)
            this.$router.push(`product/${title}`)
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