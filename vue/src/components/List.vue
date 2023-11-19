<template>
  <div>
    <component :is="typeList">
      <li
        v-for="book in books" 
        :key="book.id" 
        :style="cssProps"
      >
        {{ book.title }}, {{ book.author }}

        <el-button
            v-if="isEdit"
            type="danger"
            icon="el-icon-delete"
            circle
            @click="() => deleteBook(book)"
        />
        <RouterLink :to="{ name: RouteNames.EDIT_ID, params: { id: book.id } } ">
          <el-button
              v-if="isEdit"
              type="primary"
              icon="el-icon-edit"
              circle
          />
        </RouterLink>
      </li>
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
    RouteNames() {
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
