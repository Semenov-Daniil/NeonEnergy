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
            <div class="catalog_teg_wrapper">
                <span>Теги:</span>
                <div class="tegs_container">
                    <div class="teg_item">
                        <span>Тег</span>
                        <button class="del_teg">
                            <svg class="icon icon-cross">
                                <use :xlink:href="imagesUrl + 'images/icons/cross2.svg#cross'"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="teg_item">
                        <span>Тег</span>
                        <button class="del_teg">
                            <svg class="icon icon-cross">
                                <use :xlink:href="imagesUrl + 'images/icons/cross2.svg#cross'"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="teg_item">
                        <span>Тег</span>
                        <button class="del_teg">
                            <svg class="icon icon-cross">
                                <use :xlink:href="imagesUrl + 'images/icons/cross2.svg#cross'"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="teg_item">
                        <span>Тег</span>
                        <button class="del_teg">
                            <svg class="icon icon-cross">
                                <use :xlink:href="imagesUrl + 'images/icons/cross2.svg#cross'"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="teg_item">
                        <span>Тег</span>
                        <button class="del_teg">
                            <svg class="icon icon-cross">
                                <use :xlink:href="imagesUrl + 'images/icons/cross2.svg#cross'"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="catalog_wrapper">
                <div class="catalog_filters_wrapper">
                    <div class="filter_text">
                        Фильтры
                        <svg class="icon icon-arrow">
                            <use :xlink:href="imagesUrl + 'images/icons/arrow2.svg#arrow'"></use>
                        </svg>
                    </div>
                    <div class="filters_container">
                        <div class="checkbox_wrapper">
                            <input type="checkbox" id="all_product">
                            <label for="all_product">Все товары</label>
                        </div>
                        <div class="checkbox_wrapper">
                            <input type="checkbox" id="new_product">
                            <label for="new_product">Новинки</label>
                        </div>
                        <div class="checkbox_wrapper">
                            <input type="checkbox" id="stok_product">
                            <label for="stok_product">Акции</label>
                        </div>
                        <div class="filter_wrapper">
                            <div class="title_filter">
                                Бренд
                            </div>
                            <div class="filter_list">
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="brend1">
                                    <label for="brend1">Акции</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="brend2">
                                    <label for="brend2">Акции</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="brend3">
                                    <label for="brend3">Акции</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="brend3">
                                    <label for="brend3">Акции</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="brend3">
                                    <label for="brend3">Акции</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="brend3">
                                    <label for="brend3">Акции</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="brend3">
                                    <label for="brend3">Акции</label>
                                </div>
                                <div class="checkbox_wrapper">
                                    <input type="checkbox" id="brend3">
                                    <label for="brend3">Акции</label>
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
                </div>
                <span class="catalog_partition"></span>
                <div></div>
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
        }
    }
}
</script>

<style>

</style>