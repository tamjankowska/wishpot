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
    const userSignup = wrapper.findComponent(UserSignup);

    test('is a Vue instance', () => {
        expect(wrapper.findComponent(App)).toBeTruthy()
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('Please work')
    })

    it('has a button', () => {
        expect(wrapper.get('button').exists()).toBe(true)
    })

    // it('renders correctly with different data', async () => {
    //     wrapper.setData({ item: 'game' } )
    //     await wrapper.vm.$nextTick()
    //     expect(wrapper.text()).toContain('game')
    // })

    it('contains a user signup function', () => {
        expect(userSignup.exists()).toBe(true)
    })
})

