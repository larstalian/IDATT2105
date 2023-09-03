import { defineStore } from "pinia";
import { ref, Ref, computed } from "vue";
import { useForm, useField } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";

// Define the validation schema using Yup
const schema = Yup.object({
  name: Yup.string().max(20).required(),
  email: Yup.string().max(50).email().required(),
  message: Yup.string().max(1000).required(),
});

export const useContactStore = defineStore("contact", () => {
  // Create a form instance
  const { handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  // Create validation fields
  const name = useField("name");
  const email = useField("email");
  const message = useField("message");
  const isSubmitted = ref(false);
  const errorMessage: Ref<string | null> = ref(null);

  const submit = handleSubmit(async (values) => {
    try {
      // Send values to API
      const response = await axios.post(
        "http://10.9.9.29:3000/submissions", values
        
        );
        console.log(JSON.stringify(values.data));

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
