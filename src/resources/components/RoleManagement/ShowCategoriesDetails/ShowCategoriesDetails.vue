<template>
  <template v-if="store.get_actions.length == 0">
    <div class="d-flex flex-grow-1 justify-content-center no-found-style">
      <img src="@/assets/images/no-found.gif" alt="پیدا نشدن" class="w-25" />
    </div>
  </template>

  <div
    v-else
    class="parent-show-selected-categories d-flex flex-column my-4"
    v-for="(item, i) in store.get_actions"
    :key="i"
  >
    <div
      class="show-selected-categories-title d-flex flex-grow-1 align-items-center"
    >
      <span> {{ item.categoryName }} </span>
      <svg-icon
        type="mdi"
        :path="chevronPath"
        @click="displayDetails(i)"
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
      <ul class="ul-style d-flex flex-grow-1">
        <li
          v-for="(action, j) in item.actionsData"
          :key="j"
          class="li-style col-md-4"
        >
          {{ action.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style src="./ShowCategoriesDetails.scss" lang="scss" scoped></style>
<script src="./ShowCategoriesDetails.js"></script>
