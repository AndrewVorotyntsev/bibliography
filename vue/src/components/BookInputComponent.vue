<template>
    <div class="border">
        <el-input class="input" placeholder="Автор" v-model="form.author" />
        <el-input class="input" placeholder="Инициалы автора" v-model="form.initials" />
        <el-input class="input" placeholder="Заглавие" v-model="form.title" />
        <el-input class="input" placeholder="Место издания" v-model="form.place" />
        <el-input class="input" placeholder="Издательство" v-model="form.publisher" />
        <el-input class="input" placeholder="Год издания" v-model="form.year" />
        <el-input class="input" placeholder="Количество страниц" v-model="form.pages" />
        <el-input class="input" placeholder="Дополнительные сведения" v-model="form.additionals" />
        <el-input class="input" placeholder="ISBN" v-model="form.isbn" />
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
  .border {
    padding: 3px;
    margin-bottom: 5px;
  }

  .input {
    margin-bottom: 5px;
  }
</style>
