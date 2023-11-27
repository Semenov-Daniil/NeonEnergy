<template>
    <div class="flash_messages_wrapper flash_message_list">
        <flash-message-item
            v-for="(message, index) in messages"
            :key="index"
            :message="message"
            @remove="removeItem(message.id)"
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
            type: Array
        }
    },
    methods: {
        removeItem(id) {
            this.messages.forEach((message, index) => {
                if (message.id == id) {
                    console.log(message, index)
                    this.messages.splice(index, 1);
                }
            });
            this.$emit('update:messages', JSON.parse(JSON.stringify(this.messages)));
        }
    }
}
</script>

<style>

</style>