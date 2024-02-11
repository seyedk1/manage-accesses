<template>
  <div
    class="parent-not-found d-flex flex-grow-1 justify-content-center align-items-center flex-column"
  >
    <div class="parent-img d-flex justify-content-center w-75">
      <img
        src="@/assets/images/no-found.gif"
        class="img-fluid"
        width="300"
        alt="پیدا نشدن"
      />
    </div>
    <v-btn
      class="my-3 back-main-page-btn"
      color="#3e2356"
      @click="$router.push({ name: 'addRole' })"
      >برگشت به صفحه افزودن نقش</v-btn
    >
  </div>
</template>

<style src="./NotFound.scss" lang="scss"></style>
<script src="./NotFound.js"></script>
