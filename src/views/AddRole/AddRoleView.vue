<template>
  <v-app-bar color="#3e2356" :elevation="2"></v-app-bar>
  <div class="add-role-page-container container">
    <div
      class="up-page-content d-flex flex-grow-1 justify-content-between align-items-center"
    >
      <RoleManagementHeader />
    </div>
    <div class="down-page-content d-flex">
      <!--start parent-panel-box--categories-box-->
      <div class="parent-panel-box--categories-box d-flex">
        <PanelManagement />

        <SearchTitleAccess />
      </div>
      <!--end parent-panel-box--categories-box-->

      <!--start parent-show-selected-categories--buttons-->
      <div class="parent-show-selected-categories--buttons d-flex flex-column">
        <ShowCategoriesDetails />

        <div class="parent-buttons d-flex flex-grow-1 justify-content-end my-5">
          <v-btn class="btn-style mx-1" color="#3e2356">ثبت</v-btn>
          <v-btn class="btn-style mx-1" color="#3e2356" variant="outlined"
            >بازگشت</v-btn
          >
        </div>
      </div>
      <!--end parent-show-selected-categories--buttons-->
    </div>
  </div>
</template>

<style src="./AddRoleView.scss" lang="scss" scoped></style>
<script src="./AddRoleView.js"></script>
