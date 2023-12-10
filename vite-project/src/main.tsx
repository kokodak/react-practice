import React from 'react'
import ReactDOM from 'react-dom/client'
import LikeButton from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LikeButton />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root-2')!).render(
  <React.StrictMode>
    <LikeButton />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root-3')!).render(
  <React.StrictMode>
    <LikeButton />
  </React.StrictMode>,
)
