<template>
  <section id="hero" class="cursor-default">
    <div class="max-w-6xl mx-auto text-center px-10 mb-40 pt-20">
      <img
        class="scale-[.8] md:scale-75 mx-auto transition-all duration-300"
        src="@/assets/img/logo-main.png"
        alt="中国乌有银行 logo"
      />
      <!-- <h3 class="mb-8 text-4xl font-bold tracking-wide md:text-5xl">
        中 国 乌 有 银 行
      </h3> -->
      <p
        class="max-w-[26rem] mx-auto leading-9 text-center mb-16 text-lg md:text-2xl transition-all duration-300"
      >
        致力于提供创新型的金融服务和产品，以满足现代社会的多元化金融需求。
      </p>
      <div
        class="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4 mb-40 py-16"
      >
        <!-- <a
          href="#"
          class="p-4 px-8 rounded-full shadow-lg bg-[#1e90ff] text-white duration-200 hover:opacity-80"
          >储蓄业务</a
        > -->
        <!-- <a
          href="#"
          class="p-4 px-8 rounded-full shadow-lg bg-[#22a6b3] text-white duration-200 hover:opacity-80"
          >销户业务</a
        > -->
        <RouterLink
          to="/splogin"
          class="p-4 px-8 rounded-full shadow-lg bg-[#1e90ff] text-white transition-all duration-300 hover:opacity-80"
        >
          进入业务
        </RouterLink>
      </div>
    </div>
  </section>
  <section id="features" class="cursor-default">
    <div class="max-w-6xl mx-auto text-center px-10 my-20">
      <h3 class="mb-8 text-4xl font-bold md:text-5xl">富有创意与前瞻性</h3>
      <p class="section-content mb-16 text-xl">
        不断创新金融产品与服务，积极拥抱科技变革
      </p>
      <div
        class="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12"
      >
        <div class="flex flex-col items-center space-y-5">
          <img src="../assets/svg/digit.svg" alt="数字化" class="mb-6" />
          <h5 class="mb-2 text-2xl font-bold">数字化服务创新</h5>
          <p class="max-w-md text-gray-500">
            通过开发移动应用、智能客服等数字化工具，提供便捷高效的金融服务，让客户随时随地享受银行服务。
          </p>
        </div>
        <div class="flex flex-col items-center space-y-5">
          <img src="../assets/svg/tech.svg" alt="科技化" class="mb-6" />
          <h5 class="mb-2 text-2xl font-bold">金融科技应用</h5>
          <p class="max-w-md text-gray-500">
            积极运用大数据、区块链、人工智能等前沿技术，优化业务流程，提升风险防控能力，确保金融服务的安全与高效。
          </p>
        </div>
        <div class="flex flex-col items-center space-y-5">
          <img src="../assets/svg/custom.svg" alt="个性化" class="mb-6" />
          <h5 class="mb-2 text-2xl font-bold">个性化金融产品</h5>
          <p class="max-w-md text-gray-500">
            针对不同需求，推出个性化的金融产品和服务，如定制化贷款、理财方案等，满足市场的多元化需求。
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="references" class="cursor-default">
    <h3 class="mt-36 mb-14 text-4xl text-center font-bold md:text-5xl">
      友情链接
    </h3>
    <div
      class="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-6 mb-44 md:flex-row md:space-y-0"
    >
      <a href="https://www.boc.cn/" target="_blank">
        <img src="https://www.boc.cn/images/boc2013_logo.png" alt="中国银行" />
      </a>
      <a href="https://www.icbc.com.cn/" target="_blank"
        ><img
          src="https://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/logo.png"
          alt="中国工商银行"
      /></a>
      <a href="http://www.ccb.com/" target="_blank"
        ><img
          src="https://image4.ccb.com/cn/home/company/v3/images/img/20150828_1440745919/20151201084052927594.png"
          alt="中国建设银行"
      /></a>
      <a href="http://www.bankcomm.com/" target="_blank"
        ><img
          src="https://www.bankcomm.com/BankCommSite/shtml/jyjr/cn/images/logo_img.png"
          alt="中国交通银行"
      /></a>
    </div>
  </section>
  <footer class="bg-gray-50 cursor-default">
    <div class="max-w-6xl h-16 mx-auto text-center px-10">
      <div class="w-full pt-4">版权所有：南昌乌有网络科技有限公司</div>
    </div>
  </footer>
</template>

<script setup lang="ts" name="Home"></script>

<style scoped></style>
