import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Debug from "./Debug"
import { RecoilRoot } from "recoil"
import { Suspense } from "react"

ReactDOM.render(
  <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <Debug />
        <App />
      </React.StrictMode>
    </Suspense>
  </RecoilRoot>,
  document.getElementById("root"),
)
