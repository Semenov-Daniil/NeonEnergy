<template>
    <div class="basket_product">
        <div class="conteiner--image basket_image">
            <img :src="imagesUrl + 'images/energy_drink/' + product.img_title" alt="Jaguar Live">
        </div>
        <div class="container_main_product">
            <div class="container_title">
                <a href="#" class="card-product__title pd-none">{{ product.title }} <span class="card-product__title-add">{{ product.volume }}</span></a>
                <div class="count_product">
                    <button
                        class="btn_product_count"
                        @click="minusCount()"
                        @mousedown="startTimerCount(0)"
                        @mouseup="clearTimerCount"
                    >
                        <svg class="icon_count">
                            <use :xlink:href="imagesUrl + 'images/icons/btn_count.svg#minus'"></use>
                        </svg>
                    </button>
                    <span class="count_product_number">{{ product.count }}</span>
                    <button
                        class="btn_product_count"
                        @click="plusCount()"
                        @mousedown="startTimerCount(1)"
                        @mouseup="clearTimerCount"
                    >
                        <svg class="icon_count">
                            <use :xlink:href="imagesUrl + 'images/icons/btn_count.svg#plus'"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="basket_price">
                <div class="product-page__price-product__wrapper" style="color: #000;">
                    <span :class="{'product-page__price-product__special-price': ((specialProduct).id == 1)}">
                        {{ (product.price).toLocaleString("ru-RU") }}
                    </span>
                    <span v-if="((specialProduct).id == 1)">
                        {{ (product.price / 100 * (specialProduct).discount).toLocaleString("ru-RU") }}
                    </span>
                    <span v-if="product.count > 1" class="price--count" style="white-space: nowrap;left: 0;">
                        {{ ((product["speсial"].id == 1 ? (product.price / 100 * product["speсial"].discount) : product.price)) }} * {{ product.count }}
                    </span>
                    ₽
                </div>
                <button class="btn_product_delete" @click="deleteProduct">
                    <svg class="icon_count icon_basket">
                        <use :xlink:href="imagesUrl + 'images/icons/basket.svg#basket'"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-product-basket',
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
        minusCount() {
            if (this.product.count > 1) {
                this.product.count--;
                this.$emit('updateProduct', JSON.parse(JSON.stringify(this.product)));
            } else if (this.product.count == 1) {
                this.deleteProduct();
            }

        },
        plusCount() {
            this.product.count++;
            this.$emit('updateProduct', JSON.parse(JSON.stringify(this.product)));
        },
        deleteProduct() {
            this.$emit('deleteProduct', JSON.parse(JSON.stringify(this.product)));
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
            this.product.count <= 1 ? this.product.count = 1 : this.product.count--;
            if (this.mousedown) {
                this.timerId = setTimeout(this.minusCountProduct, 200);
            }
        },
        plusCountProduct() {
            this.product.count++;
            if (this.mousedown) {
                this.timerId = setTimeout(this.plusCountProduct, 200);
            }
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