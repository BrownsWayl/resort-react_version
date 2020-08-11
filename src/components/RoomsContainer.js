import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import { RoomConsumer, withRoomConsumer } from '../context';
import Loading from './Loading';


/* function RoomContainer({context}) {
    const { loading, sortedRooms, rooms } = context;
    if(loading) {
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );

}

export default withRoomConsumer(RoomContainer); */

function RoomsContainer(props) {
    return (
        <RoomConsumer>
            {(value) => {
                const { loading, sortedRooms, rooms} = value;
                if(loading) {
                    return <Loading />
                }
                return (
                    <div>
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms} />
                    </div>
                );
            }}
        </RoomConsumer>

    );
}
export default RoomsContainer;