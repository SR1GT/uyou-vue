<template>
  <div class="flex flex-col justify-center items-center gap-8 h-full">
    <h1 class="text-3xl font-bold">储蓄业务</h1>
    <div class="grid grid-cols-2 items-center text-center gap-x-4 gap-y-1">
      <p class="font-bold">储蓄卡号</p>
      <p class="px-2 py-1 bg-gray-100">{{ cardId }}</p>
      <p class="font-bold">交易金额</p>
      <p class="px-2 py-1 bg-gray-100">{{ amount }}</p>
      <p class="font-bold">业务类型</p>
      <p class="px-2 py-1 bg-gray-100">{{ service ? "取款" : "存款" }}</p>
      <p class="font-bold">储蓄产品</p>
      <p class="px-2 py-1 bg-gray-100">
        {{ product ? `定期 ${product} 个月` : "活期" }}
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

<script setup lang="ts" name="SS">
import Loading from "@/components/Loading.vue";
import { confirmTransaction } from "@/http/api";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoading = ref(false);

const data = ref();

const cardId = ref("未提交");
const amount = ref(0);
const service = ref(0);
const product = ref(0);

window.addEventListener("storage", (e) => {
  if (e.key === "saveData") {
    const item = e.newValue;
    if (item !== null) {
      data.value = JSON.parse(item);
    }
  }
});

watch(data, (newValue) => {
  cardId.value = newValue.flag === 0 ? newValue.cardId : "未提交";
  amount.value = newValue.flag === 0 ? newValue.amount : 0;
  service.value = newValue.flag === 0 ? newValue.transactionType : 0;
  product.value = newValue.flag === 0 ? newValue.type : 0;
});

async function submit() {
  if (confirm("确认提交交易信息?")) {
    isLoading.value = true;
    const oid = localStorage.getItem("operatorId");
    if (oid === null || oid === "" || oid === "undefined") {
      alert("业务员信息失效");
      return;
    }
    const res = await confirmTransaction(
      cardId.value,
      amount.value,
      service.value,
      product.value,
      oid
    );
    if (res.data.status === "success") {
      isLoading.value = false;
      alert(`交易成功`);
      localStorage.setItem("saveData", JSON.stringify({ flag: 1 }));
      router.replace("/salesperson");
    } else {
      alert(`交易失败, 错误原因: ${res.data.message}`);
      localStorage.setItem("saveData", JSON.stringify({ flag: 2 }));
      isLoading.value = false;
    }
  }
}

function revoke() {
  localStorage.setItem("saveData", JSON.stringify({ flag: 2 }));
}
</script>

<style scoped></style>
