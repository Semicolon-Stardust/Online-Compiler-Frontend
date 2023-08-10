import MonacoEditor from "../MonacoEditor/MonacoEditor"
import { NavbarCompiler } from "../Navigation/NavbarCompiler"
import Output from "../Output/Output"

function Compiler() {
  return (
    <div>
      <>
        <NavbarCompiler />
        <div className="grid items-center grid-flow-col">
          <MonacoEditor />
          <Output />
        </div>
      </>
    </div>
  )
}

export default Compiler