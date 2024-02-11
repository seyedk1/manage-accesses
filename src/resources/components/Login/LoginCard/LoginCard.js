import BadesabaIcon from "@/assets/images/badesaba_icon.svg";
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiLoginVariant } from "@mdi/js";
import { useRouter } from "vue-router";
import { useAccessManagementStore } from "@/stores/accessManagementStore";

export default {
  components: {
    BadesabaIcon,
    SvgIcon,
  },
  setup() {
    const store = useAccessManagementStore();
    const { login_action } = store;
    const router = useRouter();

    let username = ref("");
    let password = ref("");

    const rules = ref({
      required: (value) => !!value || "الزامی",
      counter: (value) => (value && value.length >= 3) || "حداقل ۳ کاراکتر",
    });

    const path = ref(mdiLoginVariant);

    const login = async (username) => {
      await login_action(username);
      router.replace({ name: "addRole" });
    };

    return {
      username,
      password,
      path,
      login,
      rules,
    };
  },
};
