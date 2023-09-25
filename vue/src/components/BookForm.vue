<template>
  <div class="book-input">
    <el-input v-model="form.author" placeholder="Автор" />
    <el-input v-model="form.initials" placeholder="Инициалы автора" />
    <el-input v-model="form.title" placeholder="Заглавие" />
    <el-input v-model="form.place" placeholder="Место издания" />
    <el-input v-model="form.publisher" placeholder="Издательство" />
    <el-input v-model="form.year" placeholder="Год издания" />
    <el-input v-model="form.pages" placeholder="Количество страниц" />
    <el-input v-model="form.additionals" placeholder="Дополнительные сведения" />
    <el-input v-model="form.isbn" placeholder="ISBN" />
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

  .book-input .el-input {
    margin-bottom: 5px;
  }
</style>
