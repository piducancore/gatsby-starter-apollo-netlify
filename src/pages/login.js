import React, { Component } from "react"
import { navigate } from "gatsby"
import gql from "graphql-tag"
import { Mutation, withApollo } from "react-apollo"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: "",
    password: "",
    name: "",
  }

  render() {
    const { login, email, password, name } = this.state
    return (
      <Layout>
        <SEO title="Login" />
        <h4>{login ? "Login" : "Sign Up"}</h4>
        <div>
          {!login && (
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div>
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={data => this._confirm(data)}
          >
            {mutation => (
              <div onClick={mutation}>{login ? "login" : "create account"}</div>
            )}
          </Mutation>
          <div onClick={() => this.setState({ login: !login })}>
            {login ? "need to create an account?" : "already have an account?"}
          </div>
        </div>
        <button onClick={this._logout}>logout</button>
      </Layout>
    )
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup
    this._saveUserData(token)
    navigate(`/`)
  }

  _saveUserData = token => {
    localStorage.setItem("auth-token", token)
  }

  _logout = () => {
    localStorage.clear()
    this.props.client.resetStore()
    navigate(`/`)
  }
}

export default withApollo(Login)
