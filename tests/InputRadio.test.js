import { mount } from '@vue/test-utils';
import PhilaUI from  'phila-ui';

describe('InputRadio', () => {
  it('renders the correct markup', () => {
    const wrapper = mount(PhilaUI.InputRadio);
    expect(wrapper.find('input[type=radio]').exists()).toEqual(true);
  });
});
