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
      console.log(`new selected are ${JSON.stringify(newSelected)}`);
      set_select_categories_action(JSON.stringify(newSelected));
      const data = await get_actions_action(JSON.stringify(newSelected));
      console.log("return of actions method: ", data);
      console.log("newSelected.length: ", newSelected.length);
      if (newSelected.length != 0) {
        const convertArray = mix_items_action(data);
        console.log("convertArray: ", convertArray);
      }
    });
    return {
      selected,
    };
  },
};
