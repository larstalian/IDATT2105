import { defineStore } from "pinia";
import { ref, Ref, computed } from "vue";
import { useForm, useField } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";

const schema = Yup.object({
  name: Yup.string().max(20).required(),
  email: Yup.string().max(50).email().required(),
  message: Yup.string().max(1000).required(),
});

export const useContactStore = defineStore("contact", () => {
  const { handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const name = useField("name");
  const email = useField("email");
  const message = useField("message");
  const isSubmitted = ref(false);
  const errorMessage: Ref<string | null> = ref(null);

  const submit = handleSubmit(async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/submissions",
        values
      );

      console.log("Submit", JSON.stringify(response.data, null, 2));

      isSubmitted.value = true;
      errorMessage.value = null;
    } catch (error) {
      errorMessage.value =
        "The form was not sent due to a network error. Sorry for the inconvenience. Please try again later.";
      console.error("Error:", error);
      isSubmitted.value = false;
    }
  });

  const isFormValid = computed(() => {
    return Object.keys(errors.value).length === 0;
  });

  return {
    name,
    email,
    message,
    submit,
    isSubmitted,
    errors,
    errorMessage,
    isFormValid,
  };
});
