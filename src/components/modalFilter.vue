<template>
    <div class="modal_wrapper" v-show="wrapperModal" @click="$emit('update:modalFilter', false)">
        <transition name="slide-menu">
            <div class="modal_menu_content modal_filter" @click.stop v-show="modalFilter">
                <div class="filter_text">
                    Фильтры
                </div>
                <div class="catalog_filters_wrapper">
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
                <button class="close_modal_btn close_modal_menu" @click="$emit('update:modalFilter', false)">
                    <svg class="icon icon-cross">
                        <use :xlink:href="imagesUrl + 'images/icons/cross2.svg#cross'"></use>
                    </svg>
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'modal-filter',
    props: {
        modalFilter: {
            type: Boolean
        },
        filters: {
            type: Object
        },
        tags: {
            type: Array
        },
    },
    data() {
        return {
            wrapperModal: false,
            imagesUrl: '../',
            minValuePrice: 0,
            maxValuePrice: 10000,

            minPrice: 0,
            maxPrice: 10000,
            minInputPrice: 0,
            maxInputPrice: 10000,
            minRangePrice: 0,
            maxRangePrice: 10000,
        }
    },
    methods: {
        async fetchFilter() {
            try {
                let response = await fetch(this.imagesUrl + './data/filterProducts.json');
                let data = await response.json();
                let filtersData = data;
                filtersData.grade = [
                    {"id": 1, "title": "от 5★", "value": false},
                    {"id": 2, "title": "от 4★", "value": false},
                    {"id": 3, "title": "от 3★", "value": false}
                ];
                filtersData.other = [
                    {"id": 1, "title": "Новинки", "value": false},
                    {"id": 2, "title": "Акции", "value": false}
                ];
                filtersData.price = [
                    {"id": 'min_price', "title": "от " + this.minPrice, "value": false},
                    {"id": 'max_price', "title": "до " + this.maxPrice, "value": false}
                ];

                this.$emit('update:filters', JSON.parse(JSON.stringify(filtersData)));
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
            let tagsData = this.tags;
            if (value) {
                tagsData.push(filter)
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
        },
        modalFilter(value) {
            if (value) {
                this.wrapperModal = value;
            } else {
                setTimeout(() => {
                    this.wrapperModal = value;
                }, 1000)
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