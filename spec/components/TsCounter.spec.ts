import { mount } from "@vue/test-utils";
import Component from "@js/components/tsCounter.vue";

describe("components/tsCounter.vue", () => {
  describe("初期表示", () => {
    it("snapshot", () => {
      const props = { initCount: 2 };
      const wrapper = mount(Component, { propsData: props });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
