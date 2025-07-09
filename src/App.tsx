import { Grid } from '@mui/material'
// import { useState } from 'react'
import './App.css'
import Editor from './components/editor/Editor'
import ResumePreiew from './components/resumePreview/ResumePreview'

function App() {

  return (
    <Grid container>
      <Editor/>
      <ResumePreiew/>
    </Grid>
  )
}

export default App
