<template>
    <div class="flash_messages_wrapper flash_message_list">
        <transition-group name="flip-list">
            <flash-message-item
                v-for="message in flashMessages"
                :key="message.id"
                :message="message"
            />
        </transition-group>
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
}
</script>

<style>
    .flip-list-move {
        transition: transform 0.1s linear;
    }

    .flip-list-enter-active,
    .flip-list-leave-active {
        transition: all 0.5s ease;
    }

    .flip-list-enter-from,
    .flip-list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

</style>