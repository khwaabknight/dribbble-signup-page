

function SearchInput({className = '', iclasses = ''}) {
  return (
    <div className={`relative ${className}`}>
        <input
            type='text'
            placeholder='Search'
            className={`flex py-2 pr-5 pl-12 rounded-lg focus:outline-none focus:bg-zinc-200 ${iclasses}`}
        />
        <i className={`fa-solid fa-search text-xl text-gray-400 absolute top-1/2 -translate-y-1/2 left-3`}></i>
    </div>
  )
}

export default SearchInput