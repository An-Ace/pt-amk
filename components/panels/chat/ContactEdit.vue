<template>
  <div class="grid gap-4 p-3">
    <div>
      <label for="name" class="block text-sm font-bold text-gray-500 ">Name <span class="text-rose-400">*</span></label>
      <input v-model="newName" placeholder="Name" id="name" class="mt-1 p-2 px-3 w-full border-2 rounded-lg text-gray-800 font-semibold">
    </div>
    <div>
      <label class="block text-sm font-bold text-gray-500 ">Pipeline <span class="text-rose-400">*</span></label>
      <n-select default-value="B2B" class="font-semibold" placeholder="Semua Channel" :menu-props="{ class: 'font-semibold' }" size="large" :options="[{ label: 'B2B', value: 'B2B' }, { label: 'ETC', value: 'ETC' }]"/>
    </div>
    <div>
      <label class="block text-sm font-bold text-gray-500 ">Stages <span class="text-rose-400">*</span></label>
      <n-select default-value="greeting" class="font-semibold" placeholder="Semua Channel" clearable :menu-props="{ class: 'font-semibold' }" size="large" :options="[{ label: 'Greeting', value: 'greeting' }]"/>
    </div>
    <div>
      <label class="block text-sm font-bold text-gray-500 ">Sumber <span class="text-rose-400">*</span></label>
      <n-select default-value="artikel" class="font-semibold" placeholder="Semua Channel" :menu-props="{ class: 'font-semibold' }" size="large" :options="[{ label: 'Artikel', value: 'artikel' }]"/>
    </div>
    <div>
      <label class="block text-sm font-bold text-gray-500 ">Sales Owner <span class="text-rose-400">*</span></label>
      <n-select default-value="sales-owner" class="font-semibold" placeholder="Semua Channel" :menu-props="{ class: 'font-semibold' }" size="large" :options="[{ label: 'Sales Owner', value: 'sales-owner' }]"/>
    </div>
    <div>
      <label class="block text-sm font-bold text-gray-500 ">Kategori <span class="text-rose-400">*</span></label>
      <n-select default-value="B2B" class="font-semibold" placeholder="Semua Channel" :menu-props="{ class: 'font-semibold' }" size="large" :options="[{ label: 'B2B', value: 'B2B' }, { label: 'ETC', value: 'ETC' }]"/>
    </div>
    <div>
      <label class="block text-sm font-bold text-gray-500 ">Temperatur <span class="text-rose-400">*</span></label>
      <n-select default-value="humble" class="font-semibold" placeholder="Semua Channel" :menu-props="{ class: 'font-semibold' }" size="large" :options="[{ label: 'Humble', value: 'humble' }]"/>
    </div>
    <div>
      <n-button @click="newName && changeName(newName)" type="primary" class="font-bold rounded-xl" size="large">
        save
      </n-button>
    </div>
    <div>

    </div>
  </div>
</template>
<script setup lang="ts">
import { NSelect, NButton } from 'naive-ui'
  const props = defineProps<{
    name: string
    changeName: (name: string) => void
  }>()
const newName = ref('')
watch(() => props.name, () => {
  newName.value = props.name
})

</script>