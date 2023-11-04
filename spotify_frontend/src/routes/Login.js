import { Icon } from '@iconify/react';
import PasswordInput from '../components/shared/PasswordInput';
import TextInput from '../components/shared/TextInput';

const LoginComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className='logo p-4 border-b border-solid border-grey-400 w-full flex justify-center' >
                <Icon icon="logos:spotify"  width="150" />
            </div>
            
        <div className='inputRegion w-1/3 py-10 flex items-center justify-center flex-col'>
            <div className='font-bold mb-12'>To continue, log in to Spotify.</div>
            <TextInput 
                label="Email address or username" 
                placeholder="Email address or username" 
            />
            <PasswordInput 
                label="Password" 
                placeholder="Password" 
            />
        </div>

        </div>
    )
};

export default LoginComponent;