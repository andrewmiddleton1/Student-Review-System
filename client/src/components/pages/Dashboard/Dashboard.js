import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DashboardNewsCard from '../../DashboardNewsCard/DashboardNewsCard';
import { useAppContext } from '../../../store';
import { useLoginCheck } from '../../../utils/setAuthToken';
import Item from './Item';
import "./style.css";

function DashBoard() {
    const [state, appDispatch] = useAppContext();

    useLoginCheck(appDispatch);


    return (
        <div className="pl-0 container-fluid">
            <Sidebar />
            <div>
                <h1>
                    Welcome {state.user.first_name} {state.user.last_name}
                </h1>
                <div className="flex-row-reverse mr-5 d-flex">
                    {/* Nav Item - Dashboard */}
                    <Item active={''}
                        href={"/clientassets"}
                        icon={<i className="fas fa-folder-minus" />}
                        text={<span>Client</span>} />


                    {/* Nav Item - Profile */}
                    <Item active={''}
                        href={"/other"}
                        icon={<i className="fas fa-user-alt" />}
                        text={<span>Planner</span>} />


                </div>
            </div>
        </div>
    );
}

export default DashBoard;
