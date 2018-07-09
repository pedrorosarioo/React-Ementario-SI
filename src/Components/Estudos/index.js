import React, { Fragment } from 'react';
import {
    Paper,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import Routes from '../Routes/routes';

import { withRouter, Link, Route, Switch } from 'react-router-dom';

const Estudo = (props) => {
    const styles = {
        Paper: {
            padding: 20,
            marginTop: 10,
            marginBottom: 10,
            height: 400,
            overflowY: 'auto',
        },
    };
    return (
        <Grid container spacing={24}>
            <Grid item xs={12} sm={4}>
                <Paper style={styles.Paper}>
                    {props.disciplinas.map(([grupo, disciplinas]) => {
                        return props.area === '' || props.area === grupo ? (
                            <Fragment key={grupo}>
                                <Typography
                                    variant="headline"
                                    style={{ textTransform: 'capitalize' }}>
                                    {grupo}
                                </Typography>
                                <List component="ul">
                                    {disciplinas.map((disciplina) => {
                                        return (
                                            <Link
                                                to={`/${disciplina.id}`}
                                                href={`/${disciplina.id}`}
                                                style={{
                                                    textDecoration: 'none',
                                                }}>
                                                <ListItem
                                                    key={disciplina.id}
                                                    button>
                                                    <ListItemText
                                                        primary={
                                                            disciplina.titulo
                                                        } />
                                                </ListItem>
                                            </Link>
                                        );
                                    })}
                                </List>
                            </Fragment>
                        ) : null;
                    })}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Paper style={styles.Paper}>
                    <Routes />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default withRouter(Estudo);
