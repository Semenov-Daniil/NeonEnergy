<template>
    <div class="flash_messages_wrapper flash_message_list">
        <flash-message-item
            v-for="(message, index) in messages.messages"
            :key="index"
            :message="message"
            @remove="removeItem"
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
        messages: {
            type: Object
        }
    },
    methods: {
        removeItem(id) {
            // console.log(id);
            // this.messages.messages = this.messages.messages.filter(message => message.id != id);
            // console.log(this.messages.messages)
            // this.$emit('update:messages', JSON.parse(JSON.stringify(this.messages)));
            this.$emit('remove', id)
        }
    }
}
</script>

<style>

</style>