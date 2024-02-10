import { useAccessManagementStore } from "@/stores/accessManagementStore";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronRight } from "@mdi/js";
import { ref } from "vue";

export default {
  components: {
    SvgIcon,
  },

  setup() {
    const store = useAccessManagementStore();
    const path = ref(mdiChevronRight);
    const activeFlag = ref(false);

    store.get_role_paylod.active = activeFlag;

    return {
      path,
      store,
      activeFlag,
    };
  },
};
