import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row justify-center">
                
                <div className="lg:w-2/5">
                    <Sidebar></Sidebar>
                </div>
                <div className="lg:w-3/5">
                   
                </div>
              
            </div>
        </section>
    );
};

export default Dashboard;