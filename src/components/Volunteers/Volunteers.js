import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Volunteers = () => {
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState([]);

    const handleForSearch = event => {
        setSearchText(event.target.value);
    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(v => v.title.toLowerCase().includes(searchText));
                setSearchResult(match);
            })
    }, [searchText])
    return (
        <div style={{ overflow: 'hidden' }}>
            <h2>Find volunteers activity here</h2>
            <input onChange={handleForSearch} style={{ marginBottom: '15px', padding: '5px' }} type="text" placeholder='Search' />
            <div className="activity-container">
                {
                    searchResult.map(activity => <Activity
                        key={activity.taskId}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Volunteers;