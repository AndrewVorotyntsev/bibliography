<template>
  <div class="list-container__wrapper">
    <Component :is="typeList" class="list-container">
      <li
        v-for="book in visibleBooks"
        :key="book.id"
        :style="cssProps"
      >
        <div v-if="isEdit" class="list-container__item">
          <span class="list-container__item__text">
            {{ book.title }}, {{ book.authors }}
          </span>
          <div class="list-container__item__actions">
            <ElButton
                v-if="book.isVisible"
                type="primary"
                icon="el-icon-view"
                size="mini"
                circle
                class="list-container__item__actions__button"
                @click="() => hideBook(book)"
            />
            <ElButton
                v-else
                type="danger"
                icon="el-icon-view"
                size="mini"
                circle
                class="list-container__item__actions__button"
                @click="() => hideBook(book)"
            />
            <RouterLink :to="{ name: RouteNames.BOOK_EDIT, params: { id: book.id } } ">
              <div class="list-container__item__actions__button">
                <ElButton
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  circle
                />
              </div>
            </RouterLink>
            <ElButton
              type="danger"
              icon="el-icon-delete"
              size="mini"
              circle
              class="list-container__item__actions__button"
              @click="() => deleteBook(book)"
            />
          </div>
        </div>
        <template v-else-if="book.isVisible">
          {{ book.title }}, {{ book.authors }}
        </template>
      </li>
    </component>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";
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
  data() {
    return {
      visibleBooks: this.books,
    };
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
  mounted() {
    if (!this.isEdit) {
      this.visibleBooks = this.books.filter((book) => book.isVisible);
    }
  },
  methods: {
    ...mapActions('books', [
      'removeBook'
    ]),
    ...mapMutations('books', [
      'editBook'
    ]),
    deleteBook (book) {
      this.removeBook(book.id)
    },
    hideBook (book) {
      book.isVisible = !book.isVisible
      this.editBook(book)
    }
  }
}
</script>

<style scoped lang="less">
.list-container {
  &__wrapper {
    padding: 10px;
  }

  &__item {
    display: flex;

    &__text {
      flex: 1;
    }

    &__actions {
      display: flex;

      &__button {
        margin: 2px;
      }
    }
  }
}
</style>
