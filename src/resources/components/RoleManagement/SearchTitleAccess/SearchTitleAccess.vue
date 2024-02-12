<template>
  <div class="parent-categories-box d-flex flex-column">
    <div class="parent-search-text-input mb-3">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        variant="underlined"
        class="search-input-style"
        color="#ced1d4"
        base-color="#ced1d4"
      >
        <template v-slot:label>
          <span style="font-size: 14px"> جستجوی عنوان دسترسی</span>
        </template>
      </v-text-field>
    </div>

    <div class="parent-categories-checkbox">
      <div class="parent-each-checkbox-row">
        <v-expansion-panels
          v-for="(firstCategoryChild, i) in categories"
          :key="i"
        >
          <div
            class="d-flex flex-grow-1 flex-column"
            v-if="firstCategoryChild.children.length == 0"
          >
            <v-checkbox
              :label="firstCategoryChild.name"
              :value="{
                name: firstCategoryChild.name,
                value: firstCategoryChild.id,
              }"
              v-model="selected"
              color="#3e2356"
              hide-details
            ></v-checkbox>
            <span
              style="height: 1px; background-color: #c9c9c9; width: 100%"
            ></span>
          </div>

          <v-expansion-panel v-else elevation="0" bg-color="transparent">
            <v-expansion-panel-title class="d-flex flex-grow-1 custom-title">
              <v-checkbox
                :label="firstCategoryChild.name"
                :value="{
                  name: firstCategoryChild.name,
                  value: firstCategoryChild.id,
                }"
                v-model="selected"
                color="#3e2356"
                hide-details
              ></v-checkbox>
            </v-expansion-panel-title>
            <span
              style="
                display: block;
                height: 1px;
                background-color: #c9c9c9;
                width: 100%;
              "
            ></span>
            <v-expansion-panel-text class="custom-style" :eager="true">
              <v-expansion-panels
                v-for="(secondCategoryChild, j) in firstCategoryChild.children"
                :key="j + '_' + i"
              >
                <div
                  class="d-flex flex-grow-1 flex-column"
                  v-if="secondCategoryChild.children.length == 0"
                >
                  <v-checkbox
                    :label="secondCategoryChild.name"
                    :value="{
                      name: secondCategoryChild.name,
                      value: secondCategoryChild.id,
                    }"
                    v-model="selected"
                    color="#3e2356"
                    hide-details
                  ></v-checkbox>
                  <span
                    style="
                      display: block;
                      height: 1px;
                      background-color: #c9c9c9;
                      width: 100%;
                    "
                  ></span>
                </div>

                <v-expansion-panel v-else elevation="0" bg-color="transparent">
                  <v-expansion-panel-title
                    class="d-flex flex-grow-1 custom-title"
                  >
                    <v-checkbox
                      :label="secondCategoryChild.name"
                      :value="{
                        name: secondCategoryChild.name,
                        value: secondCategoryChild.id,
                      }"
                      v-model="selected"
                      color="#3e2356"
                      hide-details
                    ></v-checkbox>
                  </v-expansion-panel-title>
                  <span
                    style="
                      display: block;
                      height: 1px;
                      background-color: #c9c9c9;
                      width: 100%;
                    "
                  ></span>
                  <v-expansion-panel-text>
                    <!--start third-->
                    <v-expansion-panels
                      v-for="(
                        thirdCategoryChild, k
                      ) in secondCategoryChild.children"
                      :key="k + '_' + j + '_' + i"
                    >
                      <div class="d-flex flex-grow-1 flex-column">
                        <v-checkbox
                          :label="thirdCategoryChild.name"
                          :value="{
                            name: thirdCategoryChild.name,
                            value: thirdCategoryChild.id,
                          }"
                          v-model="selected"
                          color="#3e2356"
                          hide-details
                        ></v-checkbox>
                        <span
                          style="
                            display: block;
                            height: 1px;
                            background-color: #c9c9c9;
                            width: 100%;
                          "
                        ></span>
                      </div>
                    </v-expansion-panels>
                    <!--third-->
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<style src="./SearchTitleAccess.scss" lang="scss" scoped></style>
<script src="./SearchTitleAccess.js"></script>