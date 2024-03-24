import {graphql, useFragment} from '../gql'
import {useMutation} from 'urql'
import Navbar from '../components/Navbar'
import {Checkbox, Input, Typography} from '@material-tailwind/react'
import {saveAuthData} from '../authStore'
import {UserContext, UserContextInfoFragmentDocument} from '../components/UserContext'
import {useContext} from 'react'
import {redirect, useNavigate} from 'react-router-dom'

const REGISTER_MUTATION = graphql(`
    mutation RegisterUser($input: AddUserInput!) {
        addUser(input: $input) {
            user {
                ...UserContextInfo
            }
            token
            errors {
                ... on Error {
                    message
                }
            }
        }
    }
`)

function SignUp() {
    const [registerResult, register] = useMutation(REGISTER_MUTATION)
    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()

    const onSubmitRegister = (event: any) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const firstName = data.get('firstName')?.toString() ?? ''
        const lastName = data.get('lastName')?.toString() ?? ''
        const email = data.get('email')?.toString() ?? ''
        const password = data.get('password')?.toString() ?? ''

        register({input: {firstName, lastName, email, password}}).then((result) => {
            if (!result.error && result.data && result.data.addUser) {
                saveAuthData(result.data.addUser.token ?? '')

                if (result.data?.addUser.user) {
                    const userFragment = useFragment(
                        UserContextInfoFragmentDocument,
                        result?.data?.addUser.user,
                    )
                    setUser(userFragment)
                }
            }
        })

        navigate('/dashboard')
    }

    const disabled = registerResult.fetching

    /**
    const submit = useCallback(() => {
        login(variables).then((result) => {
            setUser(result.data?.login.user ?? null)
            console.log(user)
        })
    }, [state, login, variables])
    */

    return (
        <>
            <Navbar />
            <div className="xl:grid xl:grid-cols-2 xl:items-center gap-[200px] text-center text-[black] text-[25px] font-semibold">
                <div>
                    <h1 className="brand">AdSpot</h1>
                    <p className="text-bold text-[40px] mt-[-20px] mb-[30px] xl:mb-0">
                        Catchy catch phrase
                    </p>
                </div>
                <div className="w-[450px] m-auto xl:m-0">
                    <h1 className="font-bold text-[40px]">Create an account</h1>
                    <Typography
                        color="gray"
                        className="mt-1 font-normal"
                        placeholder=""
                    >
                        Nice to meet you! Enter your details to register.
                    </Typography>
                    <form
                        className="mt-8 mb-2 w-[450px]"
                        onSubmit={onSubmitRegister}
                    >
                        {registerResult.fetching ? <></> : null}
                        {registerResult.error ? <p>Oh no...</p> : null}
                        <fieldset disabled={disabled ? true : undefined}>
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="-mb-3"
                                    placeholder=""
                                >
                                    Your First Name
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="First Name"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: 'before:content-none after:content-none',
                                    }}
                                    crossOrigin={undefined}
                                    name="firstName"
                                />
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="-mb-3"
                                    placeholder=""
                                >
                                    Your Last Name
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Last Name"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: 'before:content-none after:content-none',
                                    }}
                                    crossOrigin={undefined}
                                    name="lastName"
                                />
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="-mb-3"
                                    placeholder=""
                                >
                                    Your Email
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: 'before:content-none after:content-none',
                                    }}
                                    crossOrigin={undefined}
                                    name="email"
                                />
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="-mb-3"
                                    placeholder=""
                                >
                                    Password
                                </Typography>
                                <Input
                                    type="password"
                                    size="lg"
                                    placeholder="********"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: 'before:content-none after:content-none',
                                    }}
                                    crossOrigin={undefined}
                                    name="password"
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
                                crossOrigin={undefined}
                            />
                            <button
                                className="bg-purple text-[white] rounded-lg px-6 py-2 w-[450px]"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </fieldset>
                        <Typography
                            color="gray"
                            className="mt-4 text-center font-normal"
                            placeholder=""
                        >
                            Already have an account?{' '}
                            <a
                                href="/login"
                                className="font-medium text-gray-900"
                            >
                                Sign In
                            </a>
                        </Typography>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
