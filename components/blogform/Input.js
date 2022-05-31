const Input = ({ name, type }) => (
  <>
    <label
      htmlFor={name}
      className='block cursor-pointer uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
    >
      {name}
    </label>
    <input
      id={name}
      className='appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white'
      type={type}
      placeholder={name}
    />
  </>
)

export default Input
