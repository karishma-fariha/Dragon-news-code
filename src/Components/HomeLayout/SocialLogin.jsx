import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className="space-y-3">
                <button className='btn btn-secondary w-full btn-outline'><FcGoogle size={24} />
                    Login With Google</button>
                <button className='btn btn-primary w-full btn-outline'><ImGithub size={24}/>

                    Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;