<template>
  <div class="px-2.5 pr-0 flex cursor-pointer hover:bg-sky-100/50 relative" v-bind="$attrs">
    <div class="py-1 mr-2.5 w-full">
      <div class="px-4 py-1 flex justify-between w-full font-semibold rounded-lg" :class="{ '!font-bold bg-gray-50/80': newMessage, 'bg-sky-100': selected }">
        <div class="w-48">
          <div class="font-bold truncate" :class="{ 'font-extrabold': newMessage }">{{ name || number }}</div>
          <div class="text-gray-500 truncate">{{ lastMessage }}</div>
          <div class="text-gray-500 inline-flex items-center gap-1"><Icon name="logos:whatsapp-icon"/> CHO Yaya | <span class="text-primary">Yaya Jujura</span></div>
        </div>
        <div class="grid justify-items-end">
          <div class="font-semibold text-gray-500" :class="{ '!font-bold': newMessage }"><n-time v-if="lastDate" :time="new Date(lastDate)" format="HH:mm | dd-MM" /></div>
          <div class="flex gap-2">
            <Icon v-if="isPinned" name="bi:pin-angle" :size="18" class="stroke-[.5px] stroke-primary text-primary"/>
            <n-tag v-if="newMessage" round :bordered="false" type="default" size="tiny" class="bg-rose-500 text-white text-xs">
              {{ newMessage }}
            </n-tag>
          </div>
          <div class="font-bold italic text-gray-500">{{ role }}</div>
        </div>
      </div>
    </div>
    <div v-if="selected" class="absolute z-10 block w-1 bg-primary rounded-2xl inset-y-0 right-0"></div>
  </div>
</template>
<script setup lang="ts">
import { NTag, NTime } from 'naive-ui'
withDefaults(
  defineProps<{
    newMessage: number,
    isPinned: boolean,
    selected: boolean,
    name?: string,
    number?: string,
    lastMessage?: string,
    lastDate?: Date,
    role?: string,
  }>(),
  {
    newMessage: 0,
    isPinned: false,
    selected: false,
  }
)
</script>