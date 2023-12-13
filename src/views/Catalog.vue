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
            </div>
            <div class="catalog_wrapper">
                <div class="catalog_filters_wrapper">
                    <div class="filter_text">
                        Фильтры
                    </div>
                    <div class="filters_container">
                        <div class="checkbox_wrapper" v-for="filter in filters.other" :key="filter.id">
                            <input type="checkbox" :id="'other' + filter.id" v-model="filter.value" @change="updateTags(filter, $event.target.checked)">
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
            tags: [],
            filters: {},
        }
    },
    methods: {
        async fetchFilter() {
            try {
                let response = await fetch(this.imagesUrl + './data/filterProducts.json');
                let data = await response.json();
                this.filters = data;
                this.filters.grade = [
                    {"id": 1, "title": "от 5★", "value": false},
                    {"id": 2, "title": "от 4★", "value": false},
                    {"id": 3, "title": "от 3★", "value": false}
                ];
                this.filters.other = [
                    {"id": 1, "title": "Новинки", "value": false},
                    {"id": 2, "title": "Акции", "value": false}
                ];
                this.filters.price = [
                    {"id": 'min_price', "title": "от " + this.minPrice, "value": false},
                    {"id": 'max_price', "title": "до " + this.maxPrice, "value": false}
                ];
            } catch(err) {
                console.log(err.message);
            }
        },
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
            if (value) {
                this.tags.push(filter)
            } else {
                this.tags.forEach((el, index) => {
                    if (el.title == filter.title) {
                        this.tags.splice(index, 1);
                    }
                })
            }
        },
        deleteTag(tag) {
            if (tag.id == 'min_price') {
                this.minPrice = this.minValuePrice;
            } else if(tag.id == 'max_price') {
                this.maxPrice = this.maxValuePrice;
            } else if(tag.id == 'search') {
                this.search = '';
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
            this.tags.forEach((el) => {
                if (el.id == price.id) {
                    el.title = price.title;
                    push = false;
                }
            })

            if (push) {
                this.tags.push(price);
            }
        },
        updateSearchTag() {
            let push = true;
            this.tags.forEach((el) => {
                if (el.id == 'search') {
                    el.title = this.search;
                    push = false;
                }
            })

            if (push) {
                this.tags.push({'id': 'search', 'title': this.search});
            }
        }
    },
    watch: {
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
        this.minRangePrice = this.minInputPrice = this.minPrice = this.minValuePrice;
        this.maxRangePrice = this.maxInputPrice = this.maxPrice = this.maxValuePrice;
        this.getProducts();
        this.fetchFilter();
    },
}
</script>

<style>

</style>