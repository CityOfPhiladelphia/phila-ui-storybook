import { mount } from '@vue/test-utils';
import InputRadio from  '../components/InputRadio.vue';


describe('InputRadio', () => {
  it('renders the correct markup', () => {
    const wrapper = mount(InputRadio);
    expect(wrapper.find('input[type=radio]').exists()).toEqual(true);
  });
});
