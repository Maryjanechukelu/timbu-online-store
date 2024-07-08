const modal = ({ open, onClose, children }) => {
    if (!open) return null;
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center md:px-10 px-20 items-center transition-colors
            ${open ? "visible bg-black/20" : "invisible"}
            `}
        >
            <div onClick={(e) => e.stopPropagation()} className={`bg-white shadow p-6 transition-all 
                ${open ? "scale-10 opacity-100" : "scale-125 opacity-0"}`}>
                {children}
            </div>
        </div>
    );
};

export default  modal
