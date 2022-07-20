import "./styles/App.css"

import AppRoutes from "./Routes"

import { BrowserRouter, Link } from "react-router-dom"

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav>
          <Link to="/">My Feed</Link>
          <Link to="/most-viewed">Most Viewed</Link>
        </nav>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}
