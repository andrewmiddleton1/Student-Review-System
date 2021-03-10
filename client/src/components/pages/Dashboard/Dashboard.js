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
                    Welcome: {state.user.first_name} {state.user.last_name}
                </h1>
                <div className="flex-container">
                    {/* Nav Item - Dashboard */}



                    <Item active={''} className="flex-item"
                        href={"/feedbackinput"}
                        icon={<i className="fas fa-user-alt" />}
                        text={<span>Consultant</span>} />





                    {/* Nav Item - Profile */}
                    <Item active={''} className="flex-item"
                        href={"/demtinfo"}
                        icon={<i className="fas fa-folder-minus" />}
                        text={<span>DEMT/Admin</span>} />


                </div>


            </div>
        </div>
    );
}

export default DashBoard;
