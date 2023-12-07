import { useState } from 'react'
import { convertSrtToText } from './utils/convertSrtToText'
import { Box, Button, Container, Heading, Textarea } from '@chakra-ui/react'

export function App() {
  const [sourceText, setSourceText] = useState("")
  const [resultText, setResultText] = useState("")

  function handleTextConversion() {
    const newText = convertSrtToText(sourceText)
    setResultText(newText)
  }

  return (
    <Container maxWidth='100%' h='100vh' p={12}>
      <Heading
        as='h1'
        size='2xl'
        colorScheme='blue'
        textAlign='center'
        color='#0284c7'
      >
        SRT To Text Converter
      </Heading>

      <Box mt={8}>
        <Heading as='h2' mb={8}>Source:</Heading>
        <Box h={240}>
            <Textarea
              id="source-text"
              onChange={(e) => setSourceText(e.target.value)}
              placeholder='Paste the content of your SRT file here...'
              resize='none'
              h='100%'
            />
        </Box>

        <Button
          onClick={handleTextConversion}
          width='100%'
          size='lg'
          colorScheme='blue'
          mt={12}
        >
          Convert!
        </Button>
      </Box>

      <Box mt={8}>
        <Heading as='h2' mb={8}>Result:</Heading>
        <Box h={240}>
            <Textarea
              id="result-text"
              value={resultText}
              readOnly
              placeholder='The result will appear here...'
              resize='none'
              h='100%'
            />
        </Box>
      </Box>
    </Container>
  )
}
