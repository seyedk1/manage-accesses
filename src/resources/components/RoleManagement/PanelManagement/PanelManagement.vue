<template>
  <!--start parent-panel-box-->
  <div class="parent-panel-box d-flex flex-column">
    <!--start each-panel-box-->
    <div
      class="each-panel-box my-2"
      v-for="(item, index) in products"
      :key="index"
      @click="selectedPanel(item._id)"
    >
      <span
        :class="
          store.get_selected_panel == item._id ? 'panel-text' : 'inactive-panel'
        "
        >{{ item.name }}</span
      >
      <span class="triangle"></span>
    </div>
    <!--end each-panel-box-->
  </div>
  <!--end parent-panel-box-->
</template>

<style src="./PanelManagement.scss" lang="scss" scoped></style>
<script src="./PanelManagement.js"></script>
