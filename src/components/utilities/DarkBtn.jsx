export default function DarkBtn({ isDark, setIsDark }) {
  return (
    <button
      className="absolute  z-10 top-4 right-4 rounded w-10 h-10 "
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <i className="fa-solid fa-moon text-xl text-secondary-darkest"></i>
      ) : (
        <i className="fa-solid fa-sun text-xl text-main-darkest"></i>
      )}
    </button>
  );
}
