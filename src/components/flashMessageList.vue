<template>
    <div class="flash_messages_wrapper flash_message_list">
        <flash-message-item
            v-for="(message, index) in flashMessages"
            :key="index"
            :message="message"
            @removeFlash="$emit('removeFlash')"
        />
    </div>
</template>

<script>
import flashMessageItem from '@/components/flashMessageItem.vue'

export default {
    name: 'flash-message',
    components: {
        flashMessageItem,
    },
    props: {
        flashMessages: {
            type: Array
        }
    },
    methods: {

    }
}
</script>

<style>

</style>