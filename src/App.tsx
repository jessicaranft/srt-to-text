import { useState } from 'react'
import './App.css'
import { convertSrtToText } from './utils/convertSrtToText'

export function App() {
  const [sourceText, setSourceText] = useState("")
  const [resultText, setResultText] = useState("")

  function handleTextConversion() {
    const newText = convertSrtToText(sourceText)
    setResultText(newText)
  }

  return (
    <>
      <h1>SRT To Text Converter</h1>

      <section>
        <h2>Source:</h2>
        <div className="textarea-wrapper">
          <label htmlFor="source-text">Paste the content of your SRT file here:</label>
            <textarea id="source-text" onChange={(e) => setSourceText(e.target.value)} placeholder='Paste the content of your SRT file here...'/>
        </div>

        <button onClick={handleTextConversion}>Convert!</button>
      </section>

      <section>
        <h2>Result:</h2>
        <div className="textarea-wrapper">
          <label htmlFor="result-text">Here's the result:</label>
            <textarea id="result-text" value={resultText} readOnly placeholder='The result will appear here...'/>
        </div>
      </section>
    </>
  )
}
