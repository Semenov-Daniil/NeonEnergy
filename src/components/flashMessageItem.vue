<template>
    <div
        class="flash_message_item"
        :class="{'success': message.type == 'success', 'error': message.type == 'error', 'd-none': !showMessage}"
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
        }
    },
    mounted() {
        setTimeout(() => {
            this.showMessage = false;
            this.$emit('removeFlash')
        }, 2000)
    },
}
</script>

<style>

</style>