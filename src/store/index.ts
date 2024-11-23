import { products as dummyProducts } from '@/constant/dummy'
import { type InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, type ActionContext } from 'vuex'

export interface Product {
  id: number
  name: string
  price: number
  description: string
  image?: string
}

export interface State {
  products: Product[]
  searchQuery: string
}

type ActionCtx = ActionContext<State, State>

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    products: [...dummyProducts],
    searchQuery: '',
  },
  mutations: {
    SET_PRODUCTS(state, products: Product[]) {
      state.products = products
    },
    ADD_PRODUCT(state, product: Product) {
      state.products.push(product)
    },
    UPDATE_PRODUCT(state, updatedProduct: Product) {
      const index = state.products.findIndex((p) => p.id === updatedProduct.id)
      if (index !== -1) {
        state.products[index] = updatedProduct
      }
    },
    DELETE_PRODUCT(state, productId: number) {
      state.products = state.products.filter((p) => p.id !== productId)
    },
    SET_SEARCH_QUERY(state, query: string) {
      state.searchQuery = query
    },
  },
  actions: {
    addProduct({ commit }: ActionCtx, product: Omit<Product, 'id'>) {
      const newProduct: Product = { ...product, id: Date.now() }
      commit('ADD_PRODUCT', newProduct)
    },
    updateProduct({ commit }: ActionCtx, product: Product) {
      commit('UPDATE_PRODUCT', product)
    },
    deleteProduct({ commit }: ActionCtx, productId: number) {
      commit('DELETE_PRODUCT', productId)
    },
    setSearchQuery({ commit }: ActionCtx, query: string) {
      commit('SET_SEARCH_QUERY', query)
    },
  },
  getters: {
    filteredProducts: (state: State) => {
      if (!state.searchQuery) return state.products
      const query = state.searchQuery.toLowerCase()
      return state.products.filter((product) => product.name.toLowerCase().includes(query))
    },
  },
})

export function useStore() {
  return baseUseStore(key)
}
