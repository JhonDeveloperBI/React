import React from 'react'
import { Provider } from 'react-redux'; // the same useContext
import { store } from './components/store/store';
import { AppRouter } from './routers/AppRouter'

export const JournalApp = () => {
  return (
     <Provider store={ store }>
          <AppRouter />
     </Provider>
    
  )
}
