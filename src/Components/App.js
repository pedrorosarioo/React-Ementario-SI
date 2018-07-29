import React, { Fragment, Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer } from './Layout';
import Estudo from './Estudos';
import { disciplinas } from '../Store/disciplinas';

export default class App extends Component {
    state = { disciplinas, area: '' };

    showDisciplines = () => {
        return Object.entries(this.state.disciplinas.reduce((disciplinas, disciplina) => {
            const { area } = disciplina;
            disciplinas[area] = disciplinas[area]
                ? [...disciplinas[area], disciplina]
                : [disciplina];

            return disciplinas;
        }, {}));
    };

    handleChange = (areaSelected) => {
        this.setState({
            area: areaSelected,
        });
    };

    render() {
        const disciplines = this.showDisciplines();
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <Estudo disciplinas={disciplines} area={this.state.area} />
                    <Footer
                        area={this.state.area}
                        handleChange={this.handleChange} />
                </Fragment>
            </BrowserRouter>
        );
    }
}
