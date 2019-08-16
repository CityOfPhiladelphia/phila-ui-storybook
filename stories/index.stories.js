/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';
import Welcome from './Welcome';

// LAYOUT PARTS
import PhlHeader from '../components/Header';

// FROMS
import InputText from '../components/InputText';
import InputTextarea from '../components/InputTextarea';
import InputCheckbox from '../components/InputCheckbox';
import InputRadio from '../components/InputRadio';
import InputSelect from '../components/InputSelect';

let myOptions = {my:"options"}

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
  }));

// LAYOUT PARTS
storiesOf('Header', module)
  .add('Header Bar', () => ({
    components: { PhlHeader }, 
    template: `
      <phl-header app-subtitle="StoryBook" app-title="City Of Philadelphia Vue Standards">
        Navigation (Slot Content)
      </phl-header>
    `
  }));

// FORMS
storiesOf('InputText', module)
  .add('Basic InputText', () => ({
    components: { InputText }, 
    template: '<input-text/>'
  }));

storiesOf('InputTextarea', module)
  .add('Basic InputTextarea', () => ({
    components: { InputTextarea }, 
    template: '<input-textarea/>'
  }));

storiesOf('InputCheckbox', module)
  .add('Basic InputCheckbox', () => ({
    components: { InputCheckbox }, 
    template: '<input-checkbox>Insert checkbox label</input-checkbox>'
  }));

storiesOf('InputRadio', module)
  .add('Basic InputRadio', () => ({
    components: { InputRadio }, 
    template: '<input-radio>Insert radio label</input-radio>'
  }));

  storiesOf('InputSelect', module)
  .add('Basic InputSelect', () => ({
    components: { InputSelect }, 
    template: '<input-select/>'
  }));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));
