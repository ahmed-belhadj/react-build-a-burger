import React, { Component } from "react";

import Wrapper from "../Wrapper/Wrapper";
import Modal from "../../components/UI/Modal/Modal";

const withErrorMessage = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentWillMount() {
      this.requestInterceptor = axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      });
      this.responseIntercepter = axios.interceptors.response.use(
        response => response,
        error => {
          this.setState({ error: error });
        }
      );
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }
    handleErrorMessage = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Wrapper>
          <Modal show={this.state.error} closeModal={this.handleErrorMessage}>
            Oops! {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Wrapper>
      );
    }
  };
};

export default withErrorMessage;
