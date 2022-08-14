import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { getContext } from './../../utils/context';

export default function Navbar() {
  const { cart, getStateByCategory, setCart } = getContext();
  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:gap-0 md:py-2">
      <Link href="/">
        <span className="text-4xl font-black cursor-pointer">
          SHOPPER
        </span>
      </Link>
      <ul className="flex gap-8 cursor-pointer">
        <li className="font-bold">Cateogries:</li>
        <li onClick={() => getStateByCategory('ALL')}>ALL</li>
        <li onClick={() => getStateByCategory('F')}>F</li>
        <li onClick={() => getStateByCategory('M')}>M</li>
      </ul>

      <form className="flex gap-2">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="flex items-center" onClick={() => setCart()}>
          <FaShoppingCart />{' '}
          <span className="flex justify-center bg-slate-600 border-solid border-2 rounded-full border-white relative bottom-1 font-mono w-4 h-4 items-center p-1 text-white">
            <span className="text-xs">
              {Object.keys(cart).length}
            </span>
          </span>
        </div>
        <div className="flex bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <input
            type="search"
            id="default-search"
            className="p-2 pl-5 w-full text-sm text-gray-900"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-white relative left-09 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            <div className="flex inset-y-0 right-0 items-center pr-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
