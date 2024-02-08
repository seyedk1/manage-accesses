import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronDown } from "@mdi/js";
import { ref } from "vue";

export default {
  components: {
    SvgIcon,
  },

  setup() {
    const chevronPath = ref(mdiChevronDown);
    let flag = ref(Array(4).fill(true));

    const displayDetails = (index) => {
      console.log("index: ", index);
      flag.value[index] = !flag.value[index];
      console.log("flag: ", flag);
    };

    return {
      chevronPath,
      flag,
      displayDetails,
    };
  },
};
