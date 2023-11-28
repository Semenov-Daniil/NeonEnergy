<template>
    <my-header
        :basket="basket"
        v-model:searchDialog="searchDialog"
        v-model:basketDialog="basketDialog"
    />
    <router-view
        v-model:basket="basket"
        v-model:flashMessages="flashMessages"
    ></router-view>
    <my-footer/>
    <noscript>
        <strong>We're sorry but NeonEnergy doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <modal-search
        v-model:search="search"
        v-model:searchDialog="searchDialog"
    />
    <modal-basket
        v-model:basket="basket"
        v-model:basketDialog="basketDialog"
        v-model:messages="flashMessages"
    />
    <flash-message-list
        v-model:messages="flashMessages"
        @remove="removeMessage"
    />
</template>

<script>
import myHeader from '@/components/myHeader.vue';
import myFooter from '@/components/myFooter.vue';
import modalSearch from '@/components/modalSearch.vue';
import modalBasket from '@/components/modalBasket.vue';
import flashMessageList from '@/components/flashMessageList.vue';

export default {
    components: {
        myHeader,
        myFooter,
        modalSearch,
        modalBasket,
        flashMessageList
    },
    data() {
        return {
            basket: [],
            search: '',
            searchDialog: false,
            basketDialog: false,
            flashMessages: {
                "lastMessage": 0,
                "messages": []
            }
        }
    },
    methods: {
        modalMenu(value) {
            let body = document.getElementsByTagName('body')[0];
            let className = 'modal-active';
            let marginSize = window.innerWidth - body.clientWidth;
            if (value) {
                body.style.marginRight = marginSize + "px";
                if (body.classList) {
                    body.classList.add(className);
                } else {
                    if (body.className.indexOf(className) === -1) {
                        body.className += ' ' + className;
                    }
                }
            } else {
                body.style.marginRight = "";
                if (body.classList) {
                    body.classList.remove(className);
                } else {
                    if (body.className.indexOf(className) !== -1) {
                        body.className = body.className.replace(className, '');
                    }
                }
            }
        },
        async removeMessage(id) {
            this.flashMessages.messages = this.flashMessages.messages.filter(message => message.id != id);
            // console.log(this.flashMessages.messages, id)
            console.log(id)
        }
    },
    watch: {
        basketDialog(value) {
            this.modalMenu(value);
        },
        searchDialog(value) {
            this.modalMenu(value);
        }
    }
}
</script>

<style>

</style>