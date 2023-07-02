import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { actions as yearActions } from '@redux/features/year/year.slice'
import { actions as monthActions } from '@redux/features/month/month.slice'
import * as monthAsyncActions from '@redux/features/month/month.actions'
import { actions as dateActions } from '@redux/features/date/date.slice'

// TODO вынести в отдельный файл
const rootActions = {
  ...yearActions,
  ...monthActions,
  ...monthAsyncActions,
  ...dateActions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
