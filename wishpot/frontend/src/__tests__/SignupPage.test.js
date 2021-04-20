const UserSignup = require('@components/UserSignup')
import { mount } from '@vue/test-utils'

test('signup function exists', () => {
    const wrapper = mount(UserSignup)
    expect(wrapper.vm.UserSignup.user).toBeTruthy();
})