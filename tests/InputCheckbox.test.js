import { mount } from '@vue/test-utils';
import InputCheckbox from  '../components/InputCheckbox.vue';


describe('InputCheckbox', () => {
  it('renders the correct markup', () => {
    const wrapper = mount(InputCheckbox);
    expect(wrapper.html()).toContain('<div class="input-wrap input-checkbox">');
  });

});
