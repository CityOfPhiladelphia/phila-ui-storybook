import { mount } from '@vue/test-utils';
import { Radio } from  'phila-ui';

describe('InputRadio', () => {
  it('renders the correct markup', () => {
    const wrapper = mount(Radio);
    expect(wrapper.find('input[type=radio]').exists()).toEqual(true);
  });
});
