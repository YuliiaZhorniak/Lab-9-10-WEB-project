const SeatMap = ({ seats, occupied, selected, onToggle }) => {
  return (
    <div className="grid grid-cols-4 gap-3 bg-white p-6 rounded-3xl shadow-inner border border-slate-100">
      {seats.map(seat => {
     
        const isOccupied = occupied.includes(seat);
        const isSelected = selected.includes(seat);

        return (
          <button
            key={seat}
            disabled={isOccupied}
            onClick={() => onToggle(seat)}
            className={`
              h-12 w-12 rounded-xl font-bold transition-all duration-200 border-2
              ${isOccupied ? 'bg-red-50 border-red-100 text-red-300 cursor-not-allowed' : 
                isSelected ? 'bg-blue-600 border-blue-700 text-white shadow-lg shadow-blue-200 scale-110' : 
                'bg-white border-green-500 text-green-600 hover:bg-green-50'}
            `}
          >
            {seat}
          </button>
        );
      })}
    </div>
  );
};