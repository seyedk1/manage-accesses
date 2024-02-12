import {
  RoleManagementHeader,
  PanelManagement,
  SearchTitleAccess,
  ShowCategoriesDetails,
} from "@/resources/components";
import { useAccessManagementStore } from "@/stores/accessManagementStore";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    RoleManagementHeader,
    PanelManagement,
    SearchTitleAccess,
    ShowCategoriesDetails,
  },

  setup() {
    const store = useAccessManagementStore();
    const router = useRouter();

    const {
      get_products_action,
      get_categories_action,
      add_role_paylod_action,
      toggle_loading_action,
      clean_role_paylod_action,
      logout_action,
    } = store;

    onMounted(async () => {
      toggle_loading_action();
      const products = await get_products_action();
      await get_categories_action(products[0]._id);
      toggle_loading_action();
    });

    const refreshKey = ref(0);

    const addRoleToDatabase = async () => {
      await add_role_paylod_action(store.get_role_paylod);
    };

    const closeModal = (data) => {
      clean_role_paylod_action();
      refreshKey.value += 1;
      data.value = false;
    };

    const logout = () => {
      logout_action();
      router.push({ name: "login" });
    };

    return {
      store,
      addRoleToDatabase,
      closeModal,
      refreshKey,
      logout,
    };
  },
};
