<template>
  <div class="parent-categories-box d-flex flex-column">
    <div class="parent-search-text-input mb-3">
      <v-text-field
        label="جستجوی عنوان دسترسی"
        prepend-inner-icon="mdi-magnify"
        variant="underlined"
        class="search-input-style"
        color="#ced1d4"
        base-color="#ced1d4"
      ></v-text-field>
    </div>

    <div class="parent-categories-checkbox">
      <div class="parent-each-checkbox-row">
        <v-expansion-panels>
          <v-expansion-panel
            elevation="0"
            bg-color="transparent"
            selected-class="active-item"
            class="custom-row"
          >
            <v-expansion-panel-title>
              <v-checkbox
                label="دسته بندی"
                color="#3e2356"
                hide-details
              ></v-checkbox>
            </v-expansion-panel-title>
            <hr style="margin-top: 0" />
            <v-expansion-panel-text>
              <v-checkbox
                label="دسته بندی 1-1"
                color="#3e2356"
                hide-details
              ></v-checkbox>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<style src="./SearchTitleAccess.scss" lang="scss" scoped></style>
<script src="./SearchTitleAccess.js"></script>
