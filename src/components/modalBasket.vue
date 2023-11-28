<template>
    <div class="modal_wrapper" v-show="basketDialog" @click="$emit('update:basketDialog', false)">
        <div class="modal_content basket_modal_content" @click.stop>
            <header class="basket_modal_header">
                <h1 class="basket_title">КОРЗИНА ТОВАРОВ</h1>
                <button class="close_basket_btn" @click="$emit('update:basketDialog', false)">
                    <svg class="icon icon-cross">
                        <use xlink:href="images/icons/cross2.svg#cross"></use>
                    </svg>
                </button>
            </header>
            <main class="basket_main">
                <card-product-basket
                    v-for="product in basket"
                    :key="product.id"
                    :product="product"
                    @updateProduct="updateProduct"
                    @deleteProduct="deleteProduct"
                />
                <div v-if="!basket.length" class="not_products">
                    В корзине пока нет товаров
                </div>
            </main>
            <footer class="basket_modal_footer" v-if="basket.length">
                <div class="sum_products text--caps">
                    СУММА: <span class="sum_products_price">{{ sumProducts.toLocaleString("ru-RU") }}</span> ₽
                </div>
                <a href="" class="btn_place_order">Оформить заказ</a>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal-basket',
    props: {
        basket: {
            type: Array
        },
        basketDialog: {
            type: Boolean
        }
    },
    data () {
        return {
            flashMessages: sessionStorage.getItem("flashMessages"),
        }
    },
    methods: {
        updateProduct(event) {
            this.basket.forEach((product) => {
                if (product.id == event.id) {
                    product = event;
                }
            });
            this.$emit('update:basket', JSON.parse(JSON.stringify(this.basket)));
        },
        deleteProduct(event) {
            this.basket.forEach((product, index) => {
                if (product.id == event.id) {
                    this.basket.splice(index, 1);
                }
            });
            this.$emit('update:basket', JSON.parse(JSON.stringify(this.basket)));
            this.addFlashMessage();
        },
        addFlashMessage() {
            this.flashMessages.push({'type': 'error', 'message': 'Товар удален из корзины'});
        }
    },
    computed: {
        sumProducts() {
            let sum = 0;
            for(let product of this.basket) {
                sum += (product["speсial"].id == 1 ? (product.price / 100 * product["speсial"].discount) : product.price) * product.count;
            }
            return sum;
        }
    }
}
</script>

<style>

</style>