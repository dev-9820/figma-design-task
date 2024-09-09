import React from 'react';
import hero from '../images/gero-img.jpg'
const Hero = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 w-full text-center md:text-left space-y-4 mb-6 md:mb-0">
                    <h1 className="text-5xl md:text-4xl font-bold text-gray-800">
                        Empower Hope, Transform Lives
                    </h1>
                    <p className="text-gray-600 font-medium">
                        The essence of charity by conveying the idea of uplifting individuals and communities through the power of hope and positive change.
                    </p>
                </div>
                <div className="md:w-1/2 md:mx-0 mx-5">
                    <img
                        src={hero}
                        alt="Charity"
                        className="rounded-2xl shadow-gray-400 shadow-lg mx-auto md:mx-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
