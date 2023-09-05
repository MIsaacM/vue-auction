// sum.test.js
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';


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

describe('Something', () => {
  it('a...', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.html()).toContain('You’ve successfully created a project');
  });
});
