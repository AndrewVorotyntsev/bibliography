<template>
  <div>
    <component :is="typeList" class="list-container">
      <div v-if="isEdit">
        <li
            v-for="book in books"
            :key="book.id"
            :style="cssProps"
        >
          <div class="list-container__item">
          <span class="list-container__item__text">
            {{ book.title }}, {{ book.author }}
          </span>
            <div class="list-container__item__actions">
              <div>
                <el-button
                    v-if="isEdit"
                    type="danger"
                    icon="el-icon-delete"
                    size="mini"
                    circle
                    @click="() => deleteBook(book)"
                    class="list-container__item__actions__button"
                />
              </div>
              <RouterLink :to="{ name: RouteNames.EDIT_ID, params: { id: book.id } } ">
                <div class="list-container__item__actions__button">
                  <el-button
                      v-if="isEdit"
                      type="primary"
                      icon="el-icon-edit"
                      size="mini"
                      circle
                  />
                </div>
              </RouterLink>
            </div>
          </div>
        </li>
      </div>
      <div v-else >
        <li
            v-for="book in books"
            :key="book.id"
            :style="cssProps"
        >
          {{ book.title }}, {{ book.author }}
        </li>
      </div>
    </component>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {RouteNames} from "@/router/routes";

export default {
  name: "ListContainer",
  props: {
    books: {
      type: Array,
      default: () => ([])
    },
    typeList: {
      type: String,
      default: 'ul'
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    RouteNames () {
      return RouteNames
    },
    cssProps () {
      return this.typeList == "div" ? {
        'display': 'block'
      } : {}
    }
  },
  methods: {
    ...mapActions('books', [
      'removeBook'
    ]),
    deleteBook (book) {
      this.removeBook(book.id)
    }
  },
}
</script>

<style scoped lang="less">
.list-container {
  &__item {
    display: inline-flex;

    &__actions {
      display: inline-flex;

      &__button {
        margin: 2px;
      }
    }

    &__text {
      min-width: 200px;
    }
  }
}
</style>
