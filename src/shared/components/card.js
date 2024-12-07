import React from 'react';
import UtilityList from './utility_list';

const Card = ({ user, image }) => {
    if (!user) {
        return (
            <div className=" flex text-gray-500 h-5/4 w-2/4 xs:h-screen  xs:w-screen items-center justify-center">
                Please select a user to view details.
            </div>
        );
    }

    return (
        <div className="border border-gray-700 text-white lg:w-2/4 xs:w-auto dark:bg-gray-800  dark:text-gray-100 p-6 rounded-lg transition-colors duration-300 ml-3 xs:mr-3 xl:max-h-screen overflow-y-auto scrollbar-hidden">
            <div className="flex flex-col items-center">

                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700">
                    <img
                        src={image}
                        alt={image}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h2 className='text-3xl mt-3'>{user.name}</h2>
            </div>


            <div className="flex space-x-4 p-2 justify-center items-center mt-4">
                <div className="flex items-center justify-center p-2 bg-green-500 text-white rounded-full cursor-pointer hover:bg-blue-500 hover:scale-105 transition-all duration-300">
                    <i className="fas fa-phone"></i>
                </div>
                <div className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                    <i className="fas fa-video"></i>
                </div>
                <div className="flex items-center justify-center p-2 bg-yellow-500 text-white rounded-full cursor-pointer hover:bg-blue-500 hover:scale-105 transition-all duration-300">
                    <i className="fas fa-comment-alt"></i>
                </div>
                <div className="flex items-center justify-center p-2 bg-purple-500 text-white rounded-full cursor-pointer hover:bg-blue-500 hover:scale-105 transition-all duration-300">
                    <i className="fas fa-envelope"></i>
                </div>
            </div>

            <p className="text-md mt-10">Contacts</p>
            <div className='flex flex-wrap'>
                <div className='w-full sm:w-1/2 p-2'>
                    <UtilityList label={'Phone'} value={user.phone} />
                </div>
                <div className='w-full sm:w-1/2 p-2'>
                    <UtilityList label={'Email'} value={user.email} />
                </div>
            </div>

            <p className="text-md mt-5">Address</p>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 p-2">
                    <UtilityList label={'Street'} value={user.address.street} />
                </div>
                <div className="w-full sm:w-1/2 p-2">
                    <UtilityList label={'Suite'} value={user.address.suite} />
                </div>
                <div className="w-full sm:w-1/2 p-2">
                    <UtilityList label={'City'} value={user.address.city} />
                </div>
                <div className="w-full sm:w-1/2 p-2">
                    <UtilityList label={'Zip code'} value={user.address.zipcode} />
                </div>
            </div>

            <p className="text-md mt-5">Company</p>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 p-2">
                    <UtilityList label={'Name'} value={user.company.name} />
                </div>
                <div className="w-full sm:w-1/2 p-2">
                    <UtilityList label={'BS'} value={user.company.bs} />
                </div>
                <div className="w-full p-2">
                    <UtilityList label={'Catch Phrase'} value={user.company.catchPhrase} />
                </div>
            </div>
        </div>

    );
};

export default Card;