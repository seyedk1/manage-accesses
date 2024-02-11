<template>
  <div
    v-if="store.get_loading"
    class="parent-loading d-flex flex-grow-1 justify-content-center align-items-center"
  >
    <img
      src="@/assets/images/spinner.gif"
      class="img-fluid"
      width="200"
      alt="در حال بارگذاری"
    />
  </div>
  <template v-else>
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
          <PanelManagement :products="store.get_panels" />

          <SearchTitleAccess :categories="store.get_categories" :key="refreshKey" />
        </div>
        <!--end parent-panel-box--categories-box-->

        <!--start parent-show-selected-categories--buttons-->
        <div
          class="parent-show-selected-categories--buttons d-flex flex-column"
        >
          <ShowCategoriesDetails />

          <div
            class="parent-buttons d-flex flex-grow-1 justify-content-end my-5"
          >
            <!--start modal-->
            <v-dialog transition="dialog-top-transition" width="auto">
              <template v-slot:activator="{ props }">
                <v-btn
                  class="btn-style mx-1"
                  color="#3e2356"
                  v-bind="props"
                  :disabled="
                    store.get_role_paylod.name == '' ||
                    store.get_role_paylod.actionsId.length == 0
                      ? true
                      : false
                  "
                  @click="addRoleToDatabase()"
                  >ثبت</v-btn
                >
              </template>
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar
                    color="#3e2356"
                    title="پیام موفقیت آمیز"
                  ></v-toolbar>
                  <v-card-text>
                    <div class="text-h4 pa-12">
                      افزودن نقش با موفقیت انجام شد 😍
                    </div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn variant="text" @click="closeModal(isActive)"
                      >بستن</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            <!--end modal-->

            <v-btn class="btn-style mx-1" color="#3e2356" variant="outlined"
              >بازگشت</v-btn
            >
          </div>
        </div>
        <!--end parent-show-selected-categories--buttons-->
      </div>
    </div>
  </template>
</template>

<style src="./AddRoleView.scss" lang="scss" scoped></style>
<script src="./AddRoleView.js"></script>
