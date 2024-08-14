<template>
  <div class="w-full px-4 md:w-1/2 lg:w-1/3">
    <div class="mb-12">
      <label for="" class="mb-[10px] block text-base font-medium text-dark dark:text-white">
        {{ label }}
      </label>
      <input
        :type="type"
        :placeholder="placeholder"
        class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
        :disabled="disabled"
        :required="required"
        :value="value"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      label: string
      placeholder: string
      type: string
      disabled: boolean
      required: boolean
      value: string
    }>(), {
      placeholder: 'Input Text',
      type: 'text',
      disabled: false,
      required: false,
      value: ''
    }
  )
</script>