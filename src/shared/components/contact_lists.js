import { useState } from "react";
import UtilityBar from "./utility_bar";
import images from "../../util/images";

const ContactLists = ({ contacts, onSelectUser, onSelectImage }) => {
    const [selectedUser, setSelected] = useState(null);

    const handleSelectUser = (user, image) => {
        onSelectUser(user);
        setSelected(user);
        onSelectImage(image);
    };

    return (
        <div className="xs:flex xs:flex-row xs:justify-center lg:block bg-card p-1 rounded-xl lg:border lg:border-gray-700">
            <UtilityBar />
            <ul className="xs:flex lg:block xs:overflow-x-auto xs:space-x-2 xs:mt-3 lg:space-y-2 scrollbar-hidden xs:w-11/12 lg:max-h-lvh overflow-y-auto">
                {contacts.map((user, index) => (
                    <>
                        <div className='xs:flex xs:flex-row lg:hidden'
                            onClick={() => handleSelectUser(user, images[index])}
                        >
                            <div className="absolute left-3 top-11 transform -translate-y-1/2 text-gray-400 opacity-10">
                                <i className="fas fa-chevron-left text-2xl"></i>
                            </div>

                            <div className={`w-20 h-20 xs:w-14 xs:h-14 rounded-full overflow-hidden border-4 ${selectedUser && selectedUser.id === user.id ? 'border-blue-500' : 'border-gray-700'}`}>
                                <img
                                    src={images[index]}
                                    alt={images[index]}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-400 opacity-10">
                                <i className="fas fa-chevron-right text-2xl"></i>
                            </div>
                        </div>

                        <div
                            key={user.id}
                            onClick={() => handleSelectUser(user, images[index])}
                            className={`xs:hidden lg:flex relative flex flex-col  rounded-xl text-white mb-2 hover:cursor-pointer 
                            ${selectedUser && selectedUser.id === user.id ? 'bg-blue-500' : ''}`}
                        >
                            <div className="flex min-w-[340px] gap-1 p-1.5">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-gray-700">
                                    <img
                                        src={images[index]}
                                        alt={images[index]}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="ml-2">
                                    <div className="flex flex-col justify-center h-full">
                                        <div className="text-md">
                                            {user.name}
                                        </div>
                                        <div className="text-xs">
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default ContactLists;
