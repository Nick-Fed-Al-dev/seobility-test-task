import React from 'react'
import { Provider } from 'react-redux'

import { store } from "./store/index"
import Form from './components/Form'

import "./sass/index.sass"


const App : React.FC = () => {

  return (
    <Provider store={store}>
      <div className="container">
        <Form />
      </div>
    </Provider>
  )
}

export default App
