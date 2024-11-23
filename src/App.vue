<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore, type Product } from './store'
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import HomeSidebar from '@/components/HomeSidebar.vue'
import HomeToolbar from '@/components/HomeToolbar.vue'
import ProductCard from '@/components/ProductCard.vue'
import BaseModal from './components/BaseModal.vue'
import BaseInput from './components/BaseInput.vue'
import BaseButton from './components/BaseButton.vue'

const store = useStore()

const newProduct = ref<Omit<Product, 'id'>>({ name: '', price: 0, description: '', image: '' })
const editingProduct = ref<Product | null>(null)
const deletedProduct = ref<Product['id'] | null>(null)
const filteredProducts = computed(() => store.getters.filteredProducts)

const showAddModal = ref(false)

const addProduct = () => {
  store.dispatch('addProduct', newProduct.value)
  newProduct.value = { name: '', price: 0, description: '', image: '' }
  showAddModal.value = false
}

const editProduct = (product: Product) => {
  editingProduct.value = { ...product }
}

const cancelEdit = () => {
  editingProduct.value = null
}

const updateProduct = () => {
  if (editingProduct.value) {
    store.dispatch('updateProduct', editingProduct.value)
    editingProduct.value = null
  }
}

const deleteProductConfirm = (id: Product['id']) => {
  deletedProduct.value = id
}

const cancelDeleteProduct = () => {
  deletedProduct.value = null
}

const deleteProduct = () => {
  store.dispatch('deleteProduct', deletedProduct.value)
  deletedProduct.value = null
}
</script>

<template>
  <BaseHeader />
  <main class="min-h-screen mb-8">
    <HomeToolbar @addCollection="showAddModal = true" />
    <section class="container mx-auto flex gap-8 flex-col lg:flex-row">
      <HomeSidebar />
      <div class="items-start flex-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :description="product.description"
          :image="product.image"
          @edit="editProduct(product)"
          @delete="deleteProductConfirm(product.id)"
        />
      </div>
    </section>

    <Teleport to="body">
      <BaseModal title="Add Collection" :show="showAddModal">
        <template #body>
          <form @submit.prevent="addProduct" class="flex flex-col gap-y-5">
            <BaseInput v-model="newProduct.name" placeholder="Name" required />
            <BaseInput
              v-model.number="newProduct.price"
              type="number"
              placeholder="Price"
              required
            />
            <BaseInput v-model="newProduct.description" placeholder="Description" required />
            <BaseInput v-model="newProduct.image" placeholder="Image Url (Optional)" />
            <div class="flex gap-4">
              <BaseButton
                class="w-full"
                title="Cancel"
                btn-type="secondary"
                type="button"
                @click="showAddModal = false"
              />
              <BaseButton class="w-full" title="Add" type="submit" />
            </div>
          </form>
        </template>
      </BaseModal>
    </Teleport>

    <Teleport to="body">
      <BaseModal title="Edit Collection" :show="!!editingProduct">
        <template #body v-if="editingProduct">
          <form @submit.prevent="updateProduct" class="flex flex-col gap-y-5">
            <BaseInput v-model="editingProduct.name" placeholder="Name" required />
            <BaseInput
              v-model.number="editingProduct.price"
              type="number"
              placeholder="Price"
              required
            />
            <BaseInput v-model="editingProduct.description" placeholder="Description" required />
            <BaseInput v-model="editingProduct.image" placeholder="Image Url (Optional)" />
            <div class="flex gap-4">
              <BaseButton
                class="w-full"
                title="Cancel"
                btn-type="secondary"
                type="button"
                @click="cancelEdit"
              />
              <BaseButton class="w-full" title="Save" type="submit" />
            </div>
          </form>
        </template>
      </BaseModal>
    </Teleport>

    <Teleport to="body">
      <BaseModal title="Delete Collection" :show="!!deletedProduct">
        <template #body>
          <p>Are you sure want to delete this Collection?</p>
        </template>
        <template #footer>
          <BaseButton
            class="w-full"
            title="Cancel"
            btn-type="secondary"
            type="button"
            @click="cancelDeleteProduct"
          />
          <BaseButton class="w-full" title="Delete" type="button" @click="deleteProduct" />
        </template>
      </BaseModal>
    </Teleport>
  </main>
  <BaseFooter />
</template>
