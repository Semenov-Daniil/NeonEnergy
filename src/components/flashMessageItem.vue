<template>
    <div
        class="flash_message_item"
        :class="{'success': message.type == 'success', 'error': message.type == 'error'}"
        v-show="showMessage || focusMessage"
        @focus="focusMessage = true"
    >
    {{ message.message }}
    </div>
</template>

<script>
export default {
    name: 'flash-message-item',
    props: {
        message: {
            type: Object
        }
    },
    data() {
        return {
            showMessage: true,
            focusMessage: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.showMessage = false;
        }, 3000)
    },
}
</script>

<style>

</style>