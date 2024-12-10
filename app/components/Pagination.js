import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
    return (
        <div className="flex justify-center my-4">
            <button className="bg-red
             hover:bg-red-200 text-red-500 font-bold py-2 px-4 rounded-r-md"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
            >
                ⬅ Previous
            </button>
            <button 
                className="text-xl font-bold hover:underline"
                onClick={() => onPageChange(currentPage + 1)}

            >
                Next ➡
            </button>
        </div>
    );
};
export default Pagination;