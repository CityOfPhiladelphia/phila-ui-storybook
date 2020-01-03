/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';
import Welcome from './Welcome';

// FROMS
import * as PhilaUI from '@CityOfPhiladelphia/phila-ui';
import "@CityOfPhiladelphia/phila-ui/src/styles/all.scss";

let myOptions = {my:"options"}

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
  }));

// LAYOUT PARTS
storiesOf('Layout', module)
  .add('Header Bar', () => ({
    components: { 'AppHeader': PhilaUI.AppHeader }, 
    template: `
      <app-header app-subtitle="StoryBook" app-title="City Of Philadelphia Vue Standards">
        Navigation (Slot Content)
      </app-header>
    `
  }))
  .add('Footer Bar', () => ({
    components: { 'AppFooter': PhilaUI.AppFooter }, 
    template: `
      <i>Sorry, still working on this...</i>
    `
  }))

  storiesOf('Inputs', module)
    .add('Basic Textbox', () => ({
      components: { 'Textbox': PhilaUI.Textbox }, 
      template: '<textbox />'
    }))
    .add('Basic TextArea', () => ({
      components: { 'TextArea': PhilaUI.TextArea }, 
      template: '<text-area />'
    }))
    .add('Basic Checkbox', () => ({
      components: { 'Checkbox': PhilaUI.Checkbox }, 
      template: '<checkbox>Insert checkbox label</checkbox>'
    }))
    .add('Basic Radio', () => ({
      components: { 'Radio': PhilaUI.Radio }, 
      template: '<radio>Insert radio label</radio>'
    }))
    .add('Basic Dropdown', () => ({
      components: { 'Dropdown': PhilaUI.Dropdown }, 
      template: '<dropdown />'
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
