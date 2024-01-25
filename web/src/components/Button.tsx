interface ButtonProps {
  buttonText: string
  convertFunction: () => void
  variant: "function" | "clear"
}

export function Button({ buttonText, convertFunction, variant }: ButtonProps) {

  const variantStyles = {
    "function": "bg-[#6b37ff] hover:bg-[#835de9]",
    "clear": "bg-[#0297ee] hover:bg-[#4dbeff]",
  }

  return (
    <button onClick={convertFunction} className={`font-bold w-full lg:w-auto px-5 py-2 rounded-lg transition-colors ${variant == "function" ? variantStyles.function : variantStyles.clear}`}>
      {buttonText}
    </button>
  )
}