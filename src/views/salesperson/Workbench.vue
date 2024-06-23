<template>
  <div class="min-h-screen">
    <header
      class="flex justify-between items-center w-full h-[6vh] px-6 border-b border-black bg-gray-200"
    >
      <p>中国乌有银行 · <strong>工作台</strong></p>
      <div class="flex justify-center items-center gap-2">
        <p>工号: <span>1234</span></p>
        <p>|</p>
        <button
          class="px-3 bg-red-500 text-white duration-100 hover:opacity-80 rounded-full"
          @click="quit()"
        >
          退出
        </button>
      </div>
    </header>
    <main class="flex w-full h-[94vh]">
      <div
        ref="left"
        class="flex flex-col justify-start items-start w-1/3 h-full bg-gray-100 text-center"
      >
        <h2 class="w-full py-4 text-center text-2xl font-bold">业务流程提示</h2>
        <section
          class="service flex justify-between items-center w-full px-6 py-4 border-r-8 cursor-default"
        >
          <div class="flex items-center gap-2 text-xl font-bold">
            <svg
              class="icon"
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
                d="M787.439 974.486c-31.52 0-61.274-6-89.377-17.985-28.125-11.92-52.668-28.368-73.62-49.353-20.947-20.842-37.459-45.374-49.443-73.434-11.97-28.04-17.983-57.729-17.983-89.16 0-31.413 6.014-61.101 17.983-89.083 11.968-28.04 28.474-52.353 49.443-72.94 20.952-20.55 45.495-36.808 73.62-48.787 28.103-11.904 57.858-17.905 89.377-17.905 31.465 0 61.258 6 89.302 17.905 28.123 11.98 52.434 28.237 73.067 48.786 20.58 20.588 36.89 44.901 48.896 72.941 11.969 27.982 17.983 57.67 17.983 89.082 0 31.432-6.014 61.121-17.983 89.16-12.006 28.061-28.315 52.593-48.896 73.435-20.633 20.963-44.944 37.416-73.067 49.353-28.044 11.984-57.858 17.985-89.302 17.985zM900.912 707.57h-83.13V630.22c0-10.474-3.377-19.431-10.14-26.869-6.758-7.505-15.385-11.231-25.86-11.231-10.456 0-18.711 3.726-24.725 11.231-5.972 7.438-9.021 16.395-9.021 26.869v77.351h-73.01c-10.476 0-19.475 3.71-26.944 11.237-7.522 7.452-11.241 16.475-11.241 26.885 0 10.526 3.72 18.313 11.241 23.55 7.47 5.236 16.468 7.824 26.944 7.824h73.01v79.667c0 10.473 3.049 19.416 9.02 26.943 6.015 7.452 14.27 11.158 24.725 11.158 10.476 0 19.119-3.706 25.86-11.158 6.764-7.527 10.142-16.47 10.142-26.943v-79.667h83.13v2.273c10.455 0 19.417-3.02 26.965-8.941 7.485-6 11.22-14.195 11.22-24.728 0-10.41-3.735-19.431-11.22-26.885-7.548-7.505-16.51-11.215-26.966-11.215zM623.305 428.348c-2.97 11.98-5.976 22.883-8.946 32.588-3.024 8.2-6.779 16.612-11.257 25.22-4.564 8.587-9.377 15.133-14.583 19.628-6.842 5.253-11.438 10.823-14.073 16.803-2.671 6-4.892 12.138-6.762 18.45a498.937 498.937 0 0 1-6.19 19.629c-2.24 6.784-5.971 13.452-11.198 20.179-17.239 22.47-30.191 44.117-38.776 65.038-8.67 20.943-14.641 41.159-18.025 60.575-3.358 19.41-4.281 38.726-2.79 57.707a333.259 333.259 0 0 0 8.985 55.529c3.007 13.453 7.469 27.436 13.52 42.06 5.977 14.592 14.778 29.471 26.371 44.848 11.597 15.35 26.456 30.313 44.439 44.843 17.94 14.587 40.443 28.59 67.404 42.038-17.998 3.785-38.967 7.16-62.889 10.119-20.262 2.216-45.177 4.277-74.757 6.137-29.596 1.924-63.457 2.825-101.723 2.825-19.512 0-42.154-0.688-67.994-2.258-25.845-1.446-52.434-3.312-79.83-5.564-27.338-2.216-54.299-4.903-80.908-7.867-26.59-2.958-50.958-6.133-73.068-9.509-22.09-3.37-40.8-6.88-56.11-10.664-15.369-3.726-24.958-7.098-28.672-10.082-6.762-6-12.006-22.57-15.783-49.863-3.772-27.297-2.592-63.06 3.4-107.14 3.735-24.669 13.659-43.55 29.792-56.572 16.119-13.077 34.983-23.413 56.758-30.866a990.75 990.75 0 0 1 67.979-20.741c23.624-6.334 44.433-15.138 62.357-26.339 14.27-9.015 25.097-17.412 32.624-25.273 7.506-7.844 12.734-15.922 15.72-24.102 2.99-8.194 4.483-16.881 4.483-25.765 0-8.937-0.371-18.722-1.099-29.116-1.515-15.806-6.96-28.062-16.294-37.077-9.355-8.964-19.257-17.905-29.771-26.885-5.998-4.473-11.24-11.216-15.746-20.18-4.5-8.942-8.25-17.565-11.22-25.743-3.755-9.707-6.762-20.61-9-32.589-5.27-1.452-10.119-3.71-14.64-6.69-3.697-2.956-7.863-7.43-12.362-13.43-4.463-6-8.606-14.96-12.342-26.944-3.776-11.231-5.11-21.647-3.93-31.432 1.157-9.705 3.144-17.9 6.151-24.668 2.987-8.195 7.151-15.293 12.4-21.293 0-25.41 1.434-50.842 4.5-76.275 2.948-21.653 7.623-44.769 14.029-69.517 6.37-24.663 16.67-46.703 30.92-66.134 13.44-18.669 27.921-34.04 43.21-45.967C283 34.04 298.937 24.668 315.406 17.98c16.51-6.742 32.996-11.428 49.486-14.057C381.36 1.293 397.084 0 412.077 0c19.475 0 38.244 2.273 56.205 6.747 17.983 4.49 34.59 10.469 49.996 17.92 15.353 7.433 29.026 15.925 40.996 25.216 11.99 9.372 21.717 18.944 29.261 28.67 17.18 21.627 29.798 45.607 37.64 71.707 7.878 26.18 13.614 50.863 17.392 73.984 3.771 26.938 5.243 53.88 4.537 80.744 4.462 3.784 8.197 8.258 11.204 13.496 2.985 4.489 5.264 10.41 6.72 17.9 1.53 7.452 1.53 16.802 0 28.061-1.456 14.195-4.463 25.41-8.983 33.626-4.5 8.275-9.356 14.588-14.62 19.082-5.992 5.274-12.363 8.98-19.12 11.195z"
              ></path>
            </svg>
            开户业务
          </div>
          <span class="hidden">当前业务</span>
        </section>
        <section
          class="description grid grid-cols-4 items-start gap-2 w-full px-8 py-4 cursor-default hidden"
        >
          <div class="flex flex-col justify-center items-center gap-4">
            <div
              class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
            >
              1
            </div>
            <span>储户填写表单</span>
          </div>
          <div class="flex flex-col justify-center items-center gap-4">
            <div
              class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
            >
              2
            </div>
            <span>确认表单</span>
          </div>
          <div class="flex flex-col justify-center items-center gap-4">
            <div
              class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
            >
              3
            </div>
            <span>分配银行卡号</span>
          </div>
          <div class="flex flex-col justify-center items-center gap-4">
            <div
              class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
            >
              4
            </div>
            <span>告知储户卡号</span>
          </div>
        </section>

        <section
          class="service flex justify-between items-center w-full px-6 py-4 border-r-8 cursor-default"
        >
          <div class="flex items-center gap-2 text-xl font-bold">
            <svg
              class="icon"
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
                d="M977.454545 372.363636v438.272a62.060606 62.060606 0 0 1-62.060606 62.060606H108.606061a62.060606 62.060606 0 0 1-62.060606-62.060606V372.363636h930.90909z m-145.066666 105.068606l-2.699637 2.792728-55.016727 64.698182-52.441212-64.232728-2.668606-2.854788a31.030303 31.030303 0 0 0-47.693576 38.974061l2.296243 3.165091 47.290181 57.933576H698.181818l-3.630545 0.217212a31.030303 31.030303 0 0 0 0 61.657212l3.630545 0.186182h46.545455v15.515151H698.181818l-3.630545 0.217212a31.030303 31.030303 0 0 0 0 61.657212l3.630545 0.186182h46.545455v62.060606l0.217212 3.630546a31.030303 31.030303 0 0 0 61.626182 0l0.217212-3.630546v-62.060606H853.333333l3.630546-0.186182a31.030303 31.030303 0 0 0 0-61.657212L853.333333 655.484121h-46.545454v-15.515151H853.333333l3.630546-0.186182a31.030303 31.030303 0 0 0 0-61.657212L853.333333 577.908364h-25.196606l48.841697-57.468122 2.327273-3.10303a31.030303 31.030303 0 0 0-46.917818-39.90497zM46.545455 190.029576a62.060606 62.060606 0 0 1 62.060606-62.060606h806.787878a62.060606 62.060606 0 0 1 62.060606 62.060606V310.30303H46.545455V190.029576z"
              ></path>
            </svg>
            储蓄业务
          </div>
          <span class="hidden">当前业务</span>
        </section>
        <section
          class="description flex flex-col justify-center items-start gap-4 px-8 py-4 cursor-default hidden"
        >
          <div class="grid grid-cols-5 items-start gap-2 w-full">
            <div class="flex flex-col justify-center items-center gap-4">
              <div
                class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
              >
                1
              </div>
              <span>储户填写表单</span>
            </div>
            <div class="flex flex-col justify-center items-center gap-4">
              <div
                class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
              >
                2
              </div>
              <span>确认表单</span>
            </div>
            <div class="flex flex-col justify-center items-center gap-4">
              <div
                class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
              >
                3
              </div>
              <span>现金交易</span>
            </div>
            <div class="flex flex-col justify-center items-center gap-4">
              <div
                class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
              >
                4
              </div>
              <span>提交表单</span>
            </div>
            <div class="flex flex-col justify-center items-center gap-4">
              <div
                class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
              >
                5
              </div>
              <span>告知储户结果</span>
            </div>
          </div>
          <p class="text-sm">注意: 定期业务仅支持<strong>整存整取</strong></p>
        </section>

        <section
          class="service flex justify-between items-center w-full px-6 py-4 border-r-8 cursor-default"
        >
          <div class="flex items-center gap-2 text-xl font-bold">
            <svg
              class="icon"
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
                d="M608.256 1024H100.16256C44.928 1024 0 990.14656 0 934.85056V910.848c0-50.62656 37.31456-95.55456 84.992-112.64l203.904-90.81856s55.23456-16.96256 70.4-33.92c10.112-11.25888 13.184-48.512 0.45056-72.89344-12.8-24.38656-116.096-158.848-116.096-271.488C243.64544 147.328 363.20256 0 510.72 0c147.456 0 267.06944 147.328 267.06944 329.088 0 72.00256-43.45344 148.48-79.36 204.288-110.14144 43.776-186.42944 150.528-186.42944 278.016 0 83.2 36.80256 159.36 96.256 212.608z"
              ></path>
              <path
                d="M799.98976 800m-224 0a224 224 0 1 0 448 0 224 224 0 1 0-448 0Z"
              ></path>
              <path
                d="M727.61856 904.92928h-1.88928c-0.23552-0.08704-0.4608-0.18432-0.71168-0.22016a11.96544 11.96544 0 0 1-6.57408-3.52768c-1.91488-1.9456-3.90144-3.82464-5.8624-5.72416-5.53984-5.41184-11.06432-10.81344-16.60416-16.21504a10.61888 10.61888 0 0 1-3.1744-5.83168c-0.06144-0.32768-0.22528-0.62976-0.34304-0.9472v-1.8432c0.11776-0.31232 0.28672-0.62464 0.34304-0.93696 0.40448-2.23232 1.43872-4.1216 3.06688-5.7088 0.3328-0.31232 0.6656-0.65024 0.9984-0.9728l63.72352-62.19776c0.28672-0.2816 0.54784-0.55296 0.93184-0.92672-0.34304-0.29696-0.62976-0.48128-0.88064-0.72704-21.30432-20.79232-42.62912-41.58976-63.92832-62.3872-0.32256-0.31232-0.62976-0.6144-0.92672-0.91648a10.47552 10.47552 0 0 1-2.97472-5.5552c-0.06144-0.32256-0.23552-0.62976-0.35328-0.92672v-2.03264c0.11776-0.31744 0.29696-0.6144 0.35328-0.91648 0.41984-2.10944 1.37216-3.96288 2.91328-5.48864 7.78752-7.62368 15.58528-15.22176 23.39328-22.8096a10.33216 10.33216 0 0 1 5.1456-2.7392l1.4592-0.31232h1.88928c0.1792 0.0512 0.3584 0.12288 0.53248 0.14848 1.664 0.15872 3.2 0.72192 4.56704 1.64352 0.80896 0.55808 1.57184 1.21856 2.28352 1.90464l64.19968 62.64832c0.27648 0.2816 0.56832 0.54784 0.95232 0.91136 0.3328-0.3584 0.58368-0.67584 0.8704-0.96256 21.22752-20.736 42.48576-41.48224 63.72352-62.19776l0.9984-0.96768a11.008 11.008 0 0 1 5.41184-2.85696c0.4608-0.09728 0.92672-0.17408 1.38752-0.27136h1.88928l1.26976 0.256c2.1504 0.45568 3.97824 1.46432 5.5296 2.9696 7.6544 7.47008 15.29344 14.94528 22.9632 22.40512 0.1536 0.15872 0.31232 0.30208 0.4608 0.46592 1.47456 1.65888 2.51904 3.51744 2.688 5.75488 0.01024 0.13312 0.09728 0.26624 0.1536 0.41472v2.03264c-0.10752 0.53248-0.18944 1.05984-0.31232 1.5872-0.52736 2.06336-1.6384 3.75296-3.1744 5.24288-21.48864 20.9664-42.98752 41.93792-64.46592 62.91456-0.27136 0.27136-0.60416 0.44544-0.96256 0.71168 0.44032 0.44544 0.72704 0.72192 1.00864 0.9984l63.85664 62.32576c0.43008 0.41984 0.85504 0.80896 1.25952 1.2544 1.46432 1.63328 2.47296 3.47136 2.64192 5.69344 0.01024 0.17408 0.09728 0.3328 0.1536 0.52224v1.8432c-0.10752 0.57344-0.18944 1.152-0.32256 1.71008a10.65984 10.65984 0 0 1-3.0464 5.10464c-4.59776 4.46464-9.1648 8.94464-13.76256 13.40928-3.00544 2.93376-6.00064 5.85728-9.00096 8.8064-1.6384 1.60256-3.56352 2.69312-5.86752 3.1232-0.35328 0.06656-0.70144 0.19456-1.07008 0.31232h-2.07872c-0.25088-0.09728-0.512-0.20992-0.78336-0.256a11.8528 11.8528 0 0 1-6.25152-3.36384c-21.44256-20.95104-42.90048-41.89696-64.36864-62.848-0.27648-0.26624-0.45056-0.60416-0.7168-0.94208-0.42496 0.4096-0.67584 0.62976-0.91648 0.87552l-64.04608 62.49984c-0.31232 0.31232-0.61952 0.6144-0.94208 0.90112a10.84928 10.84928 0 0 1-5.33504 2.7904c-0.46592 0.09216-0.91648 0.22528-1.37216 0.34816z"
                fill="#fff"
              ></path>
            </svg>
            注销业务
          </div>
          <span class="hidden">当前业务</span>
        </section>
        <section
          class="description grid grid-cols-4 items-start gap-2 w-full px-8 py-4 cursor-default hidden"
        >
          <div class="flex flex-col justify-center items-center gap-4">
            <div
              class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
            >
              1
            </div>
            <span>储户填写表单</span>
          </div>
          <div class="flex flex-col justify-center items-center gap-4">
            <div
              class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
            >
              2
            </div>
            <span>确认表单</span>
          </div>
          <div class="flex flex-col justify-center items-center gap-4">
            <div
              class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
            >
              3
            </div>
            <span>等待注销结果</span>
          </div>
          <div class="flex flex-col justify-center items-center gap-4">
            <div
              class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white"
            >
              4
            </div>
            <span>告知储户结果</span>
          </div>
          <!-- <div class="flex flex-col justify-center items-center gap-4">
            <div class="flex justify-center items-center w-8 aspect-square rounded-full border border-[#0071BC] bg-[#0071BC] text-white">5</div>
            <span>步骤5</span>
          </div> -->
        </section>
      </div>
      <div ref="right" class="w-2/3 h-full bg-white">
        <RouterView />
      </div>
    </main>
  </div>
  <Teleport to="body">
    <Loading v-show="isLoading" />
  </Teleport>
</template>

<script setup lang="ts" name="Workbench">
import Loading from "@/components/Loading.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoading = ref(false);

const left = ref();
const right = ref();

const currentService = ref(0);

window.addEventListener("storage", (e) => {
  if (e.key === "currentService") {
    const item = e.newValue;
    if (item !== null) {
      currentService.value = parseInt(item);
    }
  }
});

function quit() {
  localStorage.removeItem("operatorId");
  router.replace("/");
}

watch(currentService, (newValue, oldValue) => {
  const services = left.value.querySelectorAll(".service");
  const descriptions = left.value.querySelectorAll(".description");

  if (newValue === 0) {
    router.replace("/salesperson");
  } else {
    const newElement = services[newValue - 1];
    newElement.classList.add("border-r-[#0071BC]", "bg-[#26CFF0]");
    newElement.querySelector("span").classList.remove("hidden");
    descriptions[newValue - 1].classList.remove("hidden");
    switch (newValue) {
      case 1:
        router.replace("/salesperson/oas");
        break;
      case 2:
        router.replace("/salesperson/ss");
        break;
      case 3:
        router.replace("/salesperson/cas");
        break;
      default:
        router.replace("/salesperson");
        break;
    }
  }

  if (oldValue !== 0) {
    const oldElement = services[oldValue - 1];
    oldElement.classList.remove("border-r-[#0071BC]", "bg-[#26CFF0]");
    oldElement.querySelector("span").classList.add("hidden");
    descriptions[oldValue - 1].classList.add("hidden");
  }
});
</script>

<style scoped></style>
