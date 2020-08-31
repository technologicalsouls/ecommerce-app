const layout = require('../layout');

const getError = (errors, prop) => {
    try {
        return errors.mapped()[prop].msg;
    } catch (error) {
        return ' ';
    }
};

module.exports = ({ req, errors }) => {// pass in errors as second argument, NOTE, maybe undefined -> in such case, create getError() helper function "defensive codes" to handle undef cases.
    return layout({
        content: `
            <div>Your id is:  ${req.session.userId}
                <form method="POST">
                    <input name="email" placeholder="email" />
                    ${getError(errors, 'email')}
                    <input name="password" placeholder="password" />
                    ${getError(errors, 'password')}
                    <input name="passwordConfirmation" placeholder="password confirmation" type="text" />
                    ${getError(errors, 'passwordConfirmation')}
                    <button>Sign Up</button>
                </form>
            </div>
        `
    });
}