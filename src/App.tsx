import Home from '@pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  )
}

export default App
