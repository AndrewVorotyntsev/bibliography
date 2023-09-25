<template>
  <div class="book-input">
    <el-input v-model="form.author" class="book-input__field" placeholder="Автор" />
    <el-input v-model="form.initials" class="book-input__field" placeholder="Инициалы автора" />
    <el-input v-model="form.title" class="book-input__field" placeholder="Заглавие" />
    <el-input v-model="form.place" class="book-input__field" placeholder="Место издания" />
    <el-input v-model="form.publisher" class="book-input__field" placeholder="Издательство" />
    <el-input v-model="form.year" class="book-input__field" placeholder="Год издания" />
    <el-input v-model="form.pages" class="book-input__field" placeholder="Количество страниц" />
    <el-input v-model="form.additionals" class="book-input__field" placeholder="Дополнительные сведения" />
    <el-input v-model="form.isbn" class="book-input__field" placeholder="ISBN" />
    <el-button type="primary" @click="() => save()">Сохранить</el-button>
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
    },
    methods: {
      save() {
        console.log(this.form)
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
