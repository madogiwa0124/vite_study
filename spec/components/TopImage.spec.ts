import { mount } from "@vue/test-utils";
import Component from "@js/components/topImage.vue";

describe("components/topImage.vue", () => {
  describe("初期表示", () => {
    it("snapshot", () => {
      const props = { alt: "test alt" };
      const wrapper = mount(Component, { propsData: props });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
