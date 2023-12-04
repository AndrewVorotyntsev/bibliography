<template>
  <div>
    <div class="main-block">
      <RouterLink v-if="$route.name === RouteNames.HOME" :to="{ name: RouteNames.EDIT } ">
        <div class="main-block-navigation">
          <el-button type="primary" class="main-block-navigation">Режим редактирования</el-button>
        </div>
      </RouterLink>
      <RouterLink v-if="$route.name !== RouteNames.HOME" :to="{ name: RouteNames.HOME } ">
        <div class="main-block-navigation">
          <el-button type="primary" class="main-block-navigation">На главную</el-button>
        </div>
      </RouterLink>
    </div>
    <BookForm />
  </div>
</template>

<script>
import BookForm from "@/components/BookForm.vue";
import {RouteNames} from "@/router/routes";

export default {
  name: 'EditBookPage',
  components: {
    BookForm
  },
  computed: {
    RouteNames () {
      return RouteNames
    }
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');

.main-block {
  display: flex;
  justify-content: center;

  &-navigation {
    text-align-last: center;

    & .el-button {
      font-family: 'Times New Roman', Times, serif;
      margin: 20px;
    }
  }
}
</style>