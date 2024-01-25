"use client"

import { Button } from "@/components/Button";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {

  const [inputText, setInputText] = useState("")
  const [inputTextStats, setInputTextStat] = useState({
    howManyCaracters: 0,
    HowManyWord: 0
  })

  useEffect(() => {
    const caracterCount = inputText.split("").length
    const wordCount = inputText.replace(/(^\s*)|(\s*$)/gi, "").replace(/[ ]{2,}/gi, " ").replace(/\n /, "\n").split(" ").filter((string) => {
      return string != ""
    }).length

    setInputTextStat({
      howManyCaracters: caracterCount,
      HowManyWord: wordCount
    })

  }, [inputText])

  function handleConvertTextToUpperCase() {
    setInputText(inputText.toUpperCase())
  }

  function handleConvertTextToLowerCase() {
    setInputText(inputText.toLowerCase())
  }

  function handleConvertTextToAlternatingCase() {
    const alternatedCaseText = inputText.split("").map((caracter, index) => {
      if (index % 2 == 0) {
        return caracter.toLocaleLowerCase()
      }
      return caracter.toLocaleUpperCase()
    }).join("")

    setInputText(alternatedCaseText)
  }

  function handleConvertTextToInvertedCase() {
    const inversedCaseText = inputText.split("").map((caracter) => {
      if (caracter == caracter.toLocaleUpperCase()) {
        return caracter.toLowerCase()
      }

      if (caracter == caracter.toLowerCase()) {
        return caracter.toUpperCase()
      }
    }).join("")

    setInputText(inversedCaseText)
  }

  function handleConvertTextToTitleCase() {
    const titleCaseConvertedText = inputText.split(" ").map(word => {
      if (word != "") {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      }
    }).join(" ")

    setInputText(titleCaseConvertedText)
  }

  function handleClearText() {
    setInputText("")
  }

  function handleCopyTextToClipboard() {
    navigator.clipboard.writeText(inputText)
  }

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <h1 className="font-black text-4xl text-center p-3 mt-12 text-[#0297ee]">Text <span className="text-[#6b37ff]">Converter</span></h1>
      <div className="w-full max-w-5xl m-auto relative px-4">
        <textarea
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          placeholder="Insert yout text here..."
          className="bg-[#262626] w-full max-w-5xl resize-none m-auto p-4 rounded-lg mt-10 outline-none focus:outline-[#0297ee] focus:border-none"
          cols={30}
          rows={15} />
        <Copy size={30} onClick={handleCopyTextToClipboard} className="absolute bottom-12 right-8 cursor-pointer hover:text-[#0297ee] rounded transition-all" />
        <div className="flex items-center gap-5 text-white ml-1">
          <span className="flex gap-2">Caracters: <span className="font-mono">{inputTextStats.howManyCaracters}</span></span>
          <span className="text-white/50">|</span>
          <span className="flex gap-2">Words: <span className="font-mono">{inputTextStats.HowManyWord}</span></span>
        </div>
      </div>
      <div className="mt-6 flex flex-col lg:flex-row justify-center items-center gap-4 w-full px-4">
        <Button variant="function" buttonText="UPPER CASE" convertFunction={handleConvertTextToUpperCase} />
        <Button variant="function" buttonText="lower case" convertFunction={handleConvertTextToLowerCase} />
        <Button variant="function" buttonText="aLtErNaTiNg cAsE" convertFunction={handleConvertTextToAlternatingCase} />
        <Button variant="function" buttonText="InVeRsE CaSe" convertFunction={handleConvertTextToInvertedCase} />
        <Button variant="function" buttonText="Title Case" convertFunction={handleConvertTextToTitleCase} />
        <Button variant="clear" buttonText="Clear" convertFunction={handleClearText} />
      </div>
    </div>
  );
}
