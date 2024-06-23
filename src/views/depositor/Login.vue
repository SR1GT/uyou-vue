<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div
      class="relative flex justify-center items-center bg-white w-[800px] h-[450px] rounded-xl shadow-lg overflow-hidden"
    >
      <img
        src="@/assets/img/card.png"
        alt=""
        class="absolute top-0 left-0 w-full p-4"
      />
      <div class="flex flex-col gap-8 ml-36 z-10">
        <input
          type="text"
          v-model="cardId"
          placeholder="请输入卡号"
          class="text-center border-b border-black w-96 p-2 duration-75 focus:border-[#26CFF0] outline-none"
          autocomplete="off"
          autofocus
        />
        <input
          type="password"
          v-model="password"
          maxlength="6"
          placeholder="请输入密码"
          class="text-center border-b border-black w-96 p-2 duration-75 focus:border-[#26CFF0] outline-none"
          autocomplete="off"
        />
        <div class="flex justify-center items-center gap-8">
          <button
            class="bg-[#0071BC] text-white px-6 py-2 rounded-full duration-100 hover:shadow-lg hover:bg-[#26CFF0]"
            @click="submit()"
          >
            验证
          </button>
          <button
            class="text-[#0071BC] font-bold px-6 py-2 rounded-full duration-100 hover:shadow-lg hover:bg-[#26CFF0] hover:text-white"
            @click="back()"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <Loading v-show="isLoading" />
  </Teleport>
</template>

<script setup lang="ts" name="Login">
import Loading from "@/components/Loading.vue";
import { accountCheck } from "@/http/api";
import { useCardStore } from "@/store/card";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const cardStore = useCardStore();

const cardId = ref(cardStore.cardId);
const password = ref("");

const isLoading = ref(false);

const route = useRoute();
const router = useRouter();

function submit() {
  if (cardId.value === "" || password.value === "") {
    alert("卡号或密码为空");
    return;
  }
  if (!/^\d{6}/.test(password.value)) {
    alert("密码格式错误");
    return;
  }
  isLoading.value = true;
  check();
}

function back() {
  router.replace("/services");
}

async function check() {
  const res = await accountCheck(cardId.value, password.value);
  if (res.data.status === "success") {
    isLoading.value = false;
    const target = route.query.target;
    if (target === "saving" || target === "close") {
      cardStore.change(cardId.value);
      router.replace(`/${route.query.target}`);
    } else {
      alert("所选业务不存在");
      router.replace("/services");
    }
  } else {
    alert(`验证错误: ${res.data.message}`);
    password.value = "";
    isLoading.value = false;
  }
}
</script>

<style scoped></style>
