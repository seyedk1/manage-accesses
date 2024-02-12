import { useAccessManagementStore } from "@/stores/accessManagementStore";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronDown } from "@mdi/js";
import { ref, watch } from "vue";

export default {
  components: {
    SvgIcon,
  },

  setup() {
    const store = useAccessManagementStore();
    const { filter_level_access_action } = store;
    const chevronPath = ref(mdiChevronDown);
    let displayDetailsFlag = ref(Array(1).fill(false));

    const displayDetails = (index) => {
      // for show access details
      displayDetailsFlag.value[index] = !displayDetailsFlag.value[index];
    };

    const radioBtns = ref([
      { value: 100, text: "دسترسی انتشار" },
      { value: 200, text: "دسترسی ویرایش" },
      { value: 300, text: "دسترسی مشاهده" },
    ]);

    let selectedRadioBtns = ref(Array(store.get_actions.length).fill({}));

    let indexOfRadioClicked;
    const handleRadioClick = (index) => {
      // got index for watch which item in array is changed
      indexOfRadioClicked = index;
    };

    let allActionsIdWithIndex = [[]];
    watch(selectedRadioBtns.value, async (newValues) => {
      const data = filter_level_access_action(
        JSON.stringify(newValues[indexOfRadioClicked])
      );
      allActionsIdWithIndex[0][indexOfRadioClicked] = data;
      // I use flat(Infinity) to remove all bracets in array because the result must be like: ["1","2","3"]
      store.get_role_paylod.actionsId = allActionsIdWithIndex.flat(Infinity);
    });

    return {
      chevronPath,
      displayDetailsFlag,
      displayDetails,
      radioBtns,
      store,
      selectedRadioBtns,
      handleRadioClick,
      indexOfRadioClicked,
    };
  },
};
