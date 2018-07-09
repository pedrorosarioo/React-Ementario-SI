import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../screens/welcome';
import {
    Algoritmos,
    Bioinformatica,
    Comunicacao,
    Fundamentos,
    Ingles,
    Logica,
    Sociologia,
} from '../screens';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/algoritmos" exact component={Algoritmos} />
            <Route path="/logica" exact component={Logica} />
            <Route path="/bioinformatica" exact component={Bioinformatica} />
            <Route path="/comunicacao" exact component={Comunicacao} />
            <Route path="/fundamentos" exact component={Fundamentos} />
            <Route path="/ingles" exact component={Ingles} />
            <Route path="/sociologia" exact component={Sociologia} />
        </Switch>
    );
};

export default Routes;
