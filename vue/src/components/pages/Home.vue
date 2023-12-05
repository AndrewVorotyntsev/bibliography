<template>
  <PageLayout>
    <div class="main-block">
      <div>
        <div class="main-block-content">
          <ListContainer
              :books="books"
              :type-list="typeOfList"
              :is-edit="$route.name===RouteNames.EDIT"
          />
          <div>
            <el-select v-model="typeOfList" placeholder="Выберите тип списка">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </div>
        </div>
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
    </div>
    <BookForm />
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
    </section>
  </PageLayout>
</template>

<script>
import {mapGetters} from "vuex";
import { helpModal } from "@/mixins/modals";
import ListContainer from "@/components/List.vue";
import BookForm from "@/components/BookForm.vue";
import {RouteNames} from "@/router/routes";
import PageLayout from "@/components/parts/PageLayout.vue";

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    BookForm,
    ListContainer
  },
  data () {
    return {
      typeOfList: 'div'
    }
  },
  computed: {
    ...mapGetters('books', [
      'getBooks'
    ]),
    RouteNames () {
      return RouteNames
    },
    books () {
      return this.getBooks
    },
    options () {
      return [{
        value: "ul",
        label: "Простой список"
      }, {
        value: "ol",
        label: "Нумерованный список"
      }, {
        value: "div",
        label: "По умолчанию"
      }]
    }
  }
}
</script>
