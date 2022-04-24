import { mount } from "@vue/test-utils";
import Component from "@js/components/jsCounter.vue";

describe("components/jsCounter.vue", () => {
  describe("初期表示", () => {
    it("snapshot", () => {
      const props = { initCount: 2 };
      const wrapper = mount(Component, { propsData: props });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
