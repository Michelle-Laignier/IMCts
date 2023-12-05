import "./styles.scss"

interface InputProps {
  value: number | undefined,
  onChange: (value:number | undefined) => void
}

export function Input({ value, onChange }:InputProps ): JSX.Element {
  // the inputs will start empty (undefined) and then change to a value(number):
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    const newValue = inputValue === '' ? undefined : Number(inputValue);
    onChange(newValue);
  };

  return(
    <input type="number" name="" id="" value={value !== undefined ? value : ""} onChange={handleInputChange}/>
  )
}