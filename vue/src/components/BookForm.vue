<template>
  <div class="book-form">
    <div class="book-form__input">
      <el-select v-model="form.type" placeholder="Выберите тип источника">
        <el-option
          v-for="item in typeOptions" 
          :key="item.value" 
          :label="item.label" 
          :value="item.value" 
        />
      </el-select>
    </div>
    <div v-if="form.type !== 'web' && form.type !== ''" class="book-form__input">
      <span class="book-form__input__label">Автор</span>
      <el-input v-model="form.author" placeholder="Укажите автора"/>
    </div>
    <div v-if="form.type !== 'web' && form.type !== ''" class="book-form__input">
      <span class="book-form__input__label">Инициалы автора</span>
      <el-input v-model="form.initials" placeholder="Укажите инициалы автора" />
    </div>
    <div v-if="form.type !== ''" class="book-form__input">
      <span class="book-form__input__label">Заглавие</span>
      <el-input v-model="form.title" placeholder="Введите заглавие" />
    </div>
    <div v-if="form.type === 'book' || form.type === 'abstract' || form.type === 'articleBook'" class="book-form__input">
      <span class="book-form__input__label">Город</span>
      <el-input v-model="form.city" placeholder="Укажите город" />
    </div>
    <div v-if="form.type === 'book' || form.type === 'articleBook'" class="book-form__input">
      <span class="book-form__input__label">Издательство</span>
      <el-input v-model="form.publisher" placeholder="Укажите издательство" />
    </div>
    <div v-if="form.type !== 'web' && form.type !== ''" class="book-form__input">
      <span class="book-form__input__label">Год издания</span>
      <el-input v-model="form.year" placeholder="Введите год издания" />
    </div>
    <div v-if="form.type === 'articleBook' || form.type === 'articleMagazine'" class="book-form__input">
      <span class="book-form__input__label">Страницы</span>
      <el-input v-model="form.pages" placeholder="Укажите количество страницы" />
    </div>
    <div v-if="form.type === 'book' || form.type === 'abstract'" class="book-form__input">
      <span class="book-form__input__label">Количество страниц</span>
      <el-input v-model="form.pagesNum" placeholder="Укажите количество страницы" />
    </div>
    <div v-if="form.type === 'book'" class="book-form__input">
      <span class="book-form__input__label">ISBN</span>
      <el-input v-model="form.isbn" placeholder="ISBN" />
    </div>
    <div v-if="form.type === 'book'" class="book-form__input">
      <span class="book-form__input__label">Номер издания</span>
      <el-input v-model="form.editionNum" placeholder="Укажите номер издания" />
    </div>
    <div v-if="form.type === 'book'" class="book-form__input">
      <span class="book-form__input__label">Тип книги</span>
      <el-input v-model="form.typeBook" placeholder="Тип книги" />
    </div>
    <div v-if="form.type === 'abstract'" class="book-form__input">
      <span class="book-form__input__label">Научное звание автора</span>
      <el-input v-model="form.authorTitle" placeholder="Укажите научное звание автора" />
    </div>
    <div v-if="form.type === 'abstract'" class="book-form__input">
      <span class="book-form__input__label">Научный руководитель</span>
      <el-input v-model="form.supervisor" placeholder="Научный руководитель" />
    </div>
    <div v-if="form.type === 'abstract'" class="book-form__input">
      <span class="book-form__input__label">Университет</span>
      <el-input v-model="form.university" placeholder="Университет" />
    </div>
    <div v-if="form.type === 'articleMagazine'" class="book-form__input">
      <span class="book-form__input__label">Номер выпуска журнала</span>
      <el-input v-model="form.magazineNum" placeholder="Укажите номер выпуска журнала" />
    </div>
    <div v-if="form.type === 'web' || form.type === 'articleWeb'" class="book-form__input">
      <span class="book-form__input__label">URL сайта</span>
      <el-input v-model="form.url" placeholder="URL сайта" />
    </div>
    <div v-if="form.type === 'web' || form.type === 'articleWeb'" class="book-form__input">
      <span class="book-form__input__label">Дата обращения</span>
      <el-input v-model="form.viewDate" placeholder="Дата обращения" />
    </div>
    <el-button v-if="form.type !== ''" type="primary" icon="save" @click="() => save()">Сохранить</el-button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'BookForm',
  data () {
    return {
      form: {
        author: '',
        initials: '',
        title: '',
        city: '',
        publisher: '',
        year: '',
        pages: '',
        pagesNum: '',
        isbn: '',
        editionNum: '',
        typeBook: '',
        authorTitle: '',
        supervisor: '',
        university: '',
        magazineNum: '',
        url: '',
        viewDate: '',
        type: ''
      }
    }
  },
  computed: {
    ...mapGetters('books', [
      'getBook',
    ]),
    typeOptions () {
      return [{
        value: "book",
        label: "Книга с одним автором"
      }, {
        value: "abstract",
        label: "Диссертации и авторефераты"
      }, {
        value: "articleBook",
        label: "Статья из книги"
      }, {
        value: "articleMagazine",
        label: "Сататья из журнала"
      }, {
        value: "web",
        label: "Cайты в сети"
      }, {
        value: "articleWeb",
        label: "Статья с сайта"
      }]
    }
  },
  methods: {
    ...mapMutations('books', [
      'addBook',
      'editBook'
    ]),
    save () {
      let id = this.$route.params.id
      if (id !== undefined) {
        this.editBook(id)
      } else {
        this.addBook({...this.form});
      }
    },
    loadBook(id) {
      return this.getBook(id)
    },
    // Обновить форму значениями книги с bookId
    updateFormWithBook(bookId) {
      if (bookId !== undefined) {
        let book = this.loadBook(Number(bookId))
        if (book !== undefined) {
          this.form = book
          return
        }
      }
      // Если книга не найдена, но требуется обновить форму,
      // то она обновляется дефолтным значением
      this.form = {
        author: '',
        initials: '',
        title: '',
        city: '',
        publisher: '',
        year: '',
        pages: '',
        pagesNum: '',
        isbn: '',
        editionNum: '',
        typeBook: '',
        authorTitle: '',
        supervisor: '',
        university: '',
        magazineNum: '',
        url: '',
        viewDate: '',
        type: ''
      }
    }
  },
  watch: {
    '$route'(to) {
      // При измении навигации обновлять значение формы
      let id = to.params.id
      this.updateFormWithBook(id)
    }
  },
  created () {
    // Перезагружать форму после обновления страницы значениями из хранилища
    let id = this.$route.params.id
    this.updateFormWithBook(id)
  }
}
</script>

<style scoped lang="less">
.book-form {
  padding: 3px;
  margin-bottom: 5px;

  &__input {
    margin-bottom: 5px;
    text-align: center;
    padding-left: 20%;
    padding-right: 20%;

    &__label {
      display: flex;
    }
  }
}
</style>
