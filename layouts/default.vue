<template>
  <div>
    <div class="px-4 py-2">
      <div class="border-b border-gray-300 mb-4">
        <ul class="flex flex-wrap -mb-px" role="tablist">
          <li v-for="menu in NavMenus" :key="menu.path">
            <NuxtLink :to="menu.path" :class="NavClass(menu.path, menu.alias)" type="button" role="tab">
              {{ menu.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();
  const NavMenus = [
    { label: "Chat", path: "/chat", alias: "/Chat"  },
    { label: "Group", path: "/group", alias: "/Group"  },
    { label: "Channel", path: "/channel", alias: "/Channel"  },
    { label: "Setting", path: "/setting", alias: "/Setting"  },
  ]
  function NavClass (path: string, alias?: string) {
    return route.fullPath.startsWith(path) || (alias && route.fullPath.startsWith(alias)) ? 
    "inline-block text-primary hover:text-blue-600 hover:border-primary rounded-t-lg py-3 px-9 text-lg font-bold text-center border-b-4 border-primary" : 
    "inline-block text-gray-500 hover:text-gray-400 hover:border-gray-300 rounded-t-lg py-3 px-9 text-lg font-bold text-center hover:border-b-4";
  }
</script>