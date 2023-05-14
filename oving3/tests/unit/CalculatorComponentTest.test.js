import { describe, expect, it, beforeEach } from "vitest";
import CalculatorComponent from "../../src/components/CalculatorComponent.vue";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

describe("Testing calculator component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("adding 1 number", async () => {
    const wrapper = mount(CalculatorComponent);
    const button1 = wrapper.find("#1");
    await button1.trigger("click");
    await wrapper.vm.$nextTick();

    const button2 = wrapper.find("#2");
    await button2.trigger("click");
    await wrapper.vm.$nextTick();

    const result = wrapper.find("#calc-view");
    expect(result.element.value).toBe("12");
  });

  it("checks inputValue after clicking equals", async () => {
    const wrapper = mount(CalculatorComponent);

    const button1 = wrapper.find("#1");
    await button1.trigger("click");
    await wrapper.vm.$nextTick();

    const button2 = wrapper.find("#2");
    await button2.trigger("click");
    await wrapper.vm.$nextTick();

    const buttonPlus = wrapper.find("#button-plus");
    await buttonPlus.trigger("click");
    await wrapper.vm.$nextTick();

    const button3 = wrapper.find("#3");
    await button3.trigger("click");
    await wrapper.vm.$nextTick();

    const buttonEquals = wrapper.find("#button-equals");
    await buttonEquals.trigger("click");
    await wrapper.vm.$nextTick();
    const result = wrapper.find("#calc-view");
    expect(result.element.value).toBe("15");
  });
});
