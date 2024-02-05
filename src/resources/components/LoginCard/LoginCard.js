import BadesabaIcon from "@/assets/images/badesaba_icon.svg";
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiLoginVariant } from "@mdi/js";

export default {
  components: {
    BadesabaIcon,
    SvgIcon,
  },
  setup() {
    let username = ref("");
    let password = ref("");
    const path = ref(mdiLoginVariant);

    return {
      username,
      password,
      path,
    };
  },
};
