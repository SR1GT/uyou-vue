<template>
  <div class="flex flex-col justify-center items-center gap-8 h-full">
    <h1 class="text-3xl font-bold">开户业务</h1>
    <div class="grid grid-cols-2 items-center text-center gap-x-4 gap-y-1">
      <p class="font-bold">储蓄人名</p>
      <p class="px-2 py-1 bg-gray-100">{{ name }}</p>
      <p class="font-bold">性别</p>
      <p class="px-2 py-1 bg-gray-100">{{ sex ? "女" : "男" }}</p>
      <p class="font-bold">家庭住址</p>
      <p class="px-2 py-1 bg-gray-100">{{ address }}</p>
      <p class="font-bold">联系电话</p>
      <p class="px-2 py-1 bg-gray-100">{{ phone }}</p>
      <p class="font-bold">身份证号</p>
      <p class="px-2 py-1 bg-gray-100">{{ id }}</p>
      <p class="font-bold">密码</p>
      <p class="px-2 py-1 bg-gray-100">
        {{
          password !== "" && password.length === 6 ? "已验证通过" : "密码错误"
        }}
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

<script setup lang="ts" name="OAS">
import Loading from "@/components/Loading.vue";
import { createAccount } from "@/http/api";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const isLoading = ref(false);

const router = useRouter();

const data = ref();

const name = ref("未提交");
const sex = ref(0);
const address = ref("未提交");
const phone = ref("未提交");
const id = ref("未提交");
const password = ref("");

window.addEventListener("storage", (e) => {
  if (e.key === "createAccount") {
    const item = e.newValue;
    if (item !== null) {
      data.value = JSON.parse(item);
    }
  }
});

async function submit() {
  if (confirm("确认提交开户信息?")) {
    isLoading.value = true;
    const res = await createAccount(
      name.value,
      sex.value,
      id.value,
      phone.value,
      address.value,
      password.value
    );
    if (res.data.status === "success") {
      isLoading.value = false;
      alert(`开户成功, 新开户的卡号为: ${res.data.CardId}`);
      localStorage.setItem("createAccount", JSON.stringify({ flag: 1 }));
      router.replace("/salesperson");
    } else {
      alert(`开户失败, 错误原因: ${res.data.message}`);
      localStorage.setItem("createAccount", JSON.stringify({ flag: 2 }));
      isLoading.value = false;
    }
  }
}

function revoke() {
  localStorage.setItem("createAccount", JSON.stringify({ flag: 2 }));
}

watch(data, (newValue, oldValue) => {
  name.value = newValue.flag === 0 ? newValue.name : "未提交";
  sex.value = newValue.flag === 0 ? newValue.sex : 0;
  address.value = newValue.flag === 0 ? newValue.address : "未提交";
  phone.value = newValue.flag === 0 ? newValue.phone : "未提交";
  id.value = newValue.flag === 0 ? newValue.id : "未提交";
  password.value = newValue.flag === 0 ? newValue.password : "";
});
</script>

<style scoped></style>
