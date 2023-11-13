<template>
    <div class="wrapper__card-product swiper-slide">
        <div class="card-product">
            <a href="#" class="card-product__img-product">
                <img src="images/energy_drink/Jaguar_Live.png" alt="Jaguar Live">
            </a>
            <div class="card-product__body">
                <ul class="card-product__rating">
                    <li class="star full-star">
                        <svg viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <use xlink:href="images/icons/Star.svg#star"></use>
                        </svg>
                    </li>
                    <li class="star full-star">
                        <svg viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <use xlink:href="images/icons/Star.svg#star"></use>
                        </svg>
                    </li>
                    <li class="star full-star">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <use xlink:href="images/icons/Star.svg#star"></use>
                        </svg>
                    </li>
                    <li class="star full-star">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <use xlink:href="images/icons/Star.svg#star"></use>
                        </svg>
                    </li>
                    <li class="star">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <use xlink:href="images/icons/Star.svg#star"></use>
                        </svg>
                    </li>
                </ul>
                <a href="#" class="card-product__title">Jaguar Original <span class="card-product__title-add">0,5л</span></a>
            </div>
            <div class="card-product__footer">
                <div class="card-product__price-tag">
                    <span class="card-product__price-base">99 ₽</span>
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'cars-product',
    props: {
        product: {
            type: Object,
        }
    }
}
</script>

<style>

</style>