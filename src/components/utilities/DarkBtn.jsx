export default function DarkBtn({ isDark, setIsDark }) {
  return (
    <button
      className="absolute hidden z-10 top-4 right-4 rounded w-10 h-10 dark:text-white"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <i className="fa-solid fa-moon text-xl text-red-400"></i>
      ) : (
        <i className="fa-solid fa-sun text-xl text-indigo-900"></i>
      )}
    </button>
  );
}
