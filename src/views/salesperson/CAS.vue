<template>
  <div class="flex flex-col justify-center items-center gap-8 h-full">
    <h1 class="text-3xl font-bold">注销业务</h1>
    <div class="grid grid-cols-2 items-center text-center gap-x-4 gap-y-1">
      <p class="font-bold">银行卡号</p>
      <p class="px-2 py-1 bg-gray-100">{{ cardId }}</p>
      <p class="font-bold">身份证号</p>
      <p class="px-2 py-1 bg-gray-100">{{ idCard }}</p>
      <p class="font-bold">注销类型</p>
      <p class="px-2 py-1 bg-gray-100">
        {{ type ? "注销账户" : "注销银行卡" }}
      </p>
    </div>
    <div class="flex items-center gap-8">
      <button
        class="px-8 py-2 bg-[#0071BC] text-white rounded-full duration-300 hover:bg-[#26CFF0] hover:opacity-80"
        @click="submit()"
      >
        确认并提交
      </button>
      <button
        class="px-8 py-2 bg-[#0071BC] text-white rounded-full duration-300 hover:bg-[#26CFF0] hover:opacity-80"
        @click="revoke()"
      >
        撤回
      </button>
    </div>
  </div>
  <Teleport to="body">
    <Loading v-show="isLoading" />
  </Teleport>
</template>

<script setup lang="ts" name="CAS">
import Loading from "@/components/Loading.vue";
import { deleteAccount, deleteUser } from "@/http/api";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoading = ref(false);

const data = ref();

const cardId = ref("未提交");
const idCard = ref("未提交");
const type = ref(0);

window.addEventListener("storage", (e) => {
  if (e.key === "closeAccount") {
    const item = e.newValue;
    if (item !== null) {
      data.value = JSON.parse(item);
    }
  }
});

watch(data, (newValue) => {
  cardId.value = newValue.flag === 0 ? newValue.cardId : "未提交";
  idCard.value = newValue.flag === 0 ? newValue.idCard : "未提交";
  type.value = newValue.flag === 0 ? newValue.type : 0;
});

async function submit() {
  if (confirm("确认提交注销信息?")) {
    isLoading.value = true;
    if (type.value === 0) {
      // const res = await deleteAccount(cardId.value, idCard.value);
      const res = { data: { status: "success", message: "123" } };
      if (res.data.status === "success") {
        isLoading.value = false;
        alert(`注销成功`);
        localStorage.setItem("closeAccount", JSON.stringify({ flag: 1 }));
        router.replace("/salesperson");
      } else {
        alert(`注销失败, 错误原因: ${res.data.message}`);
        localStorage.setItem("closeAccount", JSON.stringify({ flag: 2 }));
        isLoading.value = false;
      }
    } else {
      const res = await deleteUser(idCard.value);
      if (res.data.status === "success") {
        isLoading.value = false;
        alert(`注销成功`);
        localStorage.setItem("closeAccount", JSON.stringify({ flag: 1 }));
        router.replace("/salesperson");
      } else {
        alert(`注销失败, 错误原因: ${res.data.message}`);
        localStorage.setItem("closeAccount", JSON.stringify({ flag: 2 }));
        isLoading.value = false;
      }
    }
  }
}

function revoke() {
  localStorage.setItem("closeAccount", JSON.stringify({ flag: 2 }));
}
</script>

<style scoped></style>
