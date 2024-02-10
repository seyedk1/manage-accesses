import { useAccessManagementStore } from "@/stores/accessManagementStore";
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const store = useAccessManagementStore();
    const { set_select_panel_action, get_categories_action } = store;
    const selectedPanel = async (productId) => {
      set_select_panel_action(productId);
      await get_categories_action(productId);
    };
    return {
      selectedPanel,
      store,
    };
  },
};
