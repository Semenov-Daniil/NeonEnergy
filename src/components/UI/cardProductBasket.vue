<template>
    <div class="basket_product">
        <div class="conteiner--image basket_image">
            <img :src="'images/energy_drink/' + product.img_title" alt="Jaguar Live">
        </div>
        <div class="container_main_product">
            <div class="container_title">
                <a href="#" class="card-product__title pd-none">{{ product.title }} <span class="card-product__title-add">{{ product.volume }}</span></a>
                <div class="count_product">
                    <button class="btn_product_count" @click="minusCount()">
                        <svg class="icon_count">
                            <use xlink:href="images/icons/btn_count.svg#minus"></use>
                        </svg>
                    </button>
                    <span class="count_product_number">{{ product.count }}</span>
                    <button class="btn_product_count" @click="plusCount()"> 
                        <svg class="icon_count">
                            <use xlink:href="images/icons/btn_count.svg#plus"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="basket_price">
                <div class="basket_product_price">
                    <div class="wrapper_price" :class="{'special_price_wrapper': (specialProduct).id == 1}">
                        <span class="price--base">{{ (product.price * product.count).toLocaleString("ru-RU") }}</span>
                        <span class="price--spesial" v-if="(specialProduct).id == 1">{{ ((product.price / 100 * (specialProduct).discount) * product.count).toLocaleString("ru-RU") }}</span>
                        <span class="price--count" v-if="product.count > 1">{{ ((product["speсial"].id == 1 ? (product.price / 100 * product["speсial"].discount) : product.price)) }} * {{ product.count }}</span>
                    </div>
                    ₽
                </div>
                <button class="btn_product_delete" @click="deleteProduct">
                    <svg class="icon_count icon_basket">
                        <use xlink:href="images/icons/basket.svg#basket"></use>
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
        }
    }
}
</script>

<style>

</style>