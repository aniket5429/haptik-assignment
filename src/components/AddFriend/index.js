import React from 'react';
import uuid from 'react-uuid';
import {validateName} from '../../validations'
import './styles.scss'

import friendsContext from '../../context/friendsContext'
import { addFriend } from '../../actions';

import { checkNameExists } from '../../helpers'


const AddFriend = ({ query, updateQuery}) => {
    
    const [name, setName] = React.useState('');
    const [error, setError] = React.useState({});
    const [showPrompt, setPrompt] = React.useState(false);
    const { friendsState, dispatch } = React.useContext(friendsContext);


    React.useEffect(() => {
        if (showPrompt){
            setTimeout(() => {
                setPrompt(false);
            }, 2000)
        }
    }, [showPrompt])

    
    const addNewFriend = () => {
        const friendName = name.trim();
        setError({});
        dispatch(addFriend({ id: uuid(), name: friendName, favourite: false }))
        setName('');
        setPrompt(true);
    }

    const submitFriend = () => {
        const friendName = name.trim();
        if (validateName(friendName)) {
            if (checkNameExists(friendsState.data, friendName)) {
                setError({ type: 'alreadyExists', msg: 'Friend already exist with the name' })
                return;
            }
            addNewFriend();
            return;
        }

        setError({
            type: 'invalid',
            msg: 'Invalid Name! Name should contain only characters'
        });
    }


    const handleKeyDown = ({ key }) => {
        if (key === 'Enter' && name.trim().length) {
            submitFriend();
        }
    }

    const renderError = () => {
        return (
            <div className='errorMessage'>
                {error.msg}{' '}
                {error.type === 'alreadyExists' ? <button onClick={addNewFriend} className='error-addNew'>Add New ?</button>: ''}
            </div>
        )
    }
    
    const renderConfirmation = () => {
        return (
            <div className='confirmation'>
                Friend added successfully
            </div>
        )
    }

    const onNameChange = ({target}) => {
        setName(target.value);
        setError({});
    }


    return (
        <div className='new-friend-root'>
            <div className='input-area'>
                <div className='input-root'>
                    <input
                        className='input-field'
                        placeholder={'Enter your friends name'}
                        value={name}
                        type='text'
                        onChange={onNameChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={submitFriend} className='addbtn'>Add +</button>
                </div>
                <div className='search-root'>
                    <input
                        className='input-field'
                        placeholder={'Search'}
                        value={query}
                        type='text'
                        onChange={({ target }) => updateQuery(target.value)}
                    />
                    <img className='search-icon' src='https://res.cloudinary.com/guest-company/image/upload/loupe_rmmzr0.png' alt='' />
                </div>
            </div>
            
            {error.type ? renderError() : null}
            {showPrompt ? renderConfirmation() : null}
        </div>
        
    );
};

export default React.memo(AddFriend);