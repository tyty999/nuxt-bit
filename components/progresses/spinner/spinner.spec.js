import { shallowMount } from '@vue/test-utils'
import Spinner from './index.vue'

describe('========= 🧢 Spinner component instance tests ========>', () => {
  let spinner

  it('Mounts spinner component instance', () => {
    spinner = shallowMount(Spinner)
    expect(spinner.isVueInstance()).toBeTruthy()
  })
})

describe('========= 🦁 Spinner props test ========== >', () => {
  let spinner

  it('Default prop types are correct', () => {
    spinner = shallowMount(Spinner)
    expect(spinner.vm.color).toBe('#fff')
  })

  it('Changes spinner color when props are passed', () => {
    spinner = shallowMount(Spinner, {
      propsData: {
        color: '#0062ff'
      }
    })
    expect(spinner.isVisible()).toBe(true)
    expect(spinner.vm.color).toBe('#0062ff')
  })
})
