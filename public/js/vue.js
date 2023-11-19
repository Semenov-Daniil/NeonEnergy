const app = Vue.createApp({
    data() {
        return {
            newProduct: [
                {id: 1, img: 'Jaguar_Live.png', rating: 4.5, title: 'Jaguar Origin', volume: '0,5л', favorites: false, spesial: true, spesialPrice: 50, spesialTitle: '-50%', price: '99'},
                {id: 2,img: 'Jaguar_Live.png', rating: 3.5, title: 'Jaguar Origin', volume: '0,5л', favorites: false, price: '99'},
                {id: 3,img: 'Jaguar_Live.png', rating: 4.5, title: 'Jaguar Origin', volume: '0,5л', favorites: false, price: '99'},
                {id: 4,img: 'Jaguar_Live.png', rating: 4.5, title: 'Jaguar Origin', volume: '0,5л', favorites: false, price: '99'},
                {id: 5,img: 'Jaguar_Live.png', rating: 4.5, title: 'Jaguar Origin', volume: '0,5л', favorites: false, price: '99'},
            ],
            card: [
                {id: 1, img: 'Jaguar_Live.png', rating: 4.5, title: 'Jaguar Origin', volume: '0,5л', favorites: false, price: '99'},
                {id: 5, img: 'Jaguar_Live.png', rating: 4.5, title: 'Jaguar Origin', volume: '0,5л', favorites: false, price: '99'},
            ]
        }
    },
    methods: {
        addProductCard($event) {
            this.card.push(this.newProduct.find(product => product.id == $event));
        }
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
                <div :class="{'card-product__price-tag': true, 'spesial__price': product.spesial}">
                    <div class="price-tag">
                        <span class="price--base">{{ product.price }}</span>
                        <span class="price--spesial" v-if='product.spesial'>{{ product.spesialPrice }}</span>
                    </div>
                    ₽
                </div>
                <button class="card-product__btn" @click="addProductCard(product.id)">
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
    </div>
    `,
    props: ['product'],
    methods: {
        addProductCard(id) {
            this.$emit('add', id);
        }
    },
  });

app.component('my-header', {
    template: `
    <header class="header">
        <nav class="nav">
            <div class="nav__left">
                <ul class="nav__list text--caps">
                    <li class=""><a href="#">Энергетики</a></li>
                    <li class=""><a href="#">О нас</a></li>
                    <li class=""><a href="#">Контакты</a></li>
                </ul>

                <div class="mobile--menu">
                    <svg class="icon burger-menu">
                        <use xlink:href="images/icons/icons.svg#burger-menu"></use>
                    </svg>
                </div>
            </div>

            <div class="nav__right">
                <a class="nav__logo conteiner--image" href="#">
                    <img src="images/logo.png" alt="логотип Neon~Energy">
                </a>

                <ul class="nav__list__icon">
                    <li class="icon-search">
                        <a href="#" data-title="Поиск">
                            <svg class="icon icon-search">
                                <use xlink:href="images/icons/icons.svg#icon-search"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Личный кабинет">
                            <svg class="icon icon-user">
                                <use xlink:href="images/icons/icons.svg#icon-user"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Избранное">
                            <svg class="icon icon-favorites">
                                <use xlink:href="images/icons/icons.svg#icon-favorites"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Заказы">
                            <svg class="icon icon-favorites">
                                <use xlink:href="images/icons/icons.svg#icon-orders"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="item--border">
                        <a href="#" data-title="Корзина">
                            <svg class="icon icon-favorites">
                                <use xlink:href="images/icons/icons.svg#icon-basket"></use>
                            </svg>
                        </a>
                        <span v-if=''></span>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    `,
    props: ['cardNum'],
});

app.component('my-footer', {
    template: `
    <footer class="footer">
        <div class="footer__logo--left">
            <a class="footer__logo " href="#">
                <img src="images/logo-mini.png" alt="Neon~Energy">
            </a>
            <span class="title--company">by JAVALETS</span>
        </div>

        <div class="footer__widget__info">
            <div class="footer__widget">
                <div class="list__row">
                    <span class="list__title text--caps">МЫ В СОЦСЕТЯХ:</span>
                    <ul class="list__socials list__row">
                        <li>
                            <a href="#">
                                <svg class="icon icon-vk">
                                    <use xlink:href="images/icons/social_icons.svg#icon-vk"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg class="icon icon-telegram">
                                    <use xlink:href="images/icons/social_icons.svg#icon-telegram"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="#" class="widget__link">
                    <span class="link__title text--caps">ЭНЕРГЕТИКИ</span>
                    <svg class="icon-arrow">
                        <use xlink:href="images/icons/arrow.svg#arrow"></use>
                    </svg>
                </a>

            </div>
            <div class="footer__widget">
                <div class="list__row">
                    <span class="widget__aside__title text--caps">Контакты:</span>
                    <ul class="list__contacts list__column">
                        <li>
                            <a href="mailto:neon@enrgy.shop">neon@enrgy.shop</a>
                        </li>
                        <li>
                            <a href="tel:89817406942">+7 (981) 740-69-42</a>
                        </li>
                    </ul>
                </div>
                <a href="#" class="widget__link">
                    <span class="link__title text--caps">О нас</span>
                    <svg class="icon-arrow">
                        <use xlink:href="images/icons/arrow.svg#arrow"></use>
                    </svg>
                </a>
            </div>
            <div class="widget__link__mobile">
                <a href="#" class="widget__link widget__link__top">
                    <span class="link__title text--caps">ЭНЕРГЕТИКИ</span>
                    <svg class="icon-arrow">
                        <use xlink:href="images/icons/arrow.svg#arrow"></use>
                    </svg>
                </a>
                <a href="#" class="widget__link widget__link__botton">
                    <span class="link__title text--caps">О нас</span>
                    <svg class="icon-arrow">
                        <use xlink:href="images/icons/arrow.svg#arrow"></use>
                    </svg>
                </a>
            </div>
        </div>

        <div class="footer__logo--right">
            <a class="footer__logo" href="#">
                <img src="images/logo.png" alt="Neon~Energy">
            </a>
            <span class="title--shops">© 2023 NeonEnergy</span>
        </div>
    </footer>
    `,
    props: ['product'],
})

app.mount('#app')