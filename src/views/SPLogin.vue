<template>
  <div class="flex justify-center items-center h-screen bg-[#0071BC]">
    <div
      class="flex flex-col justify-center items-center gap-4 px-16 py-8 bg-white rounded-lg shadow-[12px_12px_0_#0000006a]"
    >
      <img src="@/assets/img/logo.png" alt="logo" class="w-24" />
      <h1 class="text-xl font-bold tracking-widest">业务员登录</h1>
      <div class="flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          v-model="jobId"
          placeholder="输入工号"
          class="text-center bg-transparent border-b border-black pb-1 outline-none duration-75 focus:border-[#26CFF0]"
          autocomplete="off"
          autofocus
        />
        <input
          type="password"
          v-model="password"
          placeholder="输入密码"
          class="text-center bg-transparent border-b border-black pb-1 outline-none duration-75 focus:border-[#26CFF0]"
          autocomplete="off"
        />
        <div>
          <button
            class="px-6 py-2 bg-[#0071BC] text-white duration-300 hover:bg-[#26CFF0]"
            @click="submit()"
          >
            登录
          </button>
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <Loading v-show="isLoading" />
  </Teleport>
</template>

<script setup lang="ts" name="Salesperson">
import Loading from "@/components/Loading.vue";
import { operatorCheck } from "@/http/api";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const jobId = ref("");
const password = ref("");

const isLoading = ref(false);

function submit() {
  if (jobId.value === "" || password.value === "") {
    alert("工号或密码不能为空");
    return;
  }
  isLoading.value = true;
  check();
}

async function check() {
  const res = await operatorCheck(jobId.value, password.value);
  if (res.data.status === "success") {
    isLoading.value = false;
    localStorage.setItem("operatorId", jobId.value);
    router.replace("/salesperson");
    window.open("#/services", "_blank");
  } else {
    alert(`验证失败, 错误: ${res.data.message}`);
    isLoading.value = false;
  }
}
</script>

<style scoped></style>
