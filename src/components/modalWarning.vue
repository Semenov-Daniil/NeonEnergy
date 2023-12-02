<<<<<<< HEAD
<template>
    <div class="modal_wrapper" v-show="warningDialog" @click="$emit('update:warningDialog', false)">
        <div
            class="modal_content warning_modal"
            @click.stop
        >
            <header class="warning_modal_header">
                <h1 class="warning_modal_title">К сожалению...</h1>
                <button class="close_modal_btn" @click="$emit('update:warningDialog', false)">
                    <svg class="icon icon-cross">
                        <use xlink:href="images/icons/cross2.svg#cross"></use>
                    </svg>
                </button>   
            </header>
            <main class="warning_modal_main">
                <p class="warning_modal_text">К сожалению, в настоящий момент, данный контент недоступен. Приносим свои извинения за неудобства.</p>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal-warning',
    props: {
        warningDialog: {
            type: Boolean
        }
    }
}
</script>

<style>

=======
<template>
    <div class="modal_wrapper" v-show="warningDialog" @click="$emit('update:warningDialog', false)">
        <div
            class="modal_content warning_modal"
            @click.stop
        >
            <header class="warning_modal_header">
                <h1 class="warning_modal_title">К сожалению...</h1>
                <button class="close_modal_btn" @click="$emit('update:warningDialog', false)">
                    <svg class="icon icon-cross">
                        <use xlink:href="images/icons/cross2.svg#cross"></use>
                    </svg>
                </button>   
            </header>
            <main class="warning_modal_main">
                <p class="warning_modal_text">К сожалению, в настоящий момент, данный контент недоступен. Приносим свои извинения за неудобства.</p>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal-warning',
    props: {
        warningDialog: {
            type: Boolean
        }
    }
}
</script>

<style>

>>>>>>> ed75404 (update)
</style>