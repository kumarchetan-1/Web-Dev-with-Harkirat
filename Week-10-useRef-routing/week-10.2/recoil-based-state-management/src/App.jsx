import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, atom, useSetRecoilState, useRecoilValue,} from "recoil"

const count = atom({
  key: "counterState",
  default: 0 
})

const user = atom({
  key: "userState",
  default: {
    name: "Chetan"
  } 
})

function Parent() {
  return <RecoilRoot>
    <Increase />
    <Decrease />
    <Value />
  </RecoilRoot>
}

function Increase() {
  const setCount = useSetRecoilState(count) 
  return <div>
    <button onClick={()=> setCount(count => count + 1)}>Increase Count</button>
  </div>
}

function Decrease() {
  const setCount = useSetRecoilState(count) 
  return <div>
    <button onClick={()=> setCount(count => count - 1)}>Decrease Count</button>
  </div>
}

function Value() {
  const countValue = useRecoilValue(count) 
  return <div>
    Value is { countValue }
  </div>
}

function App() {
  return <Parent />
}

export default App
