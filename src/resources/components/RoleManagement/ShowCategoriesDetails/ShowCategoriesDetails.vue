<template>
  <div
    class="parent-show-selected-categories d-flex flex-column my-4"
    v-for="i in 4"
    :key="i"
  >
    <div
      class="show-selected-categories-title d-flex flex-grow-1 align-items-center"
    >
      <span>دسته بندی {{ i }}</span>
      <svg-icon
        type="mdi"
        :path="chevronPath"
        @click="displayDetails(i - 1)"
        class="chevron-down-style"
      ></svg-icon>
      <span class="line"></span>
      <v-radio-group inline color="#3e2356" hide-details>
        <v-radio value="100" class="parent-radio-text">
          <template v-slot:label>
            <span class="custom-radio-label"> دسترسی انتشار </span>
          </template>
        </v-radio>
        <v-radio value="200" class="parent-radio-text">
          <template v-slot:label>
            <span class="custom-radio-label"> دسترسی ویرایش </span>
          </template>
        </v-radio>
        <v-radio value="300" class="parent-radio-text">
          <template v-slot:label>
            <span class="custom-radio-label"> دسترسی مشاهده </span>
          </template>
        </v-radio>
      </v-radio-group>
    </div>
    <div
      class="show-selected-categories-details d-flex"
      :class="flag[i] ? 'hide-details' : 'show-details'"
    >
      <ul class="ul-style d-flex">
        <li v-for="j in 12" class="li-style col-md-4">دسترسی {{ j }}</li>
      </ul>
    </div>
  </div>
</template>

<style src="./ShowCategoriesDetails.scss" lang="scss" scoped></style>
<script src="./ShowCategoriesDetails.js"></script>
