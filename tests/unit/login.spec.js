import { shallowMount, mount } from "@vue/test-utils";
import LoginView from "@/views/LoginView.vue";

test("Login.vue test", async () => {
  // expect(1).toEqual(1);
  const wrapper = mount(LoginView);

  await wrapper.find("#email").setValue("johndoe@gmail.com");
  await wrapper.find("button").trigger("click");
  expect(wrapper.emitted()).toHaveProperty("submit");
});
