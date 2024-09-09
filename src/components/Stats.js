import React from 'react';

const Stats = () => {
    const stats = [
        { value: '563', label: 'Project Completed', icon: '🏠' },
        { value: '425', label: 'Trusted Partner', icon: '🤝' },
        { value: '978', label: 'Money Donated', icon: '💰' },
        { value: '32', label: 'Active Volunteer', icon: '🙋' },
    ];

    return (
        <section className="bg-green-600 mx-8 md:mx-32 sm:mx-12 rounded-xl text-white py-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, idx) => (
                    <div key={idx} className="p-4">
                        <div className="text-4xl">{stat.icon}</div>
                        <div className="text-3xl text-yellow-300 font-serif">{stat.value}</div>
                        <div className="font-serif" >{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
