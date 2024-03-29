import {useContext, useState} from 'react'
import {useNavigate, NavLink, Link} from 'react-router-dom'
import Profile from '../images/profile.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGear} from '@fortawesome/free-solid-svg-icons'
import {Card, Input, Checkbox, Typography, Select, Option} from '@material-tailwind/react'
import {UserContext} from './UserContext'

function Navbar() {
    const navigate = useNavigate()
    const [showPopup, setShowPopup] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {user, setUser} = useContext(UserContext)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem('token')
        navigate('/search')
    }

    const handleSettings = () => {
        navigate('/settings')
    }

    const redirectToSearch = () => {
        navigate('/search')
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="flex justify-between text-[25px] mx-[-80px]">
            <div className="flex space-x-12 items-center">
                <NavLink to="/">
                    <h1 className="brand">AdSpot</h1>
                </NavLink>
                {user && (
                    <p>
                        <NavLink
                            to="/dashboard"
                            className={({isActive}) =>
                                isActive ? 'text-[black]' : 'hover:text-[black]'
                            }
                        >
                            Dashboard
                        </NavLink>
                    </p>
                )}
                {user && (
                    <p>
                        <NavLink
                            to="/messages"
                            className={({isActive}) =>
                                isActive ? 'text-[black]' : ' hover:text-[black]'
                            }
                        >
                            Messages
                        </NavLink>
                    </p>
                )}
            </div>
            <div className="flex space-x-6 items-center">
                <button
                    className="bg-purple text-[white] rounded-lg px-6 py-1 m-1"
                    onClick={redirectToSearch}
                >
                    Search
                </button>
                {user && (
                    <button
                        className="bg-purple text-[white] rounded-lg px-6 py-1 m-1"
                        onClick={() => openModal()}
                    >
                        Post +
                    </button>
                )}
                <div className="relative">
                    <img
                        src={Profile}
                        className="h-10 w-10 cursor-pointer"
                        onClick={togglePopup}
                    />
                    {showPopup && (
                        <div className="absolute bg-white border rounded-lg shadow-lg py-2 w-40 right-0 mt-2">
                            {user && (
                                <button
                                    className="block mx-auto px-4 py-1 hover:bg-gray-100"
                                    onClick={handleSettings}
                                >
                                    <FontAwesomeIcon
                                        className="pr-1"
                                        icon={faGear}
                                    />
                                    Settings
                                </button>
                            )}
                            {!user && (
                                <button className="block mx-auto bg-purple text-[white] rounded-lg px-6 py-1 m-1">
                                    <Link to="/login">Login</Link>
                                </button>
                            )}
                            {user && (
                                <button
                                    className="block mx-auto bg-purple text-[white] rounded-lg px-6 py-1 m-1"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-bg">
                    <div className="modal-content relative">
                        <button
                            className="absolute top-0 right-0 mt-4 mr-4 text-[red] text-lg font-semibold hover:text-red-700"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-3xl font-semibold">Create listing</h2>
                        <Card
                            color="transparent"
                            placeholder=""
                        >
                            <form className="mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col gap-4">
                                <div className="mb-1 my-6 flex flex-col gap-6">
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="-mb-3"
                                        placeholder=""
                                    >
                                        Listing Type
                                    </Typography>
                                    <Select
                                        placeholder="@handle"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex items-center"
                                        labelProps={{
                                            className: 'before:content-none after:content-none',
                                        }}
                                    >
                                        <Option
                                            key="test1"
                                            value="test1"
                                        >
                                            Facebook Post
                                        </Option>
                                        <Option
                                            key="test2"
                                            value="test2"
                                        >
                                            Facebook Share to Feed
                                        </Option>
                                        <Option
                                            key="test3"
                                            value="test3"
                                        >
                                            Facebook Live Promotion
                                        </Option>
                                        <Option
                                            key="test4"
                                            value="test4"
                                        >
                                            Instagram Post
                                        </Option>
                                        <Option
                                            key="test5"
                                            value="test5"
                                        >
                                            Instagram Live Promotion
                                        </Option>
                                        <Option
                                            key="test4"
                                            value="test4"
                                        >
                                            Twitter Tweet
                                        </Option>
                                        <Option
                                            key="test5"
                                            value="test5"
                                        >
                                            Twitter Re-Tweet
                                        </Option>
                                    </Select>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="-mb-3"
                                        placeholder=""
                                    >
                                        Price
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="$"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: 'before:content-none after:content-none',
                                        }}
                                        crossOrigin={undefined}
                                    />
                                </div>
                                <Checkbox
                                    label={
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center font-normal"
                                            placeholder=""
                                        >
                                            I agree to the
                                            <a
                                                href="#"
                                                className="font-medium transition-colors hover:text-gray-900"
                                            >
                                                &nbsp;Terms and Conditions
                                            </a>
                                        </Typography>
                                    }
                                    containerProps={{className: '-ml-2.5'}}
                                    placeholder=""
                                    crossOrigin={undefined}
                                />
                                <button
                                    className="bg-purple text-white rounded-lg px-4 py-2 mt-2 shadow-lg"
                                    onClick={closeModal}
                                >
                                    Post
                                </button>
                            </form>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
