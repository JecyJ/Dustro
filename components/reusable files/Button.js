

const Button = ({onClick, children}) => {
  return (
    <section>
        <button onClick={onClick} className="bg-[#D2153D] text-white py-2 w-52 rounded-lg">
            {children}
        </button>
    </section>
  )
}

export default Button;