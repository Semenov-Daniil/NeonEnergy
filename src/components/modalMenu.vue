<template>
    <div class="modal_wrapper" v-show="wrapperModal" @click="$emit('update:modalMenu', false)">
        <transition name="slide-menu">
            <div class="modal_menu_content" @click.stop v-show="modalMenu">
                <nav class="modal_menu_nav">
                    <ul class="modal_menu_nav_list">
                        <li class="modal_menu_nav_item main_nav_item">
                            <a href="#" class="link_modal_menu">ЭНЕРГЕТИКИ</a>
                        </li>
                        <li class="modal_menu_nav_item main_nav_item">
                            <a href="#" class="link_modal_menu">О НАС</a>
                        </li>
                        <li class="modal_menu_nav_item main_nav_item">
                            <a href="#" class="link_modal_menu">КОНТАКТЫ</a>
                        </li>
                        <li class="modal_menu_nav_item ">
                            <a href="#" class="link_modal_menu">
                                <svg class="icon icon-user">
                                    <use xlink:href="images/icons/icons.svg#icon-user"></use>
                                </svg>
                                ЛИЧНЫЙ КАБИНЕТ
                            </a>
                        </li>
                        <li class="modal_menu_nav_item">
                            <a href="#" class="link_modal_menu">
                                <svg class="icon icon-favorites">
                                    <use xlink:href="images/icons/icons.svg#icon-favorites"></use>
                                </svg>
                                ИЗБРАННОЕ
                            </a>
                        </li>
                        <li class="modal_menu_nav_item">
                            <a href="#" class="link_modal_menu">
                                <svg class="icon icon-favorites">
                                    <use xlink:href="images/icons/icons.svg#icon-orders"></use>
                                </svg>
                                ЗАКАЗЫ
                            </a>
                        </li>
                        <li class="modal_menu_nav_item">
                            <a href="#" class="link_modal_menu">
                                <svg class="icon icon-favorites">
                                    <use xlink:href="images/icons/icons.svg#icon-basket"></use>
                                </svg>
                                КОРЗИНА
                            </a>
                        </li>
                    </ul>
                </nav>
                <button class="close_modal_btn close_modal_menu" @click="$emit('update:modalMenu', false)">
                    <svg class="icon icon-cross">
                        <use xlink:href="images/icons/cross2.svg#cross"></use>
                    </svg>
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'modal-menu',
    props: {
        modalMenu: {
            type: Boolean
        }
    },
    data() {
        return {
            wrapperModal: false
        }   
    },
    watch: {
        modalMenu(value) {
            if (value) {
                this.wrapperModal = value;
            } else {
                setTimeout(() => {
                    this.wrapperModal = value;
                }, 1000)
            }
        }
    }
}
</script>

<style>
    .slide-menu-enter-active,
    .slide-menu-leave-active {
        transition: all 1s ease;
    }

    .slide-menu-enter-from,
    .slide-menu-leave-to {
        transform: translateX(-110%);
    }
</style>