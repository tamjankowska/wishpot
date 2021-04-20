import { mount } from '@vue/test-utils'
import App from './../../src/App.vue'

describe('App', () => {
    it('has data', () => {
        expect(typeof App.data).toBe('function')
    })
})

describe('Mounted app', () => {
    const wrapper = mount(App);
    const UserSignup = wrapper.findComponent(UserSignup)

    test('is a Vue instance', () => {
        expect(wrapper.find()).toBeTruthy()
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('Please work')
    })

    expect(UserSignup.exists()).toBe(true)
})

