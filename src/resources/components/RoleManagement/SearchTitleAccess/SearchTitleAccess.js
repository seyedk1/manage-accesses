import { useAccessManagementStore } from "@/stores/accessManagementStore";
import { ref, watch } from "vue";

export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },

  setup() {
    let selected = ref([]);
    const store = useAccessManagementStore();
    const {
      set_select_categories_action,
      get_actions_action,
      mix_items_action,
    } = store;

    watch(selected, async (newSelected) => {
      set_select_categories_action(JSON.stringify(newSelected));
      const data = await get_actions_action(JSON.stringify(newSelected));

      // use if for doesn't any procces for empty array to have better performance
      if (newSelected.length != 0) mix_items_action(data);
    });
    return {
      selected,
    };
  },
};
