export default function UtilityBar() {
    return (
        <>
            <div className=" xs:hidden lg:flex flex items-center bg-white dark:bg-gray-800 p-2 rounded-full w-full max-w-2xl mx-auto">

                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow py-2 px-4 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none dark:bg-gray-700 dark:text-white"
                />

                <div className="flex space-x-4 ml-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full text-white  ">
                        <i className="fas fa-search animate-scale-up"></i>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full text-white ">
                        <i className="fas fa-bell animate-shake"></i>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full text-white ">
                        <i className="fas fa-cog animate-rotate-360"></i>
                    </div>
                </div>

            </div>
        </>
    )

}