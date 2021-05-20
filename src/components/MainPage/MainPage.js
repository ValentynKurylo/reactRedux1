import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Counter from "../Counter/Counter";
import Array from "../Array/Array";

export default function MainPage() {
    return (
        <div>
            <Router>
                <div><Link to={'/Counter'}>Counter</Link></div>
                <div><Link to={'/Array'}>Array</Link></div>
                <Switch>
                    <Route path={'/Counter'} component={Counter}></Route>
                    <Route path={'/Array'} component={Array}></Route>
                </Switch>
            </Router>
        </div>
    )
}