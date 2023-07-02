import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as yearReducer } from '@redux/features/year/year.slice'
import { reducer as monthReducer } from '@redux/features/month/month.slice'
import { reducer as dateReducer } from '@redux/features/date/date.slice'
// import { reducer as expensesHistoryReducer } from '@redux/features/expenses/expensesHistory.slice'

const reducers = combineReducers({
  year: yearReducer,
  month: monthReducer,
  date: dateReducer
  // expensesHistory: expensesHistoryReducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
