import { createSlice } from '@reduxjs/toolkit'
import type { initialState } from './types'

const initialState:initialState = []

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addSection: (state, action) => {
      state.push({...action.payload, data: []})
    },
    addData: (state, action) => {
      return state.map((section) => {
        if (section.sectionType === action.payload.sectionType) {
          if (!section.data.length) {
            return {...section, data: [action.payload.data]}
          }
          const needChange = section.data.some(el => el.id === action.payload.data.id )
          let newData = []
          if (needChange) {
            newData = section.data.map((inf) => {
            if (inf.id === action.payload.data.id) {
              return {...action.payload.data} 
            }
            return inf
          })
          } else {
            newData = [...section.data, {...action.payload.data}]
          }
          return {...section, data: newData}
        }
        return section
      })
    },
    deleteSectionData: (state, action) => {
      return state.map((section) => {
        if (section.sectionType === action.payload.sectionType) {
          const newData = section.data.filter(sectionData => sectionData.id !== action.payload.id)
          return {...section, data: newData}
        }
        return section
      })
    },
  },
})

const { actions, reducer } = sectionsSlice

export default reducer
export const { addSection, addData, deleteSectionData } = actions
