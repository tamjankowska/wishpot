import { mount } from '@vue/test-utils'
import App from './../../src/App.vue'
import UserSignup from './../../src/components/UserSignup.vue'

describe('App', () => {
    it('has data', () => {
        expect(typeof App.data).toBe('function')
    })
})

describe('Mounted app', () => {
    const wrapper = mount(App);

    test('is a Vue instance', () => {
        expect(wrapper.findComponent(App)).toBeTruthy()
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('Landing page')
    })

    it('has a button', () => {
        expect(wrapper.get('button').exists()).toBe(true)
    })
})

describe('User Signup', () => {
    const wrapper = mount(App);
    const userSignup = wrapper.findComponent(UserSignup);

    it('contains a user signup function', () => {
        expect(userSignup.exists()).toBe(true)
    })

    test('UserSignup returns a user called Bob', () => {
        const user = wrapper.find('h2')
        expect(user.text()).toContain('Bob')
    })

    it('contains a form label', () => {
        expect(userSignup.get('label').exists()).toBe(true)
    })
})

