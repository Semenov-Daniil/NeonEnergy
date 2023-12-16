<template>
    <main class="main main_about">
        <section class="section_delivery">
            <h1 class="text--caps about_title">ДОСТАВКА</h1>
            <div class="about_paragraph">
                <p>Мы доставляем заказы в любую точку России. Стоимость и сроки доставки зависят от региона, веса посылки и способа доставки.</p>
                <p>Стоимость рассчитывается автоматически и сразу включается в счет заказа.</p>
                <p>Бесплатная доставка осуществляется при заказе от 1000 ₽.</p>
            </div>
            <div class="about_list_wrapp">
                <h2 class="about_list_title">Доставка до пункта выдачи</h2>
                <ul class="about_list">
                    <li>Доставка до ПВЗ осуществляется службами Boxberry, ViaDelivery, Почта России; </li>
                    <li>Стоимость доставки от 120 ₽;</li>
                    <li>Срок доставки от 1 дня (для Санкт-Петергбурга);</li>
                    <li>Срок доставки от 2 дней (для остальных регионов).</li>
                </ul>
            </div>
        </section>
        <section class="section_payment">
            <h1 class="text--caps about_title">ОПЛАТА</h1>
            <div class="about_list_wrapp">
                <h2 class="about_list_title">Способы оплаты при оформлении заказа онлайн</h2>
                <ul class="about_list">
                    <li>Картой онлайн;</li>
                    <li>Системой быстрых платежей.</li>
                </ul>
            </div>
            <div class="about_list_wrapp">
                <h2 class="about_list_title">Способы оплаты при получении заказа</h2>
                <ul class="about_list">
                    <li>У курьера — наличными или картой;</li>
                    <li>В пунктах выдачи и постаматах — наличными или картой.</li>
                </ul>
            </div>
            <div class="about_paragraph">
                <h2 class="about_list_title">Как изменить способ оплаты заказа</h2>
                <p>Изменить способ оплаты нельзя. Вы можете отменить заказ и оформить его заново.</p>
            </div>
            <h2 class="about_list_title">Чек и подтверждение оплаты вы получите уже после получения заказа.</h2>
        </section>
        <section class="section_contact">
            <h1 class="text--caps about_title">НАШИ КОНТАКТЫ</h1>
            <div class="about_list_wrapp">
                <ul class="about_list_contact">
                    <li>
                        <h2 class="about_list_title">Телефон:</h2>
                        <a href="tel:89817406943">+7 (981) 740-69-43</a>
                    </li>
                    <li>
                        <h2 class="about_list_title">Почта:</h2>
                        <a href="mailto:neon@enrgy.shop">neon@enrgy.shop</a>
                    </li>
                    <li>
                        <h2 class="about_list_title">Соцсети:</h2>
                        <div class="about_list_socials">
                            <a href="#">
                                    <svg class="icon icon-vk">
                                        <use :xlink:href="imagesUrl + 'images/icons/social_icons.svg#icon-vk'"></use>
                                    </svg>
                                </a>
                            <a href="#">
                                    <svg class="icon icon-telegram">
                                        <use :xlink:href="imagesUrl + 'images/icons/social_icons.svg#icon-telegram'"></use>
                                    </svg>
                                </a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section class="section_info">
            <h1 class="text--caps about_title">ВАЖНАЯ ИНФОРМАЦИЯ</h1>
            <div class="about_list_wrapp">
                <ul class="about_list">
                    <li>Мы не просим и не принимаем деньги прямым переводом на карту или кошелек; </li>
                    <li>Скидка по промокоду действует только на товары и не распоространяется на доставку;</li>
                    <li>Скидки по промокоду не суммируются.</li>
                </ul>
            </div>
        </section>
        <section class="section_form_questions">
            <h1 class="text--caps about_title">ОСТАЛИСЬ ВОПРОСЫ?</h1>
            <div class="about_list_wrapp">
                <form action="#" id="form_questions" class="form_create_comment" @submit.prevent>
                    <div class="input_wrapper">
                        <input type="text" id="name" placeholder="" required autocapitalize="on" v-model="nameUser"/>
                        <label for="name">Ваше ФИО</label>
                    </div>
                    <div class="input_wrapper">
                        <input type="text" id="email" placeholder="" required autocapitalize="on" v-model="emailUser"/>
                        <label for="email">Ваш e-mail</label>
                    </div>
                    <div class="input_wrapper">
                        <textarea name="question" id="question" wrap="soft" placeholder="" rows="1" autocapitalize="on" required v-model="questionUser"></textarea>
                        <label for="question">Ваш вопрос</label>
                    </div>
                    <div class="checkbox_wrapper">
                        <input type="checkbox" id="confirm" required v-model="confirmUser">
                        <label for="confirm">Я согласен с политикой конфидециальности</label>
                    </div>
                    <button class="btn" type="sumbit" form="form_questions" @click="createQuestion">Отправить вопрос</button>
                </form>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    props: {
        basket: {
            type: Array
        },
        flashMessages: {
            type: Object
        }
    },
    data() {
        return {
            imagesUrl: '../',
            nameUser: '',
            emailUser: '',
            questionUser: '',
            confirmUser: false,
        }
    },
    methods: {
        createQuestion() {
            if (this.nameUser && this.emailUser && this.questionUser && this.confirmUser) {
                this.nameUser = '';
                this.emailUser = '';
                this.questionUser = '';
                this.confirmUser = false;
    
                this.$emit('createQuestion');
            }
        }
    },
    mounted() {
        window.scroll(0, 0);
    }
}
</script>

<style>

</style>