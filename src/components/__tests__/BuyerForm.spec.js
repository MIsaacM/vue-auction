import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import BuyerForm from '../BuyerForm.vue';

// global.ResizeObserver = require('resize-observer-polyfill');

const vuetify = createVuetify({
  components,
  directives,
});

// describe('suite', () => {
//   it('serial test', async () => { /* ... */ });
//   it.concurrent('concurrent test 1', async ({ expect }) => { /* ... */ });
//   it.concurrent('concurrent test 2', async ({ expect }) => { /* ... */ });
// });

// describe.concurrent('Sum', () => {
//   it('concurrent test 1', async ({ expect }) => { /* ... */ });
//   it('concurrent test 2', async ({ expect }) => { /* ... */ });
//   it.concurrent('concurrent test 3', async ({ expect }) => { /* ... */ });
// });

describe('BuyerForm', () => {
  it('is mounted', async () => {
    const wrapper = mount(
      BuyerForm, {
        props: {
          modelValue: 5,
          isValid: true,
        },
        global: {
          components: {},
          plugins: [ vuetify ],
        },
      },
    );

    expect(wrapper.find('.v-form').exists()).toBe(true);
    wrapper.unmount();
  });

  it('input value is setted', async () => {
    const wrapper = mount(
      BuyerForm, {
        props: {
          modelValue: 5,
          isValid: true,
        },
        global: {
          components: {},
          plugins: [ vuetify ],
        },
      },
    );

    const inputValue = wrapper.find('.v-text-field .v-field__input')?.element?.value || null;
    expect(inputValue).toBe('5');
    wrapper.unmount();
  });

  it('input value is updated when change prop', async () => {
    const wrapper = mount(
      BuyerForm, {
        props: {
          modelValue: 5,
          isValid: true,
        },
        global: {
          components: {},
          plugins: [ vuetify ],
        },
      },
    );
    await wrapper.setProps({ modelValue: 12 });

    const inputValue = wrapper.find('.v-text-field .v-field__input')?.element?.value || null;
    expect(inputValue).toBe('12');
    wrapper.unmount();
  });
});
