<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div
      class="flex flex-col justify-center items-center gap-8 px-16 py-8 bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <h1 class="text-2xl font-bold text-red-500">注销业务</h1>
      <div class="flex flex-col items-center gap-4">
        <label v-show="isCardShow">
          <span class="mr-4">银行卡号</span>
          <input
            type="text"
            v-model="cardId"
            disabled
            class="pb-1 outline-none"
            autocomplete="off"
          />
        </label>
        <label v-show="isCardShow">
          <span class="mr-4">取款密码</span>
          <input
            type="password"
            v-model="password"
            class="pb-1 border-b border-black outline-none duration-100 focus:border-[#0071BC]"
            autocomplete="off"
          />
        </label>
        <label>
          <span class="mr-4">身份证号</span>
          <input
            type="text"
            v-model="idCard"
            class="pb-1 border-b border-black outline-none duration-100 focus:border-[#0071BC]"
            autocomplete="off"
            autofocus
          />
        </label>
        <label>
          <span class="mr-4">注销类型</span>
          <select
            v-model="type"
            class="w-44 pb-1 border-b border-black outline-none duration-100 focus:border-[#0071BC]"
          >
            <option value="0">当前银行卡</option>
            <option value="1">当前账户</option>
          </select>
        </label>
      </div>
      <div class="flex justify-center items-center gap-8">
        <button
          class="px-4 py-2 bg-[#0071BC] text-white rounded-full duration-300 hover:bg-red-500"
          @click="submit()"
        >
          确认
        </button>
        <button
          class="px-4 py-2 text-[#0071BC] font-bold"
          @click="$router.replace('/services')"
        >
          取消
        </button>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <Loading v-show="isLoading" />
  </Teleport>
</template>

<script setup lang="ts" name="CloseAccount">
import Loading from "@/components/Loading.vue";
import { accountCheck } from "@/http/api";
import { useCardStore } from "@/store/card";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

onMounted(() => {
  localStorage.setItem("currentService", "3");
  localStorage.setItem(
    "closeAccount",
    JSON.stringify({ cardId: "未提交", idCard: "未提交", flag: 0 })
  );
});

window.addEventListener("storage", (e) => {
  if (e.key === "closeAccount") {
    const item = e.newValue;
    if (item !== null) {
      data.value = item;
    }
  }
});

const router = useRouter();
const cardStore = useCardStore();

const isLoading = ref(false);
const isCardShow = ref(true);

const data = ref();

const cardId = ref(cardStore.cardId);
const password = ref("");
const idCard = ref("");
const type = ref(0);

async function check() {
  const res = await accountCheck(cardId.value, password.value);
  if (res.data.status === "success") {
    data.value = {
      cardId: cardId.value,
      idCard: idCard.value,
      type: type.value,
      flag: 0,
    };
    localStorage.setItem("closeAccount", JSON.stringify(data.value));
  } else {
    alert(`密码错误: ${res.data.message}`);
    isLoading.value = false;
  }
}
function submit() {
  if (password.value !== "" && !/^\d{6}/.test(password.value)) {
    alert("密码格式错误");
    return;
  }
  if (
    !/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(
      idCard.value
    )
  ) {
    alert("身份证号格式错误");
    return;
  }
  if (!confirm("确认注销? (注销操作无法撤回)")) {
    return;
  }

  isLoading.value = true;
  if (isCardShow.value) {
    check();
  } else {
    data.value = {
      cardId: "未提交",
      idCard: idCard.value,
      type: type.value,
      flag: 0,
    };
    localStorage.setItem("closeAccount", JSON.stringify(data.value));
  }
}

watch(type, (newValue) => {
  isCardShow.value = !isCardShow.value;
});

watch(data, (newValue) => {
  if (typeof newValue === "string") {
    newValue = JSON.parse(newValue);
  }

  idCard.value = newValue.flag === 2 ? newValue.idCard : "";
  type.value = newValue.flag === 2 ? newValue.type : 0;

  if (newValue.flag === 1) {
    isLoading.value = false;
    alert("注销成功");
    const cardStore = useCardStore();
    cardStore.change("");
    router.replace("/services");
  } else if (newValue.flag === 2) {
    isLoading.value = false;
    alert("注销失败");
  }
});
</script>

<style scoped></style>
