import React, { useContext, useState, useCallback} from 'react';


import Friend from '../Friend';
import Pagination from '../Pagination';
import AddFriend from '../AddFriend';


import friendsContext from '../../context/friendsContext';
import { removeFriend, updateFriend } from '../../actions';
import usePagination from '../../hooks/usePagination'

import './styles.scss'



const FriendsList = () => {
    const [query, setQuery] = useState('');
    const { friendsState, dispatch } = useContext(friendsContext);
    const { data, totalCount, pageSize, currentPage, handlePageChange } = usePagination(friendsState, query)

    const onUpdate = useCallback((params) => {
        dispatch(updateFriend(params))
    }, [dispatch])
   
    const onDelete = useCallback((id) => {
        dispatch(removeFriend(id));
    }, [dispatch]);


    const renderData = () => {
        if (data && data.length) {
            return data.map((item, index) => {
                return <Friend key={index} onDelete={onDelete} onUpdate={onUpdate} friend={item} />
            })
        };

        return (
            <div className='emptyset'>
                <div>You dont have any friends...! Why so lonely ?</div>
            </div>
        )
    }

    const updateQuery = useCallback(val => setQuery(val), [])
    return (
        <div className='main'>
            <AddFriend query={query} updateQuery={updateQuery} />
            <div className='friends-root'>
                {renderData()}
                <Pagination
                    itemsCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
        
    );
};

export default FriendsList;