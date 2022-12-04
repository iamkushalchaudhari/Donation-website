export default function Example() {
  return (
    <div>
      <nav class="bg-bluegray sm:px-4 drop-shadow-xl">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img src="https://img.icons8.com/nolan/96/charity-box.png" class="h-6 mr-3 mb-1 sm:h-14" alt="Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap pt-1 tracking-wide text-white">Fundible</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-3 md:flex-row md:space-x-8 md:text-lg md:font-semibold  ">
              <li>
                <a href="/" class="block py-2 pl-3 pr-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-peach md:pt-2">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-peach md:pt-2">About</a>
              </li>
              <li>
                <a href="/contact" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-peach md:p-2">Contact</a>
              </li>
              <li>
                <a class="inline-block px-7 py-3 mr-2 bg-white/90 text-black font-bold text-sm uppercase rounded shadow-md hover:shadow-white hover:bg-white hover:shadow-lg focus:bg-lightpeach focus:shadow-lg active:bg-elightpeach active:shadow-lg transition duration-150 ease-in-out" href="/details" role="button">Donate</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}