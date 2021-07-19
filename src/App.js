import React, { useReducer } from 'react';
import './App.scss';

import FriendsList from './components/FriendsList';
import ScreenLayout from './components/ScreenLayout';

import FriendsContext from './context/friendsContext';
import {friendsReducer,friendsInitialState} from './reducers';

function App() {

	const [friendsState, dispatch] = useReducer(friendsReducer, friendsInitialState);

	return (
		<div>
			<FriendsContext.Provider value={{ friendsState, dispatch }}>
				<ScreenLayout>
					
					<FriendsList />
				</ScreenLayout>
			</FriendsContext.Provider>
		</div>
	);
}

export default App;
