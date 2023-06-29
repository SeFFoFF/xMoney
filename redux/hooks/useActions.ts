import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { actions as expensesHistoryActions } from '@redux/features/expenses/expensesHistory.slice'
import * as expensesHistoryAsyncActions from '@redux/features/expenses/expensesHistory.actions'

const rootActions = {
  ...expensesHistoryActions,
  ...expensesHistoryAsyncActions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
