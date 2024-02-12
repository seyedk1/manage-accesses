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
      <span class="category-name-style"> {{ item.categoryName }} </span>
      <svg-icon
        type="mdi"
        :path="chevronPath"
        @click="displayDetails(i)"
        class="chevron-down-style"
      ></svg-icon>
      <span class="line"></span>

      <v-radio-group
        inline
        color="#3e2356"
        v-model="selectedRadioBtns[i]"
        hide-details
        class="parent-radio-group"
      >
        <v-radio
          :value="{ levelAccess: radioBtn.value, actionData: item.actionsData }"
          class="parent-radio-text"
          @click="handleRadioClick(i)"
          v-for="(radioBtn, k) in radioBtns"
          :key="k"
        >
          <template v-slot:label>
            <span class="custom-radio-label"> {{ radioBtn.text }} </span>
          </template>
        </v-radio>
      </v-radio-group>
    </div>
    <div
      class="show-selected-categories-details d-flex"
      :class="displayDetailsFlag[i] ? 'show-details' : 'hide-details'"
    >
      <ul class="ul-style d-flex flex-grow-1">
        <li
          v-for="(action, j) in item.actionsData"
          :key="j"
          class="li-style col-sm-4 col-3"
        >
          {{ action.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style src="./ShowCategoriesDetails.scss" lang="scss" scoped></style>
<script src="./ShowCategoriesDetails.js"></script>
