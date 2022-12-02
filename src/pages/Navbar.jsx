export default function Example() {
    return (
        <div>
            <nav class="bg-white px-6 shadow-xl border-b-2 border-slate-400">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" class="flex items-center">
                        <img src="https://img.icons8.com/nolan/96/charity-box.png" class=" mr-3 sm:h-12" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold tracking-wide ">Fundible</span>
                    </a>
                    
                    <div class="hidden w-full md:block md:w-auto" >
                        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-semibold md:border-0 md:bg-white ">
                            <li>
                                <a href="#" class="block py-2 pl-2 pr-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-2 pr-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-2 pr-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700">Contact</a>
                            </li>
                            <li>
                            <a href="/payment"
                               className="flex items-center justify-center w-full px-5 py-2 text-base font-semibold text-white bg-indigo-600 border border-transparent rounded-md">
                                Donate
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}