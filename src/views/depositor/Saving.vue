<template>
  <div class="relative flex justify-center items-center h-screen bg-gray-100">
    <div
      class="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <header
        class="flex justify-between items-center gap-12 w-full bg-[#0071BC] text-white text-sm p-8"
      >
        <button
          title="返回"
          class="outline-none duration-100 hover:bg-white hover:text-[#0071BC] rounded-full p-1"
          @click="back()"
        >
          <svg
            class="icon"
            style="
              width: 2em;
              height: 2em;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
            "
            viewBox="0 0 1025 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M533.353412 682.285176c0-0.030118 0.060235-0.060235 0.060235-0.090353C533.172706 682.194824 533.142588 682.224941 533.353412 682.285176zM40.176941 555.008l314.398118 314.398118c27.045647 27.045647 70.927059 27.045647 97.942588 0 27.045647-26.985412 27.045647-70.866824 0-97.912471l-196.186353-196.216471 665.630118 0c38.249412 0 69.240471-31.021176 69.240471-69.240471 0-38.279529-31.021176-69.270588-69.240471-69.270588L256.361412 436.766118l196.186353-196.186353c27.045647-27.015529 27.045647-70.927059 0-97.942588C439.024941 129.114353 421.285647 122.337882 403.546353 122.337882c-17.709176 0-35.448471 6.776471-48.941176 20.299294L40.176941 457.065412C13.101176 484.111059 13.101176 527.932235 40.176941 555.008z"
            ></path>
          </svg>
        </button>
        <h1 class="text-2xl font-bold cursor-default">储蓄业务</h1>
        <button
          title="查看历史交易记录"
          class="outline-none duration-100 hover:bg-white hover:text-[#0071BC] rounded-full p-1"
          @click="getHistory()"
        >
          <svg
            class="icon"
            style="
              width: 2em;
              height: 2em;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
            "
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M533.333333 85.333333C384 85.333333 251.733333 166.4 183.466667 290.133333L85.333333 192 85.333333 469.333333l277.333333 0L243.2 349.866667C298.666667 243.2 405.333333 170.666667 533.333333 170.666667c174.933333 0 320 145.066667 320 320 0 174.933333-145.066667 320-320 320-140.8 0-256-89.6-302.933333-213.333333L140.8 597.333333c46.933333 170.666667 204.8 298.666667 392.533333 298.666667 226.133333 0 405.333333-183.466667 405.333333-405.333333S755.2 85.333333 533.333333 85.333333zM469.333333 298.666667l0 217.6 200.533333 119.466667 34.133333-55.466667-170.666667-102.4L533.333333 298.666667 469.333333 298.666667z"
            ></path>
          </svg>
        </button>
      </header>
      <main class="flex flex-col justify-center items-start gap-4 w-full p-8">
        <div>
          <span class="mr-4 text-[#0071BC] font-bold">业务类型</span>
          <label class="mr-4">
            <input
              type="radio"
              v-model="serviceType"
              value="deposit"
              class="outline-none"
            />
            存款
          </label>
          <label>
            <input
              type="radio"
              v-model="serviceType"
              value="withdraw"
              class="outline-none"
            />
            取款
          </label>
        </div>
        <div>
          <span class="mr-4 text-[#0071BC] font-bold">储蓄产品</span>
          <label class="mr-4">
            <input
              type="radio"
              v-model="productType"
              value="current"
              class="outline-none"
            />
            活期
          </label>
          <label>
            <input
              type="radio"
              v-model="productType"
              value="term"
              class="outline-none"
            />
            定期
          </label>
        </div>
        <div>
          <span class="mr-4 text-[#0071BC] font-bold">储蓄卡号</span>
          <input
            type="text"
            v-model="cardId"
            disabled
            class="bg-gray-200 px-2 py-1 outline-none"
          />
        </div>
        <div>
          <span class="mr-4 text-[#0071BC] font-bold">储蓄人名</span>
          <input
            type="text"
            v-model="name"
            disabled
            class="bg-gray-200 px-2 py-1 outline-none"
          />
        </div>
        <div>
          <span class="mr-4 text-[#0071BC] font-bold">交易日期</span>
          <input
            type="text"
            v-model="today"
            disabled
            class="bg-gray-200 px-2 py-1 outline-none"
          />
        </div>

        <div
          v-if="!isWithdrawVisible"
          class="flex flex-col justify-center items-start gap-4 w-full"
        >
          <div>
            <span class="mr-4 text-[#0071BC] font-bold">存款金额</span>
            <span>￥</span>
            <input
              type="number"
              v-model="depositAmount"
              min="0"
              max="20000"
              class="bg-transparent border-b border-black px-2 py-1 outline-none duration-75 focus:border-[#26CFF0]"
              autocomplete="off"
            />
          </div>
          <div ref="termSelect" v-if="isTermSelectVisible">
            <span class="mr-4 text-[#0071BC] font-bold">定期期限</span>
            <select
              v-model="term"
              class="bg-transparent border-b border-black px-2 py-1 outline-none duration-75 focus:border-[#26CFF0]"
              autocomplete="off"
            >
              <option value="3">3 个月</option>
              <option value="6">6 个月</option>
              <option value="12">1 年</option>
              <option value="24">2 年</option>
              <option value="36">3 年</option>
            </select>
          </div>
          <div>
            <span class="mr-4 text-[#0071BC] font-bold">存款利率</span>
            <input
              type="number"
              v-model="rate"
              disabled
              class="bg-gray-200 px-2 py-1 outline-none"
            />
          </div>
        </div>
        <div
          v-if="isWithdrawVisible"
          class="flex flex-col justify-center items-start gap-4 w-full"
        >
          <div>
            <span class="mr-4 text-[#0071BC] font-bold">取款金额</span>
            <span>￥</span>
            <input
              v-if="isTermSelectVisible"
              type="number"
              v-model="withdrawalAmount"
              min="0"
              max="20000"
              class="bg-gray-200 px-2 py-1 outline-none"
              autocomplete="off"
              readonly
            />
            <input
              v-else
              type="number"
              v-model="withdrawalAmountRegular"
              min="0"
              max="20000"
              class="bg-transparent border-b border-black px-2 py-1 outline-none duration-75 focus:border-[#26CFF0]"
              autocomplete="off"
            />
          </div>
          <div>
            <span class="mr-4 text-[#0071BC] font-bold">取款密码</span>
            <input
              type="password"
              v-model="password"
              maxlength="6"
              class="bg-transparent border-b border-black px-2 py-1 outline-none duration-75 focus:border-[#26CFF0]"
              autocomplete="off"
            />
          </div>
        </div>
      </main>
      <footer class="flex justify-center items-center gap-4 w-full p-8">
        <button
          class="bg-[#0071BC] text-white px-4 py-2 rounded-lg duration-200 hover:scale-110 outline-none"
          @click="submit()"
        >
          确认
        </button>
        <button
          class="bg-white text-[#0071BC] px-4 py-2 font-bold rounded-lg duration-200 hover:scale-110 outline-none"
          @click="help()"
        >
          帮助
        </button>
      </footer>
    </div>
    <div
      class="absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-50"
      v-if="isHistoryDivVisible"
    >
      <div
        class="relative flex flex-col items-center gap-4 bg-white rounded-lg p-8"
      >
        <svg
          class="icon cursor-pointer absolute top-2 right-2 duration-100 hover:text-white hover:bg-black rounded-full p-2"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          @click="close()"
          style="
            width: 2.5em;
            height: 2.5em;
            vertical-align: middle;
            fill: currentcolor;
            overflow: hidden;
          "
        >
          <path
            d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM512 96a416 416 0 1 0 0 832 416 416 0 0 0 0-832z m176 640a47.68 47.68 0 0 1-33.92-14.08L512 579.904 369.92 721.92a48 48 0 0 1-67.84-67.84L444.096 512 302.08 369.92a48 48 0 0 1 67.84-67.84L512 444.096l142.08-142.016a48 48 0 0 1 67.84 67.84L579.904 512l142.016 142.08a48 48 0 0 1-33.92 81.92z"
          ></path>
        </svg>
        <h1 class="text-2xl font-bold">30 天内交易记录明细查询</h1>
        <table class="text-center" v-show="!isEmpty">
          <tr>
            <th>序号</th>
            <th>交易日期</th>
            <th>业务类型</th>
            <th>储蓄产品</th>
            <th>交易金额</th>
            <th>活期余额</th>
            <!-- <th>操作</th> -->
          </tr>
          <tr v-for="item in historyList" :key="item.TransactionID">
            <td>{{ item.TransactionID }}</td>
            <td>{{ item.TransactionDate }}</td>
            <td>{{ item.TransactionType === "0" ? "存款" : "取款" }}</td>
            <td>{{ item.TransactionMode === "0" ? "活期" : "定期" }}</td>
            <td>{{ item.Amount.toFixed(2) }}</td>
            <td>
              {{ item.TransactionMode === "0" ? item.Balance.toFixed(2) : "-" }}
            </td>
            <!-- <td>
              <button
                class="px-4 py-2 duration-200 hover:text-[#0071BC] hover:underline outline-none"
                @click="detail(item.TransactionID)"
              >
                查看
              </button>
            </td> -->
          </tr>
        </table>
        <div class="py-12" v-show="isEmpty">暂无相关记录</div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <Loading v-show="isLoading" />
  </Teleport>
</template>

<script setup lang="ts" name="Saving">
import Loading from "@/components/Loading.vue";
import type { HistoryItems } from "@/types/HistoryItem";
import { onMounted, reactive, ref, watch } from "vue";
import { accountCheck, history, save, withdrawal } from "@/http/api";
import { useRouter } from "vue-router";
import { useCardStore } from "@/store/card";

onMounted(() => {
  isLoading.value = true;
  localStorage.setItem("currentService", "2");
  localStorage.setItem(
    "saveData",
    JSON.stringify({ cardId: "未提交", amount: 0, flag: 0 })
  );
  getInfo();
});

window.addEventListener("storage", (e) => {
  if (e.key === "saveData") {
    const item = e.newValue;
    if (item !== null) {
      data.value = item;
    }
  }
});

const router = useRouter();

const cardStore = useCardStore();

const data = ref();

const serviceType = ref("deposit");
const productType = ref("current");
const cardId = ref(cardStore.cardId);
const name = ref("");
const today = ref(new Date().toLocaleString().replace(/\//g, "-"));
const depositAmount = ref(0);
const rate = ref(0);
const withdrawalAmount = ref(0);

const isWithdrawVisible = ref(false);

const isTermSelectVisible = ref(false);
const term = ref("3");

const withdrawalAmountRegular = ref(0);
const balance = ref(0);

const password = ref("");

const isHistoryDivVisible = ref(false);
const historyList = reactive<HistoryItems>([]);

const isLoading = ref(false);
const isEmpty = ref(false);

watch(serviceType, () => {
  isWithdrawVisible.value = !isWithdrawVisible.value;
  if (isTermSelectVisible.value && !isWithdrawVisible.value) {
    getRate(parseInt(term.value));
  }
  if (!isTermSelectVisible.value && !isWithdrawVisible.value) {
    getRate(0);
  }
});

watch(productType, () => {
  isTermSelectVisible.value = !isTermSelectVisible.value;
  if (isTermSelectVisible.value && !isWithdrawVisible.value) {
    getRate(parseInt(term.value));
  }
  if (!isTermSelectVisible.value && !isWithdrawVisible.value) {
    getRate(0);
  }
});

watch(term, (newValue) => {
  getRate(parseInt(term.value));
});

watch(data, (newValue) => {
  if (typeof newValue === "string") {
    newValue = JSON.parse(newValue);
  }
  if (newValue.flag === 1) {
    isLoading.value = false;
    alert("交易成功");
    router.replace("/services");
  } else if (newValue.flag === 2) {
    isLoading.value = false;
    alert("交易失败");
  }
});

async function getInfo() {
  const res = await withdrawal(cardId.value);
  if (res.data.status !== "success") {
    alert(`获取信息失败, 错误原因: ${res.data.message}`);
    return;
  }
  name.value = res.data.name;
  withdrawalAmount.value = res.data.fdmoney;
  balance.value = res.data.balance;
  getRate(0);
}

async function getRate(type: number) {
  const res = await save(cardId.value, type);
  rate.value = res.data.value;
  isLoading.value = false;
}

async function check() {
  const res = await accountCheck(cardId.value, password.value);
  if (res.data.status === "success") {
    localStorage.setItem("saveData", JSON.stringify(data.value));
  } else {
    alert(`密码错误: ${res.data.message}`);
    isLoading.value = false;
  }
}

async function getHistory() {
  isHistoryDivVisible.value = !isHistoryDivVisible.value;
  const res = await history(cardId.value);
  if (res.data.length !== 0) {
    Object.assign(historyList, res.data);
  } else {
    isEmpty.value = true;
  }
}
function detail(number: number) {
  console.log(historyList[number - 1]);
}
function close() {
  isHistoryDivVisible.value = !isHistoryDivVisible.value;
  isEmpty.value = false;
}

function back() {
  router.replace("/services");
}
function submit() {
  isLoading.value = true;
  data.value = {
    cardId: cardId.value,
    amount:
      serviceType.value === "deposit"
        ? depositAmount.value
        : productType.value === "current"
        ? withdrawalAmountRegular.value
        : withdrawalAmount.value,
    transactionType: serviceType.value === "deposit" ? 0 : 1,
    type: productType.value === "current" ? 0 : parseInt(term.value),
    flag: 0,
  };
  if (serviceType.value === "deposit") {
    // console.log("存款提交");
    localStorage.setItem("saveData", JSON.stringify(data.value));
    return;
  }
  // console.log("取款提交");
  if (!/^\d{6}/.test(password.value)) {
    alert("密码格式错误");
    return;
  }
  if (
    productType.value === "current" &&
    balance.value < withdrawalAmountRegular.value
  ) {
    alert("余额不足");
    isLoading.value = false;
    return;
  }
  check();
}

function help() {
  alert("Coming soon...");
}
</script>

<style scoped>
tr {
  border-bottom: 1px solid #ccc;
}

tr:last-child {
  border-bottom: none;
}

th,
td {
  padding: 5px;
}
</style>
