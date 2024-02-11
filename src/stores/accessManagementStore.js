import { defineStore } from "pinia";
import {
  getAllPanels,
  getAllCategories,
  getAllActions,
  addRoleToDb,
} from "@/service/accessManagementService";
export const useAccessManagementStore = defineStore("accessManagement", {
  state: () => ({
    selectedPanel: 1,
    token: localStorage.getItem("token") || "",
    selectedCategories: [],
    panels: [],
    categories: [],
    actions: [],
    rolePaylod: {
      name: "",
      description: "",
      active: false,
      actionsId: [],
    },
    loading: false,
  }),

  getters: {
    get_token: (state) => state.token,
    get_selected_panel: (state) => state.selectedPanel,
    get_selected_categories: (state) => state.selectedCategories,
    get_panels: (state) => state.panels,
    get_categories: (state) => state.categories,
    get_actions: (state) => state.actions,
    get_role_paylod: (state) => state.rolePaylod,
    get_loading: (state) => state.loading,
  },

  actions: {
    toggle_loading_action() {
      this.loading = !this.loading;
    },
    async login_action(username) {
      const token = await `${username}_static_token_${Date.now()}`;
      localStorage.setItem("token", token);
      return true;
    },

    async clean_role_paylod_action() {
      this.rolePaylod = {
        name: "",
        description: "",
        active: false,
        actionsId: [],
      };
      this.selectedPanel = 1;
      this.selectedCategories = [];
      this.actions = [];
    },

    filter_level_access_action(obj) {
      console.log("{levelAccess, actionData}: ", obj);
      console.log("just levelAccess: ", JSON.parse(obj).levelAccess);
      const filteredActions = JSON.parse(obj).actionData.filter(
        (action) => action.level >= JSON.parse(obj).levelAccess
      );
      console.log("res bade filter: ", filteredActions);
      let actionsId = [];
      filteredActions.map((el) => actionsId.push(el._id));
      return actionsId;
    },
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

    async add_role_paylod_action(data) {
      try {
        const res = await addRoleToDb(data);
        console.log("result for add role in action: ", res);
        return true;
      } catch (err) {
        console.log("err in add_role_paylod: ", err);
      }
    },
  },
});
