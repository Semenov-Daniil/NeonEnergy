<template>
    <main class="main main_catalog">
        <section class="section_catalog">
            <div class="catalog_search">
                <div class="searh_modal_content">
                    <input
                        class="search_input"
                        type="text"
                        placeholder="Поиск"
                        @focus="focusDialog = true"
                        @blur="focusDialog = false"
                        :value="search"
                        @input="$emit('update:search', ($event.target.value).trim())"
                        @keydown.enter="updateSearchTag()"
                    />
                    <button class="search_btn search_input_reset" v-show="search.length" @click="$emit('update:search', '')">
                        <svg class="icon icon-cross">
                            <use :xlink:href="imagesUrl + 'images/icons/cross2.svg#cross'"></use>
                        </svg>
                    </button>
                    <button href="#" class="search_btn search_btn_icon" @click="updateSearchTag()">
                        <svg class="icon icon-search">
                            <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-search'"></use>
                        </svg>
                    </button>
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
            <div class="catalog_wrapper">
                <div class="catalog_filters_wrapper">
                    <div class="filter_text" @click="$emit('update:modalFilter',true)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 14" class="icon icon_filter">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.786 2.21659C2.786 1.48208 3.38144 0.886637 4.11595 0.886637C4.85047 0.886637 5.44591 1.48208 5.44591 2.21659C5.44591 2.95111 4.85047 3.54655 4.11595 3.54655C3.38144 3.54655 2.786 2.95111 2.786 2.21659ZM1.96419 2.75094H0.312256V1.8643H1.9272C2.09597 0.807538 3.01165 0 4.11595 0C5.22025 0 6.13594 0.807538 6.3047 1.8643H14.6876V2.75094H6.26771C6.0286 3.717 5.15591 4.43319 4.11595 4.43319C3.07599 4.43319 2.2033 3.717 1.96419 2.75094ZM11.2504 4.82922C10.1783 4.82922 9.28393 5.59039 9.07828 6.6018H0.312256V7.48844H9.078C9.28311 8.50054 10.1778 9.2624 11.2504 9.2624C12.323 9.2624 13.2177 8.50054 13.4228 7.48844H14.6876V6.6018H13.4225C13.2169 5.59039 12.3225 4.82922 11.2504 4.82922ZM8.78566 12.2259H14.6876V11.3393H8.78538C8.57974 10.3279 7.6854 9.56672 6.61327 9.56672C5.54115 9.56672 4.6468 10.3279 4.44116 11.3393H0.312256V12.2259H4.44088C4.64599 13.238 5.54066 13.9999 6.61327 13.9999C7.68588 13.9999 8.58055 13.238 8.78566 12.2259ZM11.2504 5.71585C10.5159 5.71585 9.92044 6.3113 9.92044 7.04581C9.92044 7.78032 10.5159 8.37576 11.2504 8.37576C11.9849 8.37576 12.5804 7.78032 12.5804 7.04581C12.5804 6.3113 11.9849 5.71585 11.2504 5.71585ZM5.28332 11.7833C5.28332 11.0488 5.87876 10.4534 6.61327 10.4534C7.34779 10.4534 7.94323 11.0488 7.94323 11.7833C7.94323 12.5178 7.34779 13.1133 6.61327 13.1133C5.87876 13.1133 5.28332 12.5178 5.28332 11.7833Z"/>
                        </svg>
                        Фильтры
                    </div>
                    <div class="filters_container">
                        <div class="checkbox_wrapper" v-for="filter in filters.other" :key="filter.id">
                            <input type="checkbox" :id="'other' + filter.id" :checked="filter.value" @change="updateTags(filter, $event.target.checked)">
                            <label :for="'other' + filter.id">{{ filter.title }}</label>
                        </div>
                        <div class="filter_wrapper">
                            <div class="title_filter">
                                Цена
                            </div>
                            <div class="filter_price_input">
                                <div class="price_number">
                                    <label for="price_number_min">Min</label>
                                    <input
                                        class="input_price"
                                        type="text"
                                        id="price_number_min"
                                        v-model="minInputPrice"
                                        @keypress="isNumber"
                                        @blur="minPriceValid"
                                        @keydown.enter="minPriceValid"
                                    />
                                    ₽
                                </div>
                                <span class="separator"></span>
                                <div class="price_number">
                                    <label for="price_number_max">Max</label>
                                    <input
                                        class="input_price"
                                        type="text"
                                        id="price_number_max"
                                        v-model="maxInputPrice"
                                        @keypress="isNumber"
                                        @blur="maxPriceValid"
                                        @keydown.enter="maxPriceValid"
                                    />
                                    ₽
                                </div>
                            </div>
                            <div class="price_slider">
                                <div
                                    class="progress"
                                    :style="{
                                        left: (minRangePrice / maxValuePrice) * 100 + '%',
                                        right: 100 - (maxRangePrice / maxValuePrice) * 100 + '%'
                                    }"
                                ></div>
                                <div class="filter_price_range">
                                    <input
                                        type="range"
                                        class="range-min"
                                        :min="minValuePrice"
                                        :max="maxValuePrice"
                                        step="100"
                                        v-model="minRangePrice"
                                    />
                                    <input
                                        type="range"
                                        class="range-max"
                                        :min="minValuePrice"
                                        :max="maxValuePrice"
                                        step="100"
                                        v-model="maxRangePrice"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="filter_wrapper">
                            <div class="title_filter">
                                Бренд
                            </div>
                            <div class="filter_list">
                                <div class="checkbox_wrapper" v-for="filter in filters.brend" :key="filter.id">
                                    <input type="checkbox" :id="'brend' + filter.id" v-model="filter.value" @change="updateTags(filter, $event.target.checked)">
                                    <label :for="'brend' + filter.id">{{ filter.title }}</label>
                                </div>
                            </div>
                        </div>
                        <div class="filter_wrapper">
                            <div class="title_filter">
                                Содержит
                            </div>
                            <div class="filter_list">
                                <div class="checkbox_wrapper" v-for="filter in filters.compound" :key="filter.id">
                                    <input type="checkbox" :id="'compound' + filter.id" v-model="filter.value" @change="updateTags(filter, $event.target.checked)">
                                    <label :for="'compound' + filter.id">{{ filter.title }}</label>
                                </div>
                            </div>
                        </div>
                        <div class="filter_wrapper">
                            <div class="title_filter">
                                Вкус
                            </div>
                            <div class="filter_list">
                                <div class="checkbox_wrapper" v-for="filter in filters.taste" :key="filter.id">
                                    <input type="checkbox" :id="'taste' + filter.id" v-model="filter.value" @change="updateTags(filter, $event.target.checked)">
                                    <label :for="'taste' + filter.id">{{ filter.title }}</label>
                                </div>
                            </div>
                        </div>
                        <div class="filter_wrapper">
                            <div class="title_filter">
                                Объём
                            </div>
                            <div class="filter_list">
                                <div class="checkbox_wrapper" v-for="filter in filters.volume" :key="filter.id">
                                    <input type="checkbox" :id="'volume' + filter.id" v-model="filter.value" @change="updateTags(filter, $event.target.checked)">
                                    <label :for="'volume' + filter.id">{{ filter.title }}</label>
                                </div>
                            </div>
                        </div>
                        <div class="filter_wrapper">
                            <div class="title_filter">
                                Оценка
                            </div>
                            <div class="filter_list">
                                <div class="checkbox_wrapper" v-for="filter in filters.grade" :key="filter.id">
                                    <input type="checkbox" :id="'grade' + filter.id" v-model="filter.value" @change="updateGrade(filter), updateTags(filter, $event.target.checked)">
                                    <label :for="'grade' + filter.id">{{ filter.title }}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="catalog_partition"></div>
                <div class="catalog_products">
                    <div v-if="tags.length">
                        <div class="catalog_teg_wrapper">
                            <h2 class="title_cont_tag">Теги:</h2>
                            <div class="tegs_container">
                                <div
                                    class="teg_item"
                                    v-for="(tag, index) in tags"
                                    :key="index"
                                >
                                    <span>{{ tag.title }}</span>
                                    <button class="del_teg" @click="deleteTag(tag)">
                                        <svg class="icon icon-cross">
                                            <use :xlink:href="imagesUrl + 'images/icons/cross2.svg#cross'"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="catalog_products_list">
                        <card-product
                            v-for="product in products"
                            :key="product.id"
                            :product="product"
                            @addBasket="addBasket"
                            class="catalog_product"
                        />
                    </div>
                    <div class="catalog_pagination_wrapper" v-if="totalPage > 1">
                        <div class="catalog_pagination">
                            <div class="start_page" @click="page = 1" :class="{'opacity_page': page == 1}"></div>
                            <div class="prev_page" @click="page > 1 ? page-- : false" :class="{'opacity_page': page == 1}"></div>
                            <div>{{ minViewPage > 1 ? '...' : '' }}</div>
                            <div
                                v-for="pageNumber in pageList"
                                :key="pageNumber"
                                class="page"
                                :class="{
                                    'current_page': page === pageNumber
                                }"
                                @click="page = pageNumber"
                            >
                                {{ pageNumber }}
                            </div>
                            <div>{{ maxViewPage < totalPage ? '...' : '' }}</div>
                            <div class="next_page" @click="page < totalPage ? page++ : false;" :class="{'opacity_page': page == totalPage}"></div>
                            <div class="end_page" @click="page = totalPage" :class="{'opacity_page': page == totalPage}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    props: {
        basket: {
            type: Array
        },
        flashMessages: {
            type: Object
        },
        search: {
            type: String
        },
        filters: {
            type: Object
        },
        tags: {
            type: Array
        },
        modalFilter: {
            type: Boolean
        }
    },
    data() {
        return {
            imagesUrl: '../',

            minValuePrice: 0,
            maxValuePrice: 10000,

            minPrice: 0,
            maxPrice: 10000,
            minInputPrice: 0,
            maxInputPrice: 10000,
            minRangePrice: 0,
            maxRangePrice: 10000,

            products: [],

            totalPage: 10,
            page: 1,
            limit: 10,
            pageView: 7,

            searchData: [],
        }
    },
    methods: {
        isNumber(event) {
            let charCode = event.charCode;
            if (charCode < 48 || charCode > 57) {
                event.preventDefault();
            }
        },
        minPriceValid() {
            if (this.minInputPrice == '') {
                this.minInputPrice = this.minValuePrice;
            }

            this.minInputPrice = Number(this.minInputPrice);
        },
        maxPriceValid() {
            if (this.maxInputPrice == '') {
                this.maxInputPrice = this.minValuePrice;
            }

            this.maxInputPrice = Number(this.maxInputPrice);
        },
        async getProducts() {
            try {
                let response = await fetch(this.imagesUrl + './data/products.json');
                let data = await response.json();
                this.products = data.allProducts;
            } catch(err) {
                console.log(err.message);
            }
        },
        async addBasket(event) {
            let productBasket = {};
            let addNewProduct = true;
            try {
                for (let productItem in this.basket) {
                    let product = this.basket[productItem]
                    if (product.id === event) {
                        product.count++;
                        addNewProduct = false;
                        break;
                    }
                }

                if (addNewProduct) {
                    let response = await fetch(this.imagesUrl + './data/products.json');
                    let data = await response.json();
                    let allProducts = data.allProducts;
                    for (let productItem in allProducts) {
                        let product = allProducts[productItem];
                        if (product.id === event) {
                            productBasket = product;
                            productBasket.count = 1;
                        }
                    }
                    this.basket.push(productBasket);
                }
                this.$emit('updateBasket', JSON.parse(JSON.stringify(this.basket)));
            } catch(err) {
                console.log(err.message);
            }
        },
        updateTags(filter, value) {
            let tagsData = this.tags;
            if (value) {
                let push = true;
                for (let tag in tagsData) {
                    if (tagsData[tag].title == filter.title) {
                        push = false;
                        break;
                    }
                }

                if (push) {
                    tagsData.push(filter)
                }
            } else {
                tagsData.forEach((el, index) => {
                    if (el.title == filter.title) {
                        tagsData.splice(index, 1);
                    }
                })
            }
            this.$emit('update:tags', JSON.parse(JSON.stringify(tagsData)));
        },
        deleteTag(tag) {
            if (tag.id == 'min_price') {
                this.minPrice = this.minValuePrice;
            } else if(tag.id == 'max_price') {
                this.maxPrice = this.maxValuePrice;
            } else if(tag.id == 'search') {
                this.$emit('update:search', '');
            } else {
                tag.value = false;
            }
            this.updateTags(tag, false);
        },
        updateGrade(filter) {
            this.filters.grade.forEach((el) => {
                if (el.title != filter.title) {
                    this.deleteTag(el);
                }
            })
        },
        updatePriceTags(price) {
            let push = true;
            let tagsData = this.tags;
            tagsData.forEach((el) => {
                if (el.id == price.id) {
                    el.title = price.title;
                    push = false;
                }
            })

            if (push) {
                tagsData.push(price);
            }

            this.$emit('update:tags', JSON.parse(JSON.stringify(tagsData)));
        },
        updateSearchTag() {
            let push = true;
            let tagsData = this.tags;
            tagsData.forEach((el) => {
                if (el.id == 'search') {
                    el.title = this.search;
                    push = false;
                }
            })

            if (push) {
                tagsData.push({'id': 'search', 'title': this.search});
            }

            this.$emit('update:tags', JSON.parse(JSON.stringify(tagsData)));
        },
        changePage(pageNumber) {
            this.page = pageNumber;
        },
        featchTags() {
            for (let filterTeam in this.filters) {
                for (let filter of this.filters[filterTeam]) {
                    if (filter.value) {
                        this.updateTags(filter, filter.value);
                    }
                }
            }
        },
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
        },
        minInputPrice(newValue) {
            if (newValue < this.minValuePrice) {
                newValue = this.minValuePrice;
            }

            if (newValue > this.maxInputPrice) {
                newValue = this.maxInputPrice;
            }

            if (newValue != "") {
                this.minInputPrice = Number(newValue);
            } else {
                this.minInputPrice = newValue;
            }

            this.minPrice = Number(this.minInputPrice);
        },
        maxInputPrice(newValue) {
            if (newValue < this.minInputPrice) {
                newValue = this.minInputPrice;
            }

            if (newValue > this.maxValuePrice) {
                newValue = this.maxValuePrice;
            }

            if (newValue != "") {
                this.maxInputPrice = Number(newValue);
            } else {
                this.maxInputPrice = newValue;
            }

            this.maxPrice = Number(this.maxInputPrice)
        },
        minRangePrice(newValue) {
            if (newValue < this.minValuePrice) {
                newValue = this.minValuePrice;
            }

            if (newValue > this.maxRangePrice) {
                newValue = this.maxRangePrice;
            }

            this.minRangePrice = newValue;
            this.minPrice = Number(this.minRangePrice)
        },
        maxRangePrice(newValue) {
            if (newValue < this.minRangePrice) {
                newValue = this.minRangePrice;
            }

            if (newValue > this.maxValuePrice) {
                newValue = this.maxValuePrice;
            }

            this.maxRangePrice = newValue;
            this.maxPrice = Number(this.maxRangePrice);
        },
        minPrice(newValue) {
            this.minInputPrice = this.minRangePrice = this.minPrice = newValue;
            if (this.minPrice != this.minValuePrice) {
                this.updatePriceTags({'id': 'min_price', 'title': 'от ' + this.minPrice})
            } else {
                this.tags.forEach((el, index) => {
                    if (el.id == 'min_price') {
                        this.tags.splice(index, 1)
                    }
                })
            }
        },
        maxPrice(newValue) {
            this.maxInputPrice = this.maxRangePrice = this.maxPrice = newValue;
            if (this.maxPrice != this.maxValuePrice) {
                this.updatePriceTags({'id': 'max_price', 'title': 'до ' + this.maxPrice})
            } else {
                this.tags.forEach((el, index) => {
                    if (el.id == 'max_price') {
                        this.tags.splice(index, 1)
                    }
                })
            }
        }
    },
    mounted() {
        window.scroll(0, 0);
        this.minRangePrice = this.minInputPrice = this.minPrice = this.minValuePrice;
        this.maxRangePrice = this.maxInputPrice = this.maxPrice = this.maxValuePrice;
        this.getProducts();
        // this.featchTags();
    },
    computed: {
        minViewPage() {
            let result = 1;

            if (this.totalPage <= this.pageView) {
                result = 1;
            }

            if ((this.page + Math.floor(this.pageView/2)) < this.totalPage) {
                if (this.page <= Math.ceil(this.pageView/2)) {
                    result = 1;
                } else {
                    result = this.page - Math.floor(this.pageView/2);
                }
            } else {
                result = this.totalPage - this.pageView + 1;
            }

            return result;
        },
        maxViewPage() {
            let result = this.totalPage;

            if (this.totalPage <= this.pageView) {
                result = this.totalPage;
            }

            if ((this.page + Math.floor(this.pageView/2)) < this.totalPage) {
                if (this.page <= Math.ceil(this.pageView/2)) {
                    result = this.pageView;
                } else {
                    result = this.page + Math.floor(this.pageView/2);
                }
            } else {
                result = this.totalPage;
            }

            return result;
        },
        pageList() {
            let result = [];
            for (let i = this.minViewPage; i <= this.maxViewPage; i++) {
                result.push(i);
            }

            return result;
        }
    }
}
</script>

<style>

</style>