<template>
    <div class="basket_product">
        <div class="conteiner--image basket_image">
            <img src="images/energy_drink/Jaguar_Live.png" alt="Jaguar Live">
        </div>
        <div class="container_main_product">
            <div class="container_title">
                <a href="#" class="card-product__title pd-none">{{ product.title }} <span class="card-product__title-add">{{ product.volume }}</span></a>
                <div class="count_product">
                    <button class="btn_product_count">
                        <svg class="icon_count">
                            <use xlink:href="images/icons/btn_count.svg#minus"></use>
                        </svg>
                    </button>
                    <span class="count_product_number">1</span>
                    <button class="btn_product_count">
                        <svg class="icon_count">
                            <use xlink:href="images/icons/btn_count.svg#plus"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="basket_price">
                <div class="basket_product_price">
                    <div class="wrapper_price special_price_wrapper" :class="{'special_price_wrapper': product.spesialPrice}">
                        <span class="price--base">{{ product.price }}</span>
                        <span class="price--spesial" v-if="product.spesialPrice">{{ product.spesialPrice }}</span>
                    </div>
                    ₽
                </div>
                <button class="btn_product_delete">
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
    }
}
</script>

<style>

</style>