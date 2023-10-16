const booksLocalStorageKey = 'books'

export default {
  namespaced: true,
  state: {
    books: []
  },
  getters: {
    // Получить список книг
    getBooks: (state) => state.books,
    // Получение книги по индексу
    getBook: (state) => (id) => state.books.find((book) => book.id == id)
  },
  mutations: {
    // Инициализация хранилища
    // Необходимо вызывать в методе beforeCreate() в экземпляре Vue
    initialiseStore(state) {
			if(localStorage.getItem(booksLocalStorageKey)) {
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem(booksLocalStorageKey)))
				);
			}
		},
    // Записать книги
    setBooks: (state, payload) => {
      localStorage.setItem(booksLocalStorageKey, JSON.stringify(payload))
      state.books = payload
    },
    // Добавление книги
    addBook: (state, payload) => {
      let localBooks = localStorage.getItem(booksLocalStorageKey)
      let localArrayBooks = JSON.parse(localBooks)
      localArrayBooks.push(payload)
      localStorage.setItem(booksLocalStorageKey, JSON.stringify(localArrayBooks))
      state.books.push(payload)
    },
    // Удаление книги по индексу
    removeBook: (state, payload) => {
      let localBooks = localStorage.getItem(booksLocalStorageKey)
      let localArrayBooks = JSON.parse(localBooks)
      const objWithIdIndex = state.books.findIndex((book) => book.id === payload);
      if (objWithIdIndex > -1) {
        state.books.splice(objWithIdIndex, 1);
        localArrayBooks.splice(objWithIdIndex, 1);
      }
      localStorage.setItem(booksLocalStorageKey, JSON.stringify(localArrayBooks))
    },
    // Редактирование книги
    editBook: (state, payload) => {
      let localBooks = localStorage.getItem(booksLocalStorageKey)
      let localArrayBooks = JSON.parse(localBooks)
      const objWithIdIndex = state.books.findIndex((book) => book.id === payload);
      if (objWithIdIndex > -1) {
        state.books.splice(objWithIdIndex, 1, payload);
        localArrayBooks.splice(objWithIdIndex, 1, payload);
      }
      localStorage.setItem(booksLocalStorageKey, JSON.stringify(localArrayBooks))
    }
  },
  actions: {
    // Добавление книги
    addBook: (store, payload) => new Promise(() => {
      store.commit('addBook', payload)
    }),
    // Удаление книги
    removeBook: (store, payload) => new Promise(() => {
      store.commit('removeBook', payload)
    }),
    // Редактирование книги
    editBook: (store, payload) => new Promise(() => {
      store.commit('editBook', payload)
    })
  }
}