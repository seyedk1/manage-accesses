import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronRight } from "@mdi/js";
import { ref } from "vue";

export default {
  components: {
    SvgIcon,
  },

  setup() {
    const path = ref(mdiChevronRight);

    return {
      path,
    };
  },
};
