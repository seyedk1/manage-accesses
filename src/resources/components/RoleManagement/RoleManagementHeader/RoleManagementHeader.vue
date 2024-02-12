<template>
  <div class="parent-title-icon--text-input d-flex align-items-center">
    <div class="parent-title-icon d-flex">
      <svg-icon type="mdi" :path="path" class="icon-style"></svg-icon>
      <p class="title-style mr-1">
        لیست نقش ها / <span class="active">افزودن نقش</span>
      </p>
    </div>

    <div class="parent-text-inputs d-flex">
      <v-text-field
        density="compact"
        v-model="store.get_role_paylod.name"
        variant="outlined"
        single-line
        class="text-input-style ml-2"
        bg-color="#f9f9f9"
        color="#ced1d4"
        base-color="#ced1d4"
      >
        <template v-slot:label>
          <span style="font-size: 14px"> نام نقش</span>
        </template>
      </v-text-field>
      <v-text-field
        density="compact"
        v-model="store.get_role_paylod.description"
        single-line
        variant="outlined"
        class="text-input-style"
        bg-color="#f9f9f9"
        color="#ced1d4"
        base-color="#ced1d4"
      >
        <template v-slot:label>
          <span style="font-size: 14px"> توضیحات</span>
        </template>
      </v-text-field>
    </div>
  </div>

  <div class="parent-toggle-activate d-inline-block">
    <v-switch
      label="غیر فعال"
      v-model="activeFlag"
      color="#3e2356"
      :value="true"
      hide-details
    ></v-switch>
  </div>
</template>

<style src="./RoleManagementHeader.scss" lang="scss" scoped></style>
<script src="./RoleManagementHeader.js"></script>
