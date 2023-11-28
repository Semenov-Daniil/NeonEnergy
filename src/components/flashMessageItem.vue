<template>
    <div
        class="flash_message_item"
        :class="{'success': message.type == 'success', 'error': message.type == 'error', }"
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
    mounted() {
        setTimeout(() => {
            this.$emit('remove', this.message.id)
        }, 2000)
    },
}
</script>

<style>

</style>