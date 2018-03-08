import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../redux/actions';
import {getPeopleList} from "../redux/actions/people";
import {
    Row,
    Col,
    Grid,
    Panel,
    PanelBody,
    PanelContainer,
} from '@sketchpixy/rubix';

const mapStateToProps= (state) => {
    const name = state.peopleReducer.name
        return {name}
};

@connect(mapStateToProps, actions)
export default class People extends React.Component {
    constructor(){
        super();
        this.state = {
            name: ""
        }

    }
    static fetchData(store) {
        return store.dispatch(actions.getGreeting('List of people'));
    }

    componentDidMount(){
        console.log('in component did mount-- people list', getPeopleList());
        // this.setState({
        //     listDetails: this.getPeopleList()
        // })
        this.props.getPeopleList();
    }
    
    // componentWillMount(){
    //     this.props.getPeopleList();
    // }
    //

    render() {
        const peopleList = getPeopleList();
        console.log('people list:', peopleList);
        console.log('meep:', this.props.name);
        // console.log('bloop:', this.props.getPeopleList);
        return (
            <PanelContainer>
                <Panel>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    {/*<p>{this.props.greetings.hello}</p>*/}
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelContainer>
        );
    }
}


People.propTypes = {
    getPeopleList: PropTypes.func,
    listDetails: PropTypes.object
}

