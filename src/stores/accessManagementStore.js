import { defineStore } from "pinia";
import {
  getAllPanels,
  getAllCategories,
  getAllActions,
} from "@/service/accessManagementService";
export const useAccessManagementStore = defineStore("accessManagement", {
  state: () => ({
    selectedPanel: 1,
    selectedCategories: [],
    panels: [],
    categories: [],
    actions: [],
  }),

  getters: {
    get_selected_panel: (state) => state.selectedPanel,
    get_selected_categories: (state) => state.selectedCategories,
    get_panels: (state) => state.panels,
    get_categories: (state) => state.categories,
    get_actions: (state) => state.actions,
  },

  actions: {
    set_select_panel_action(productId) {
      return (this.selectedPanel = productId);
    },

    set_select_categories_action(categoriesId) {
      return (this.selectedCategories = categoriesId);
    },

    async get_products_action() {
      try {
        const { data: panelsData } = await getAllPanels();
        this.panels = panelsData;
        return panelsData;
      } catch (err) {
        console.log("err in get_products_action: ", err);
        return err;
      }
    },
    async get_categories_action(productId) {
      try {
        const { data: categoriesData } = await getAllCategories();
        console.log("daataa: ", { categoriesData, productId });
        this.categories = categoriesData.filter(
          (category) => category.productId == productId
        );
        return this.categories;
      } catch (err) {
        console.log("err in get_categories_action: ", err);
        return err;
      }
    },

    async get_actions_action(categoriesId) {
      try {
        console.log("categoriesId chiye toosh: ", categoriesId);
        if (categoriesId == "[]") {
          console.log("mige hichi too araye nist");
          this.actions = [];
        } else {
          const { data: actionsData } = await getAllActions();
          console.log("actions_action: ", {
            actionsData,
            categoriesId: JSON.parse(categoriesId),
          });
          let actionsWithoutSort = [];
          let categoryName = "";
          actionsData.filter((obj) => {
            // Check if product._id matches the target productId
            // const isProductIdMatch = obj.product._id == this.selectedPanel;
            // console.log('is productId match? ', isProductIdMatch)

            // Check if category is in the array of categoriesId
            const isCategoryMatch = JSON.parse(categoriesId).some((el) => {
              console.log("compare: ", el.value);
              console.log("compare: ", obj.category);
              if (el.value == obj.category) {
                console.log("nameee: ", el.name);
                categoryName = el.name;
              }
              return el.value == obj.category;
            });

            console.log("isCategoryMatch chi: ", isCategoryMatch);
            console.log("-----------------------------");

            if (isCategoryMatch) {
              console.log("ok bud: ", obj);
              actionsWithoutSort.push({ ...obj, categoryName });
            }
          });
          return actionsWithoutSort;
        }
      } catch (err) {
        console.log("err in get_actions_action: ", err);
        return err;
      }
    },

    mix_items_action(array) {
      const transformedArray = array.reduce((acc, obj) => {
        const existingCategory = acc.find(
          (item) =>
            item.category === obj.category &&
            item.categoryName === obj.categoryName
        );

        if (existingCategory) {
          existingCategory.actionsData.push({
            _id: obj._id,
            level: obj.level,
            name: obj.name,
          });
          // existingCategory.actionsData.sort((a, b) => b.level - a.level);
        } else {
          acc.push({
            category: obj.category,
            categoryName: obj.categoryName,
            level: obj.level,
            name: obj.name,
            actionsData: [{ _id: obj._id, level: obj.level, name: obj.name }],
          });
        }
        this.actions = acc;
        return acc;
      }, []);

      return transformedArray;
    },
  },
});
