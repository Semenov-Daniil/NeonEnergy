<template>
    <div class="modal_wrapper" v-show="this.searchDialog" @click="$emit('update:searchDialog', false)">
        <div
            class="modal_content searh_modal"
            @click.stop
        >
        <div class="searh_modal_content" :class="{'modal_focus': focusDialog}">
            <input
                class="search_input"
                type="text"
                placeholder="Поиск на сайте NeonEnergy..."
                @focus="focusDialog = true"
                @blur="focusDialog = false"
                :value="search"
                @input="$emit('update:search', ($event.target.value).trim())"
            />
            <button class="search_btn search_input_reset" v-show="search.length" @click="$emit('update:search', '')">
                <svg class="icon icon-cross">
                    <use :xlink:href="imagesUrl + 'images/icons/cross2.svg#cross'"></use>
                </svg>
            </button>
            <a href="#" class="search_btn search_btn_icon">
                <svg class="icon icon-search">
                    <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-search'"></use>
                </svg>
            </a>
        </div>
            <ul class="search_tips" v-if="searchData.length">
                <li
                    class="search_tips_item"
                    v-for="(result, index) in searchData"
                    :key="index"
                    @click="$emit('update:search', result)"
                >
                    <a href="#" class="search_tips_item_title" @click.prevent>{{ result }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal-search',
    props: {
        search: {
            type: String, Number
        },
        searchDialog: {
            type: Boolean
        },
    },
    data() {
        return {
            focusDialog: false,
            searchData: [],
            imagesUrl: '../',
        }
    },
    methods: {
        async getTitleProducts() {
            try {
                let response = await fetch('./data/titleProducts.json');
                let data = await response.json();
                let reg = new RegExp(this.search,"i");
                for (let title of data.title) {
                    if (reg.test(title)) {
                        this.searchData.push(title)
                    }
                }
            } catch(err) {
                console.log(err.message);
            }
        },
    },
    watch: {
        search() {
            this.searchData = [];
            if(this.search.length) {
                this.getTitleProducts();
            }
        }
    }
}
</script>

<style>

</style>