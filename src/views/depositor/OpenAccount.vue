<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div
      class="relative flex justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <svg
        class="icon cursor-pointer absolute top-4 right-4 duration-100 hover:text-white hover:bg-black rounded-full p-2"
        style="
          width: 3em;
          height: 3em;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
        "
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        @click="$router.go(-1)"
      >
        <path
          d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM512 96a416 416 0 1 0 0 832 416 416 0 0 0 0-832z m176 640a47.68 47.68 0 0 1-33.92-14.08L512 579.904 369.92 721.92a48 48 0 0 1-67.84-67.84L444.096 512 302.08 369.92a48 48 0 0 1 67.84-67.84L512 444.096l142.08-142.016a48 48 0 0 1 67.84 67.84L579.904 512l142.016 142.08a48 48 0 0 1-33.92 81.92z"
        ></path>
      </svg>
      <div class="flex flex-col justify-center gap-8 p-16">
        <header>
          <h1 class="text-2xl font-bold mb-2">开户业务</h1>
          <p class="text-sm text-gray-500">从这里开始 享受全新的金融体验</p>
        </header>
        <main class="flex flex-col justify-center gap-4">
          <label>
            <span class="font-bold mr-4">储蓄人名</span>
            <input
              type="text"
              placeholder="输入真实姓名"
              v-model="name"
              class="bg-transparent border-b border-black pb-1 outline-none duration-75 focus:border-[#26CFF0]"
              autocomplete="off"
              autofocus
            />
          </label>
          <label>
            <span class="font-bold mr-4">家庭住址</span>
            <input
              type="text"
              placeholder="输入家庭住址"
              v-model="address"
              class="bg-transparent border-b border-black pb-1 outline-none duration-75 focus:border-[#26CFF0]"
              autocomplete="off"
            />
          </label>
          <label>
            <span class="font-bold mr-4">联系电话</span>
            <input
              type="tel"
              placeholder="输入联系电话"
              v-model="phone"
              pattern="/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/"
              class="bg-transparent border-b border-black pb-1 outline-none duration-75 focus:border-[#26CFF0]"
              autocomplete="off"
            />
          </label>
          <label>
            <span class="font-bold mr-4">身份证号</span>
            <input
              type="text"
              placeholder="输入18位身份证号码"
              v-model="idCard"
              pattern="/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/"
              class="bg-transparent border-b border-black pb-1 outline-none duration-75 focus:border-[#26CFF0]"
              autocomplete="off"
            />
          </label>
          <label class="relative">
            <span class="font-bold mr-4">设置密码</span>
            <input
              type="password"
              placeholder="输入密码"
              v-model="password"
              class="bg-transparent border-b border-black pb-1 outline-none duration-75 focus:border-[#26CFF0]"
              autocomplete="off"
            />
            <svg
              class="icon inline cursor-pointer"
              style="
                width: 1em;
                height: 1em;
                vertical-align: middle;
                fill: currentColor;
                overflow: hidden;
              "
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m0 73.142857C323.486476 170.666667 170.666667 323.486476 170.666667 512s152.81981 341.333333 341.333333 341.333333 341.333333-152.81981 341.333333-341.333333S700.513524 170.666667 512 170.666667z m45.32419 487.619047v73.142857h-68.510476l-0.024381-73.142857h68.534857z m-4.047238-362.008381c44.251429 8.923429 96.889905 51.126857 96.889905 112.518096 0 61.415619-50.151619 84.650667-68.120381 96.134095-17.993143 11.50781-24.722286 24.771048-24.722286 38.863238V609.52381h-68.534857v-90.672762c0-21.504 6.89981-36.571429 26.087619-49.883429l4.315429-2.852571 38.497524-25.6c24.551619-16.530286 24.210286-49.712762 9.020952-64.365715a68.998095 68.998095 0 0 0-60.391619-15.481904c-42.715429 8.387048-47.640381 38.521905-47.932952 67.779047v16.554667H390.095238c0-56.953905 6.534095-82.773333 36.912762-115.395048 34.03581-36.449524 81.993143-42.300952 126.268952-33.328762z"
              ></path>
            </svg>
          </label>
          <label>
            <span class="font-bold mr-4">确认密码</span>
            <input
              type="password"
              placeholder="再次输入密码"
              v-model="passwordConfirm"
              class="bg-transparent border-b border-black pb-1 outline-none duration-75 focus:border-[#26CFF0]"
              autocomplete="off"
            />
          </label>
        </main>
        <footer class="text-center">
          <button
            class="text-lg text-white bg-[#0071BC] px-6 py-2 rounded-full duration-100 hover:bg-[#26CFF0] hover:shadow-lg"
            @click="submit()"
          >
            立即开户
          </button>
        </footer>
      </div>
      <div class="flex justify-center items-center">
        <img
          src="@/assets/img/logo-main.png"
          alt="中国乌有银行 logo"
          class="w-64 mx-8 object-cover object-center"
        />
      </div>
    </div>
  </div>
  <Teleport to="body">
    <Loading v-show="isLoading" />
  </Teleport>
</template>

<script setup lang="ts" name="OpenAccount">
import Loading from "@/components/Loading.vue";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

onMounted(() => {
  localStorage.setItem("currentService", "1");
  localStorage.setItem("createAccount", JSON.stringify({ flag: 0 }));
});

window.addEventListener("storage", (e) => {
  if (e.key === "createAccount") {
    const item = e.newValue;
    if (item !== null) {
      data.value = item;
    }
  }
});

const isLoading = ref(false);

const data = ref();

// const name = ref("张三");
// const address = ref("北京市丰台区");
// const phone = ref("13812345678");
// const idCard = ref("110000200001011111");
const name = ref("");
const address = ref("");
const phone = ref("");
const idCard = ref("");
const password = ref("");
const passwordConfirm = ref("");

const router = useRouter();

function submit() {
  if (name.value === "") {
    alert("请输入储蓄人名");
    return;
  }
  if (address.value === "") {
    alert("请输入家庭住址");
    return;
  }
  if (
    !/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/.test(
      phone.value
    )
  ) {
    alert("请输入正确的手机号码");
    return;
  }
  if (
    !/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(
      idCard.value
    )
  ) {
    alert("请输入正确的身份证号");
    return;
  }
  if (passwordConfirm.value === "") {
    alert("请再次输入以确认密码");
    return;
  }
  if (password.value !== passwordConfirm.value) {
    alert("两次密码输入不一致");
    return;
  }
  if (!/^\d{6}$/.test(password.value)) {
    alert("密码格式错误");
    return;
  }
  isLoading.value = true;

  const data = JSON.stringify({
    name: name.value,
    sex: parseInt(idCard.value[idCard.value.length - 2]) % 2 === 0 ? 1 : 0,
    id: idCard.value,
    phone: phone.value,
    address: address.value,
    password: password.value,
    flag: 0,
  });
  localStorage.setItem("createAccount", data);
}

watch(data, (newValue, oldValue) => {
  newValue = JSON.parse(newValue);

  name.value = newValue.flag === 2 ? newValue.name : "";
  address.value = newValue.flag === 2 ? newValue.address : "";
  phone.value = newValue.flag === 2 ? newValue.phone : "";
  idCard.value = newValue.flag === 2 ? newValue.id : "";
  password.value = newValue.flag === 2 ? newValue.password : "";
  passwordConfirm.value = newValue.flag === 2 ? newValue.password : "";

  isLoading.value = false;

  if (newValue.flag === 1) {
    alert("开户成功");
    router.replace("/services");
  }
});
</script>

<style scoped></style>
