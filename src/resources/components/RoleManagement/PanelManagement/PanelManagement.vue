<template>
  <!--start parent-panel-box-->
  <div class="parent-panel-box d-flex flex-column">
    <!--start each-panel-box-->
    <div class="each-panel-box my-2" v-for="i in 3" :key="i">
      <span class="panel-text">پنل {{ i }}</span>
      <span class="triangle"></span>
    </div>
    <!--end each-panel-box-->
  </div>
  <!--end parent-panel-box-->
</template>

<style src="./PanelManagement.scss" lang="scss" scoped></style>
<script src="./PanelManagement.js"></script>

