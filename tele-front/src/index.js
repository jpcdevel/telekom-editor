import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';

import {ApolloProvider, ApolloClient, InMemoryCache, from, HttpLink, createHttpLink} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';

// APOLLO CONFIGURATION
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        console.log('graphQLErrors', graphQLErrors);
    }
    if (networkError) {
        console.log('networkError', networkError);
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:8000/graphql', credentials: 'include' }) // http://localhost:8000/graphql // https://tele-api.herokuapp.com/graphql
])


const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('accessToken');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `JWT ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link),
})

ReactDOM.render(
    <ApolloProvider client={client}>
      <React.StrictMode>
          <ThemeProvider themeName="light">
              <App />
          </ThemeProvider>
      </React.StrictMode>
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
