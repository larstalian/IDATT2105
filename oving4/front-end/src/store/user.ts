import { defineStore } from "pinia";
import { ref, Ref, computed } from "vue";
import { useField } from "vee-validate";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
    const username = useField("username");
    const password = useField("password");
    const isSubmitted = ref(false);
    const errorMessage: Ref<string | null> = ref(null);
    
    const submit = async () => {
        try {
        const response = await axios.post(
            "http://localhost:8080/user/login",
            {
            username: username.value,
            password: password.value,
            }
        );
        console.log(JSON.stringify(response.data));
        // Log the response from the server
        console.log("Submit", JSON.stringify(response.data, null, 2));
        // Update isSubmitted
        isSubmitted.value = true;
        errorMessage.value = null;
        } catch (error) {
        errorMessage.value =
            "The form was not sent due to a network error. Sorry for the inconvenience. Please try again later.";
        console.error("Error:", error);
        isSubmitted.value = false;
        }
    }
    const isFormValid = computed(() => {
        return username.meta.valid && password.meta.valid;
    });


    const register = async () => {
        try {
        const response = await axios.post(
            "http://localhost:8080/user/register",
            {
            username: username.value,
            password: password.value,
            }
        );
        console.log(JSON.stringify(response.data));
        console.log("Submit", JSON.stringify(response.data, null, 2));
        isSubmitted.value = true;
        errorMessage.value = null;
        } catch (error) {
        errorMessage.value =
            "The form was not sent due to a network error. Sorry for the inconvenience. Please try again later.";
        console.error("Error:", error);
        isSubmitted.value = false;
        }
    }

    return {
        username,
        password,
        submit,
        isSubmitted,
        errorMessage,
        isFormValid,
        register
    };
});