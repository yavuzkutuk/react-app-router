import { Redirect, Switch, Route } from 'react-router-dom';
import Home from '../pages/accueil';
import About from '../pages/about';

export default function Main(){
    return(
        <main>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Redirect from='*' to='/' />
            </Switch>
        </main>
    )
}