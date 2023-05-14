import { describe, expect, it, beforeEach } from "vitest";
import ContactForm from "../../src/components/ContactForm.vue";
import { mount } from "@vue/test-utils";
import { flushPromises } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

describe("ContactFormComponent", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());
    wrapper = mount(ContactForm);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("contains name, email, and message fields", () => {
    expect(wrapper.find("#name-field").exists()).toBe(true);
    expect(wrapper.find("#mail-field").exists()).toBe(true);
    expect(wrapper.find("#message-field").exists()).toBe(true);
  });
});
