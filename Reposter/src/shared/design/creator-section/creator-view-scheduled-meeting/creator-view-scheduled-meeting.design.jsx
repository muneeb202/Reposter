import React, { useState } from 'react';
import "./creator-view-scheduled-meeting.scss";
import CreatorSidebarDesign from '../creator-sidebar/creator-sidebar.design';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CreatorViewScheduledMeetingDesign = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [meetings, setMeetings] = useState([
        {
            id: 1,
            title: 'Team Meeting',
            date: new Date(2024, 0, 15, 10, 0, 0),
        },
        {
            id: 2,
            title: 'Client Call',
            date: new Date(2024, 0, 31, 14, 0, 0),
        },
        // Add more meetings as needed
    ]);

    const getMeetingsOnDate = (date) => {
        return meetings.filter((meeting) => {
            return (
                date.toDateString() === meeting.date.toDateString()
            );
        });
    };



    return (
        <>            <div className="flex-container-creartor-view-shedule">
            <div className="col-3-creator-reports">
                <CreatorSidebarDesign />
            </div>
            {/* <div className="testin-purpose"> */}
            <div className="col-8-creator-view-schedule">
                <div>
                    <div>
                        {/* Additional calendar with meetings */}
                        <Calendar style={{ height: '475px' }}
                            value={selectedDate}
                            tileContent={({ date }) => {
                                const meetingsOnDate = getMeetingsOnDate(date);
                                return (
                                    <div>
                                        {meetingsOnDate.map((meeting) => (
                                            <div key={meeting.id} style={{ background: "#9E1212", color: '#ffff' }}>
                                                <div>
                                                    <h4>{meeting.title}</h4>
                                                    <h6>{meeting.date.toLocaleTimeString()}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>

            {/* </div> */}
        </>
    )
}

export default CreatorViewScheduledMeetingDesign