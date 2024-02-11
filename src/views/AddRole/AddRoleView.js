import RoleManagementHeader from "@/resources/components/RoleManagement/RoleManagementHeader/RoleManagementHeader.vue";
import PanelManagement from "@/resources/components/RoleManagement/PanelManagement/PanelManagement.vue";
import SearchTitleAccess from "@/resources/components/RoleManagement/SearchTitleAccess/SearchTitleAccess.vue";
import ShowCategoriesDetails from "@/resources/components/RoleManagement/ShowCategoriesDetails/ShowCategoriesDetails.vue";
import { useAccessManagementStore } from "@/stores/accessManagementStore";
import { onMounted, ref } from "vue";
export default {
  components: {
    RoleManagementHeader,
    PanelManagement,
    SearchTitleAccess,
    ShowCategoriesDetails,
  },

  setup() {
    const store = useAccessManagementStore();

    const {
      get_products_action,
      get_categories_action,
      add_role_paylod_action,
      toggle_loading_action,
      clean_role_paylod_action,
    } = store;

    onMounted(async () => {
      toggle_loading_action();
      const products = await get_products_action();
      await get_categories_action(products[0]._id);
      toggle_loading_action();
    });

    const refreshKey = ref(0);

    const addRoleToDatabase = async () => {
      console.log("addRoleToDatabase btn function: ");
      const res = await add_role_paylod_action(store.get_role_paylod);
      console.log("res after action done in addRoleToDatabase method: ", res);
    };

    const closeModal = (data) => {
      clean_role_paylod_action();
      refreshKey.value += 1;
      data.value = false;
    };

    return {
      store,
      addRoleToDatabase,
      closeModal,
      refreshKey,
    };
  },
};
