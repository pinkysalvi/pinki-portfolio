import { useEffect, useState } from 'react'

// Types out each word, pauses, deletes it, then moves to the next one.
export default function useTyping(words, { type = 70, erase = 40, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? erase : type

    if (!deleting && text === word) delay = pause
    const id = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true)
      if (deleting && text === '') {
        setDeleting(false)
        return setIndex((i) => (i + 1) % words.length)
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, words, type, erase, pause])

  return text
}
