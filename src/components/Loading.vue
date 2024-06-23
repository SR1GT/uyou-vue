<template>
  <div
    class="absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-80 z-10"
  >
    <div
      class="flex flex-col justify-center items-center gap-12 p-12 rounded-lg"
    >
      <div id="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p class="text-xl text-white font-bold tracking-widest">正在处理</p>
    </div>
  </div>
</template>

<script setup lang="ts" name="Loading"></script>

<style scoped>
#loader {
  width: 150px;
  height: 150px;
  perspective: 600px;
}

span {
  position: absolute;
  border: 10px solid #0071bc;
  border-radius: 4px;
}

span:before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 10px;
  height: 50%;
  background: #26cff0;
}

span:after {
  content: "";
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 10px;
  height: 50%;
  background: #26cff0;
}

span:nth-child(1) {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: customAnimation 8s linear infinite;
}

span:nth-child(2) {
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  animation: customAnimation 4s linear infinite;
}

span:nth-child(3) {
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  animation: customAnimation 2s linear infinite;
}

@keyframes customAnimation {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
</style>
