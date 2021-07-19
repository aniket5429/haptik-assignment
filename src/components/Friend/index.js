import React, {useState} from 'react';
import './styles.scss';

const Friend = ({ onUpdate, onDelete, friend}) => {
    const [showModal, setModal] = useState(false);



    const renderFavourite = () => {
        return (
            <img 
                src='https://res.cloudinary.com/guest-company/image/upload/star_ivc5xf.png'
                className='favourite' 
                alt=''
                onClick={() => onUpdate({ ...friend, favourite:false })}
            />
        )
    }

    const renderNotFavourite = () => {
        return (
            <img
                src='https://res.cloudinary.com/guest-company/image/upload/not-star_rs2mvt.png'
                className='favourite'
                alt=''
                onClick={() => onUpdate({ ...friend, favourite: true })}
            />
        )
    }

    const onCancel = () => {
        setModal(false);
    }

    const onConfirm = () => {
        onDelete(friend.id);
        setModal(false);
    }

    return (
        <div className='main-root'>
            <div className='friend-info-root'>
                <div className='friend-name'>
                    <p>{friend.name}</p>
                    <p>is your friend</p>
                </div>
                <div className='friend-info-actions'>
                    {friend.favourite ? renderFavourite() : renderNotFavourite()}
                    <img 
                        className='delete-icon' 
                        alt='' 
                        src='https://res.cloudinary.com/guest-company/image/upload/delete_h7dvwz.png' 
                        onClick={() => setModal(true)}
                    />
                </div>
            </div>
            <div className={`modal ${showModal ? 'show': 'hide'}`}>
                <div className={`modal-content ${showModal ? 'modalShow': 'modalHide'}`}>
                    <img className='modal-icon' src='https://res.cloudinary.com/guest-company/image/upload/delete-icon-13_qihziq.png' alt='' />
                    <h2 className='modal-title'>Are you sure, to remove {friend.name} from your allies?</h2>
                    <div className='modal-action'>
                        <button onClick={onCancel} className='modal-action-cancel'>Cancel</button>
                        <button onClick={onConfirm} className='modal-action-confirm'>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Friend);