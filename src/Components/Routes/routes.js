import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../screens/welcome';
import { disciplinas } from '../../Store/disciplinas';
import { DisciplineScreen } from '../screens';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Welcome} />
            {disciplinas.map((disciplina) => {
                return (
                    <Route
                        path={`/${disciplina.id}`}
                        key={disciplina.id}
                        component={() => {
                            return (
                                <DisciplineScreen
                                    titulo={disciplina.titulo}
                                    descricao={disciplina.descricao} />
                            );
                        }} />
                );
            })}
        </Switch>
    );
};

export default Routes;
