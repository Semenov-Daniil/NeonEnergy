const app = Vue.createApp({
    data() {
        return {
            newProduct: [
                {img: 'Jaguar_Live.png', rating: 4.5, },
                {img: 'Jaguar_Live.png', rating: 4.5, },
                {img: 'Jaguar_Live.png', rating: 4.5, },
                {img: 'Jaguar_Live.png', rating: 4.5, },
                {img: 'Jaguar_Live.png', rating: 4.5, },
            ]
        }
    },
    methods: {

    },
    computed: {

    },
    watch: {

    }
})

app.component('card-product', {
    template: `
    <div class="wrapper__card-product swiper-slide">
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
                            class="star 'full-star': (star <= product.rating)"
                        >
                            <svg viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <use xlink:href="images/icons/Star.svg#star"></use>
                            </svg>
                        </li>
                    </ul>
                    <span>{{ product.rating }}</span>
                </div>
                <a href="#" class="card-product__title">Jaguar Original <span class="card-product__title-add">0,5л</span></a>
            </div>
            <div class="card-product__footer">
                <div class="card-product__price-tag spesial__price">
                    <div class="price-tag">
                        <span class="price--base">99</span>
                        <span class="price--spesial">98,9</span>
                    </div>
                    ₽
                </div>
                <button class="card-product__btn">
                    <svg class="icon card-product-icon-basket">
                        <use xlink:href="images/icons/icons.svg#icon-basket"></use>
                    </svg>
                    Купить
                </button>
            </div>
            <div class="card-product__wishlist">
                <svg class="icon card-product-icon-favorites">
                    <use xlink:href="images/icons/icons.svg#icon-favorites"></use>
                </svg>
            </div>
            <div class="card-product__special">
                -50%
            </div>
        </div>
    </div>
    `,
    props: ['product'],
  })

app.mount('#app')