import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import styled from 'styled-components'

const Title = styled.h1`
  color: pink;
`

const Logo = styled.img`
  max-width: 150px;
`

const ColumnCenter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const App = (props) => {
  return (
    <Provider store={store}>
      <ColumnCenter>
        <Logo
          src={'./reduxLogo.svg'}
        />
        <Title>Hello World</Title>
      </ColumnCenter>
    </Provider>
  )
}

export default App
