import BadesabaIcon from "@/assets/images/badesaba_icon.svg";
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiLoginVariant } from "@mdi/js";
import { generateToken } from "@/service/accessManagementService";
import { useRouter } from "vue-router";

export default {
  components: {
    BadesabaIcon,
    SvgIcon,
  },
  setup() {
    const router = useRouter();
    let username = ref("");
    let password = ref("");
    const path = ref(mdiLoginVariant);

    const login = (username, password) => {
      const token = generateToken(username, password);
      localStorage.setItem("token", token);
      router.push({ name: "addRole" });
    };

    return {
      username,
      password,
      path,
      login,
    };
  },
};
