<template>
  <div class="grid grid-cols-2">
    <div class="w-full min-h-svh py-14 px-24 bg-primary">
      <img src="/jujura.png" alt="Jujura" style="filter: brightness(0) invert(1);">
      <div class="font-bold text-white text-5xl">Mitra Terpercaya Kebutuhan Laundry dan Autocare.</div>
      <img class="mt-12 mx-auto" src="/laundry.svg" alt="Laundry" style="width: 500px;">
    </div>
    <div class="flex min-h-full flex-1 flex-col px-6 py-24 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm grid justify-center">
        <strong class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In to Jujura</strong>
      </div>
      <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form>
          <div class="mb-6">
            <label for="email" class="block text-sm font-bold text-gray-500 ">Email</label>
            <input type="email" id="email" name="email" class="mt-1 p-2 px-3 w-full border-2 rounded-xl text-gray-800">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-bold text-gray-500">Password</label>
            <input type="password" id="password" name="password" class="mt-1 p-2 px-3 w-full border-2 rounded-xl text-gray-800">
          </div>
          <div class="mb-6 flex justify-between">
            <label class="text-gray-500">
              <input class="mr-2" type="checkbox">
              Remember Me
            </label>
            <NuxtLink class="text-gray-500" to="#">Forgot Password?</NuxtLink>
          </div>
          <div class="grid justify-center">
            <NuxtLink to="/">
              <button type="submit" class="w-fit py-3 px-12 bg-primary text-white font-bold rounded-2xl hover:bg-blue-700">Sign In →</button>
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
	name: "SignInPage",
	alias: "/login",
	title: "Sing In | CRM AMK",
	roles: "all",
  layout: 'blank'
})
</script>