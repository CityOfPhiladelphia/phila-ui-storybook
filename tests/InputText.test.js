import { mount } from '@vue/test-utils';
import InputText from  'phila-ui/src/components/InputText';


describe('InputText', () => {
  it('renders the correct markup', () => {
    const wrapper = mount(InputText);
    expect(wrapper.html()).toContain('<div class="input-wrap input-text">');
  });
  it('renders the placeholder text and label based on placeholder', () => {
    const wrapper = mount(InputText, {
      propsData:  {
        placeholder: 'Philadelphia Sports Mascot',
        value: 'Gritty'
      }
    });
    expect(wrapper.find('label').text()).toEqual('Philadelphia Sports Mascot');
    expect(wrapper.find('input').attributes('placeholder')).toEqual('Philadelphia Sports Mascot');
  });
});
