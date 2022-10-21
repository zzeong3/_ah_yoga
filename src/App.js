import { Route, Switch } from 'react-router-dom';

import './scss/style.scss';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Main from './components/main/Main';

//sub
import Community from './components/sub/Community';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Member from './components/sub/Member';
import Location from './components/sub/Location';
import Youtube from './components/sub/Youtube';


function App() {
	return (
		<>
			<Switch>

				<Route exact path='/' component={Main} />
				<Route path='/' render={()=><Header type={'sub'} />} />

			</Switch>


				<Route path='/department' component={Department} />
				<Route path='/youtube' component={Youtube} />
				<Route path='/gallery' component={Gallery} />
				<Route path='/community' component={Community} />
				<Route path='/location' component={Location} />
				<Route path='/member' component={Member} />


			<Switch>
				<Route exact path='/'>
					<Footer type={'main'} />
				</Route>

				<Route path='/'>
					<Footer type={'sub'} />
				</Route>
			</Switch>
		</>
	);
}

export default App;