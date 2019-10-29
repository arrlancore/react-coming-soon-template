import React, { Component } from 'react';
import PropTypes from 'prop-types';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isEmpty = value => !value || value.trim(value).length === 0;

const isEmailValid = value => !emailRegex.test(value);

class EmailForm extends Component {
    state = {
        value: '',
        error: null,
    }

    handleChange = ({ target: { value } }) => {
        this.setState({ value, error: null });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState(({ value, error }) => {
            let nextError = null;
            if (isEmpty(value)) {
                nextError = 'email is required';
            } else if (isEmailValid((value))) {
                nextError = 'email is not valid'
            }

            return error === nextError ? null : { error: nextError };
        }, () => {
            const { error, value } = this.state;
            if  (!error && value) this.props.onSubmit(value);
        });
    }
    render() {
        const { value, error } = this.state;

        return (
            <form onSubmit={this.handleSubmit} method="post">
                <input
                    className={error ? 'error' : ''}
                    value={value}
                    name="email"
                    type="text"
                    placeholder="email address"
                    onChange={this.handleChange}
                />
                <div className="error-message">{error || ' '}</div>
                <button className="button">Submit</button>
            </form>
        )
    }
}

EmailForm.defaultProps = {
    onSubmit: () => {},
}

EmailForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default EmailForm;
