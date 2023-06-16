import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App';
import Hello from './components/Hello'
import reportWebVitals from './reportWebVitals'
import Name from './components/Name'
import Message from './components/Message'
import Parent from './components/ContainerSample'
import Page from './components/ContextSample'
import Counter from './components/Counter'
import { Parent as Par } from './components/Parent'
import UseMemoSample from './components/UseMemoSample'
import Clock from './components/Clock'
import ImageUploader from './components/ImageUploader'
import UseImperativeHandle from './components/UseImperativeHandle.tsx'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <Hello />
    <Name />
    <Message />
    <Parent />
    <Page />
    <Counter initialValue={1} />
    <Par />
    <UseMemoSample />
    <Clock />
    <ImageUploader />
    <UseImperativeHandle />
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
