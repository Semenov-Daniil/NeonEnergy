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
                    <a href="#" class="search_btn search_btn_icon">
                        <svg class="icon icon-search">
                            <use :xlink:href="imagesUrl + 'images/icons/icons.svg#icon-search'"></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="catalog_wrapper">
                <div class="catalog_filters_wrapper">
                    <div class="filter_text">
                        Фильтры
                    </div>
                    <div class="filters_container">
                        <div class="checkbox_wrapper">
                            <input type="checkbox" id="new_product" @change="updateTags({'title': 'Новинки', 'id': 'new_product'}, $event.target.checked)">
                            <label for="new_product">Новинки</label>
                        </div>
                        <div class="checkbox_wrapper">
                            <input type="checkbox" id="stok_product">
                            <label for="stok_product">Акции</label>
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
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_brend1">
                                    <label for="filter_brend1">Monster Energy</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_brend2">
                                    <label for="filter_brend2">Andrenaline Rush</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_brend3">
                                    <label for="filter_brend3">Burn</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_brend4">
                                    <label for="filter_brend4">Red Bull</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_brend5">
                                    <label for="filter_brend5">Tornado Energy</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_brend6">
                                    <label for="filter_brend6">Drive me</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_brend7">
                                    <label for="filter_brend7">Gorilla</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_brend8">
                                    <label for="filter_brend8">Flash up</label>
                                </div>
                            </div>
                        </div>
                        <div class="filter_wrapper">
                            <div class="title_filter">
                                Содержит
                            </div>
                            <div class="filter_list">
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_compound1">
                                    <label for="filter_compound1">Витамины</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_compound2">
                                    <label for="filter_compound2">Глюкоза</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_compound3">
                                    <label for="filter_compound3">Кофеин</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_compound4">
                                    <label for="filter_compound4">Таурин</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_compound5">
                                    <label for="filter_compound5">Сахароз</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_compound6">
                                    <label for="filter_compound6">Женьшень</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_compound7">
                                    <label for="filter_compound7">Гуарану</label>
                                </div>
                            </div>
                        </div>
                        <div class="filter_wrapper">
                            <div class="title_filter">
                                Вкус
                            </div>
                            <div class="filter_list">
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_taste_mango">
                                    <label for="filter_taste_mango">Манго</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_taste_classic">
                                    <label for="filter_taste_classic">Классический</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_taste_tropic">
                                    <label for="filter_taste_tropic">Тропический</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_taste_apple">
                                    <label for="filter_taste_apple">Яблоко</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_taste_tonic">
                                    <label for="filter_taste_tonic">Тоник</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_taste_origin">
                                    <label for="filter_taste_origin">Оригинальный</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_taste_mint">
                                    <label for="filter_taste_mint">Мята</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_taste_strawberry">
                                    <label for="filter_taste_strawberry">Клубника</label>
                                </div>
                            </div>
                        </div>
                        <div class="filter_wrapper">
                            <div class="title_filter">
                                Объём
                            </div>
                            <div class="filter_list">
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_volume_2l">
                                    <label for="filter_volume_2l">2л</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_volume_1.5l">
                                    <label for="filter_volume_1.5l">1.5л</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_volume_1l">
                                    <label for="filter_volume_1l">1л</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_volume_0.5l">
                                    <label for="filter_volume_0.5l">0.5л</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_volume_0.25l">
                                    <label for="filter_volume_0.25l">0.25л</label>
                                </div>
                            </div>
                        </div>
                        <div class="filter_wrapper">
                            <div class="title_filter">
                                Оценка
                            </div>
                            <div class="filter_list">
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_grade_5">
                                    <label for="filter_grade_5">5.0</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_grade_4">
                                    <label for="filter_grade_4">от 4.0</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="filter_grade_3">
                                    <label for="filter_grade_3">от 3.0</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn">Применить</button>
                </div>
                <div class="catalog_partition"></div>
                <div class="catalog_products">
                    <div v-if="tegs.length">
                        <div class="catalog_teg_wrapper">
                            <span>Теги:</span>
                            <div class="tegs_container">
                                <div
                                    class="teg_item"
                                    v-for="(teg, index) in tegs"
                                    :key="index"
                                >
                                    <span>{{ teg.title }}</span>
                                    <button class="del_teg">
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
            tegs: [],
            filters: [
                {'id': 'new_products', 'title': 'Новинки', 'value': false},
                {'id': 'stock_products', 'title': 'Акции', 'value': false},
            ],
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
        updateTags(teg, value) {
            if (value) {
                this.tegs.push(teg)
            } else {
                this.tegs.forEach((el, index) => {
                    if (el.id == teg.id) {
                        this.tegs.splice(index, 1);
                    }
                })
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
        },
        maxPrice(newValue) {
            this.maxInputPrice = this.maxRangePrice = this.maxPrice = newValue;
        }
    },
    mounted() {
        this.minRangePrice = this.minInputPrice = this.minPrice = this.minValuePrice;
        this.maxRangePrice = this.maxInputPrice = this.maxPrice = this.maxValuePrice;
        this.getProducts();
    },
}
</script>

<style>

</style>