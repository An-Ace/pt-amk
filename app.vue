<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-global-style />
    <div class="bg-[#F4F9FD] min-h-svh">
      <NuxtLayout >
        <NuxtPage />
      </NuxtLayout>
    </div>
  </n-config-provider>
</template>

<script lang="ts" setup>
import '@/assets/scss/main.scss';
import { NConfigProvider, NGlobalStyle, type GlobalThemeOverrides } from 'naive-ui'
   const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColor: '#3F8CFF',
      primaryColorHover: '#3F8CFF',
      borderRadius: '6px',
      fontFamily: 'Nunito Sans'
    },
    // Select: {
    //   peers: {
    //     InternalSelection: {
    //       textColor: '#FF0000'
    //     }
    //   }
    // }
    // ...
  }
</script>
