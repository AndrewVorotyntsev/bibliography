<template>
  <div class="book-input">
    <el-input class="book-input__field" placeholder="Автор" v-model="form.author" />
    <el-input class="book-input__field" placeholder="Инициалы автора" v-model="form.initials" />
    <el-input class="book-input__field" placeholder="Заглавие" v-model="form.title" />
    <el-input class="book-input__field" placeholder="Место издания" v-model="form.place" />
    <el-input class="book-input__field" placeholder="Издательство" v-model="form.publisher" />
    <el-input class="book-input__field" placeholder="Год издания" v-model="form.year" />
    <el-input class="book-input__field" placeholder="Количество страниц" v-model="form.pages" />
    <el-input class="book-input__field" placeholder="Дополнительные сведения" v-model="form.additionals" />
    <el-input class="book-input__field" placeholder="ISBN" v-model="form.isbn" />
  </div>

</template>

<script>
  export default {
    name: 'BookInputComponent',
    data () {
      return {
        form: {
          author: '',
          initials: '',
          title: '',
          place: '',
          publisher: '',
          year: '',
          pages: '',
          additionals: '',
          isbn: ''
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .book-input {
    padding: 3px;
    margin-bottom: 5px;
  }

  .book-input__field {
    margin-bottom: 5px;
  }
</style>
