const Button = ({ text, onClick }) => {
    return (
        <button
            className="py-1 px-4 bg-slate-600 text-white rounded-full hover:bg-blue-400"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;