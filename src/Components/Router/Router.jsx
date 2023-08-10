// importing react-router-dom
import {Routes, Route} from 'react-router-dom'
import Compiler from '../Compiler/Compiler'
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Compiler />} />
      </Routes>
    </div>
  )
}

export default Router