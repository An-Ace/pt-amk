<template>
  <div class="flex flex-wrap gap-4">
    <div class="grid grid-cols-4 flex-wrap">
      <button class="flex justify-center rounded-l-lg px-6 py-2 border bg-gray-200/90 font-bold text-gray-500 text-base border-gray-200 hover:bg-gray-100" @click="activeMenu = 'saya'"> 
        <n-badge dot :processing="true" :offset="[4, 4]" :class="{ 'text-primary': activeMenu === 'saya'}">
          Saya (10) 
        </n-badge>
      </button>
      <button class="flex justify-center px-6 py-2 border bg-gray-200/90 font-bold text-gray-500 text-base border-gray-200 hover:bg-gray-100" @click="activeMenu = 'unassigned'"> 
        <n-badge dot :processing="true" :offset="[4, 4]" :class="{ 'text-primary': activeMenu === 'unassigned'}">
          Unassigned (5) 
        </n-badge>
      </button>
      <button class="flex justify-center px-6 py-2 border bg-gray-200/90 font-bold text-gray-500 text-base border-gray-200 hover:bg-gray-100" @click="activeMenu = 'team'"> 
        <n-badge dot :processing="true" :offset="[4, 4]" :class="{ 'text-primary': activeMenu === 'team'}">
          Team (15) 
        </n-badge>
      </button>
      <button class="flex justify-center rounded-r-lg px-6 py-2 border bg-gray-200/90 font-bold text-gray-500 text-base border-gray-200 hover:bg-gray-100" @click="activeMenu = 'semua'"> 
        <n-badge dot :processing="true" :offset="[4, 4]" :class="{ 'text-primary': activeMenu === 'semua'}">
          Semua (15) 
        </n-badge>
      </button>
    </div>
    <div class="">
      <div class="relative">
        <input
          class="appearance-none w-full sm:w-96 border-2 pl-11 border-gray-300 hover:border-primary transition-colors rounded-lg py-2 px-4 text-lg text-gray-800 leading-tight focus:outline-none focus:ring-primary focus:border-primary focus:shadow-outline"
          type="text"
          placeholder="Pencarian Nama, No. Ref, No. Inv"
        />
        <div class="absolute left-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-3 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="relative w-60">
      <n-select class="font-semibold" placeholder="Semua Channel" v-model:value="channel" :menu-props="{ class: 'font-semibold' }" clearable size="large" :options="[{ label: 'Channel 1', value: '1' }, { label: 'Channel 2', value: '2' }, { label: 'Channel 3', value: '3' }]"/>
    </div>
    <div class="relative">
      <n-dropdown trigger="click" show-arrow 
        :options="[
          {
            label: 'Marina Bay Sands',
            key: 'marina bay sands',
            disabled: true
          },
          {
            label: 'Brown\'s Hotel, London',
            key: 'brown\'s hotel, london'
          },
          {
            label: 'Atlantis Bahamas, Nassau',
            key: 'atlantis nahamas, nassau'
          },
          {
            label: 'The Beverly Hills Hotel, Los Angeles',
            key: 'the beverly hills hotel, los angeles'
          }
        ]">
        <n-button type="primary" size="large" class="font-semibold text-lg">
          Filter
          <n-tag round :bordered="false" type="default" class="ml-2 text-primary font-semibold" size="small">
            1
          </n-tag>
          <svg class="size-4 ml-2" viewBox="0 0 16 16" stroke="white" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z" fill="currentColor"></path>
          </svg>
        </n-button>
      </n-dropdown>
    </div>
  </div>
  <div class="my-3">
    <n-tag
      type="info"
      closable
      :trigger-click-on-close="false"
      round
      class="font-bold"
    >
      Tanggal Masuk : 04/07/2024 - 04/07/2024
    </n-tag>
  </div>
  <ChatPanel/>
</template>

<script lang="ts" setup>
import { NBadge, NSelect, NDropdown, NButton, NTag } from 'naive-ui';
definePageMeta({
	name: "ChatPage",
	alias: "/chat",
	title: "Chat | CRM AMK",
	roles: "all",
})
const activeMenu = ref<'saya' | 'unassigned' | 'team' | 'semua'>('saya');
const channel = ref(null);

</script>
