import {useRef, useState} from 'react'
import Editor from '@monaco-editor/react'

function MonacoEditor() {

    const editorRef = useRef(null)

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor
        editorRef.current.focus()
    }


  return (
    <div>
        <Editor
            height="100vh"
            width="100%"
            theme="vs-dark"
            onMount={handleEditorDidMount}
            defaultValue="// some comment"
            defaultLanguage="cpp"
        />
    </div>
  )
}

export default MonacoEditor