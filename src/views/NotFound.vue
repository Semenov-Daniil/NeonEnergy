<template>
    <main class="main_notfound">
        <div class="notfound_wrapper">
            <div class="image_notfound">
                <img src="images/site/notFound.png" alt="NotFound">
            </div>
            <h2 class="title_notfound">СТРАНИЦА НЕ НАЙДЕНА</h2>
            <span class="line_notfound"/>
            <p class="notfound_text">Возможно, вы пытаетесь попасть на несуществующую страницу. Вернитесь на предыдущую страницу и попробуте заново.</p>
            <a href="#" class="btn_link_main" @click.prevent="$router.push('/')">Вернуться на Главную</a>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>