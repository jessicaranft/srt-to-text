export function convertSrtToText(sourceText: string): string {
  const lines = sourceText.split('\n').filter(line => line.trim() !== "")

  function removeLinesWithoutText(lines: string[]) {
    const linesWithoutTimingAndNumbers: string[] = []

    for (let i = 0; i < lines.length; i++) {
      if (!lines[i].includes("-->") && !/^\d+$/.test(lines[i].trim())) {
        const trimmedLine = lines[i].trim()
        const formattedLine = `${trimmedLine} `
        
        linesWithoutTimingAndNumbers.push(formattedLine)
      }
    }

    return linesWithoutTimingAndNumbers
    
  }

  const clearedLines = removeLinesWithoutText(lines)
  const clearedText = clearedLines.join('')

  const searchItalicsTags = /<\/?i>/g
  const replaceItalicsTagsWith = ""

  const resultText = clearedText.split(searchItalicsTags).join(replaceItalicsTagsWith)

  return resultText
}

