<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-50"
  >
    <div
      class="flex flex-col my-6 mx-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0"
    >
      <div class="bg-[#0071BC] rounded-xl hover:bg-[#1E90FF] hover:">
        <div class="p-8 mx-3 mt-3 rounded-t-xl bg-white">
          <h2 class="mt-10 font-serif text-5xl font-bold text-center">开户</h2>
          <div class="flex justify-center">
            <RouterLink
              to="/open"
              class="inline-block px-10 py-3 mt-6 text-center border-4 border-[#0071BC] rounded-lg duration-200 hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:text-white"
              >进入业务</RouterLink
            >
          </div>
        </div>
        <div class="p-8 mx-3 mb-3 rounded-b-xl bg-white">
          <div class="mx-4 mb-10 border-t border-gray-400"></div>
          <div class="flex flex-col space-y-2">
            <div class="flex justify-center">
              <span class="text-sm ml-1">便捷高效</span>
            </div>
            <div class="flex justify-center">
              <span class="text-sm ml-1">安全可靠</span>
            </div>
            <div class="flex justify-center">
              <span class="text-sm ml-1">个性化管理</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#0071BC] rounded-xl hover:bg-[#1E90FF] hover:">
        <div class="p-8 mx-3 mt-3 rounded-t-xl bg-white">
          <h2 class="mt-10 font-serif text-5xl font-bold text-center">储蓄</h2>
          <div class="flex justify-center">
            <RouterLink
              :to="`/login?target=saving`"
              class="inline-block px-10 py-3 mt-6 text-center border-4 border-[#0071BC] rounded-lg duration-200 hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:text-white"
              >进入业务</RouterLink
            >
          </div>
        </div>

        <div class="p-8 mx-3 mb-3 rounded-b-xl bg-white">
          <div class="mx-4 mb-10 border-t border-gray-400"></div>
          <div class="flex flex-col space-y-2">
            <div class="flex justify-center">
              <span class="text-sm ml-1">存取便利</span>
            </div>
            <div class="flex justify-center">
              <span class="text-sm ml-1">稳定收益</span>
            </div>
            <div class="flex justify-center">
              <span class="text-sm ml-1">多元化选择</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#0071BC] rounded-xl hover:bg-[#1E90FF] hover:">
        <div class="p-8 mx-3 mt-3 rounded-t-xl bg-white">
          <h2 class="mt-10 font-serif text-5xl font-bold text-center">销户</h2>
          <div class="flex justify-center">
            <RouterLink
              :to="`/login?target=close`"
              class="inline-block px-10 py-3 mt-6 text-center border-4 border-[#0071BC] rounded-lg duration-200 hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:text-white"
              >进入业务</RouterLink
            >
          </div>
        </div>

        <div class="p-8 mx-3 mb-3 rounded-b-xl bg-white">
          <div class="mx-4 mb-10 border-t border-gray-400"></div>
          <div class="flex flex-col space-y-2">
            <div class="flex justify-center">
              <span class="text-sm ml-1">简便易行</span>
            </div>
            <div class="flex justify-center">
              <span class="text-sm ml-1">资金安全</span>
            </div>
            <div class="flex justify-center">
              <span class="text-sm ml-1">持久化服务</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <button
      class="px-12 py-4 mt-12 rounded-full text-xl text-white bg-[#0071BC] duration-100 hover:bg-[#1E90FF]"
      @click="quit()"
    >
      退出
    </button> -->
  </div>
</template>

<script setup lang="ts" name="Services">
import { onMounted } from "vue";

onMounted(() => {
  localStorage.setItem("currentService", "0");
});

// function quit() {
//   window.close();
// }
</script>

<style scoped></style>
