const footerDtx = [
  [
    'Kelvinsekx CustomCommerce',
    'Shopper WooCommerce Theme Shopper Free WooCommerce eCommerce WordPress Theme perfect for simple online store, with clean and modern grid layout.',
  ],
  [
    'Plugin CustomCommerce',
    'Shopper WooCommerce Theme Shopper Free WooCommerce eCommerce WordPress Theme perfect for simple online store, with clean and modern grid layout.',
  ],
];

export default function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 px-4 text-[#222222] py-8">
        {footerDtx.map((item, index) => (
          <section className="flex flex-col gap-2 w-full md:w-30">
            <header className="font-bold text-xl">{item[0]}</header>
            {item[1]}
          </section>
        ))}
        <div className="flex flex-col gap-4 w-full md:w-30">
          <header className="font-bold text-xl">
            Email Subscribe
          </header>
          <form>
            <div className="flex sm:flex-col lg:flex-row">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Your Email
              </label>

              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-80 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Join us..."
                  required=""
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
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
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center pt-8">
        @c 2022 All Rights Reserved Kelvinsekx
      </div>
    </>
  );
}
