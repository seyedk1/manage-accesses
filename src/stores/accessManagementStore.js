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
    /* start helpers action function */
    /* I used these helpers function because
     they need to use theses state that are defined in useAccessManagementStore */

    toggle_loading_action() {
      this.loading = !this.loading;
    },

    /* clear data after a role save in DB for have better UX so user can
     add a new role immediately after a role added */
    clean_role_paylod_action() {
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

    // handle access by user selected access in group radio button to save in DB
    filter_level_access_action(obj) {
      const filteredActions = JSON.parse(obj).actionData.filter(
        (action) => action.level >= JSON.parse(obj).levelAccess
      );
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

    /* groupBy activities by category Name as we must 
    display each group's category Name in order to display access. */
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
    /* end helpers action function */

    /* start action function for connected to DB */
    async login_action(username) {
      const token = await `${username}_static_token_${Date.now()}`;
      localStorage.setItem("token", token);
      return true;
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
        if (categoriesId == "[]") {
          this.actions = [];
        } else {
          const { data: actionsData } = await getAllActions();

          let actionsWithoutSort = [];
          let categoryName = "";
          actionsData.filter((obj) => {
            // Check if category is in the array of categoriesId
            const isCategoryMatch = JSON.parse(categoriesId).some((el) => {
              if (el.value == obj.category) {
                categoryName = el.name;
              }
              return el.value == obj.category;
            });

            if (isCategoryMatch) {
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

    async add_role_paylod_action(data) {
      try {
        await addRoleToDb(data);
        return true;
      } catch (err) {
        console.log("err in add_role_paylod: ", err);
      }
    },

    logout_action() {
      localStorage.removeItem("token");
    },
    /* end action function for connected to DB */
  },
});
