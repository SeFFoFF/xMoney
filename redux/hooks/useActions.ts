import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

// import * as expensesActions from '@redux/features/expenses/expensesSlice.actions'

const rootActions = {
  // ...expensesActions
}

export const useActions = (): any => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
