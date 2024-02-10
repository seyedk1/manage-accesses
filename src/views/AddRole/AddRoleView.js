import RoleManagementHeader from "@/resources/components/RoleManagement/RoleManagementHeader/RoleManagementHeader.vue";
import PanelManagement from "@/resources/components/RoleManagement/PanelManagement/PanelManagement.vue";
import SearchTitleAccess from "@/resources/components/RoleManagement/SearchTitleAccess/SearchTitleAccess.vue";
import ShowCategoriesDetails from "@/resources/components/RoleManagement/ShowCategoriesDetails/ShowCategoriesDetails.vue";
import { useAccessManagementStore } from "@/stores/accessManagementStore";
import { onMounted } from "vue";
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
    } = store;

    const addRoleToDatabase = async () => {
      console.log("addRoleToDatabase btn function: ");
      const res = await add_role_paylod_action(store.get_role_paylod);
      console.log("res after action done in addRoleToDatabase method: ", res);
    };
    onMounted(async () => {
      const products = await get_products_action();
      await get_categories_action(products[0]._id);
    });

    return {
      store,
      addRoleToDatabase,
    };
  },
};
