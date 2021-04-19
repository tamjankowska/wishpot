const UserSignup = require('@components/UserSignup')

test('signup function exists', () => {
    const {UserSignup} = render(UserSignup);
    expect(UserSignup).toBeTruthy();
})