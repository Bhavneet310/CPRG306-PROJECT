const SearchBar = ({ onSearch, value, onChange }) => {
    return (
        <div className="flex justify-center items-center mt-4">
            <input 
                type="text" 
                placeholder="Search movies..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                className="p-2 w-full md:w-1/2 lg:w-1/3 border border-red-300 text-red-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button 
                onClick={onSearch}
                className="bg-black hover:bg-red-200 text-red-500 font-bold py-2 px-4 rounded-r-md"
            >
                Search
            </button>
        </div>
    );
};
export default SearchBar;