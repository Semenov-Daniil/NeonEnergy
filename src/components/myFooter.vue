<template>
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
</template>

<script>
export default {
    name: 'my-footer',
}
</script>

<style>

</style>