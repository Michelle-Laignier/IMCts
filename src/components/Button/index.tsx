import "./styles.scss"

interface ButtonProps {
  title: string
}

export function Button({ title }:ButtonProps ) {
  return(
    <button>
      {title}
    </button>
  )
}