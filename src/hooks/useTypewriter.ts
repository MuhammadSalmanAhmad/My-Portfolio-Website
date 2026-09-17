import { useEffect, useState } from "react";

export function useTypewriter(words: string[], typeMs = 70, eraseMs = 35, holdMs = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout: number;

    if (!deleting && text === word) {
      timeout = window.setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = window.setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? eraseMs : typeMs,
      );
    }
    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words, typeMs, eraseMs, holdMs]);

  return text;
}
