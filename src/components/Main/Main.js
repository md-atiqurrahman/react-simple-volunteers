import useVolunteers from '../../Hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css';

const Main = () => {
    const [volunteers] = useVolunteers();
    return (
        <div>
            <h2>Our volunteers activity are  in: {volunteers.length} category</h2>
            <div className='activity-container'>
                {
                    volunteers.map(activity => <Activity
                    key={activity.taskId}
                    activity = {activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;