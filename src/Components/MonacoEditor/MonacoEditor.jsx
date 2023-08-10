import {useRef, useState} from 'react'
import Editor from '@monaco-editor/react'

function MonacoEditor() {

    const editorRef = useRef(null)

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor
        editorRef.current.focus()
    }


  return (
    <div className='mt-[rem]'>
        <Editor
            height="92.9vh"
            width="50%"
            theme="vs-dark"
            onMount={handleEditorDidMount}
            defaultValue="// some comment"
            defaultLanguage="cpp"
        />
    </div>
  )
}

export default MonacoEditor