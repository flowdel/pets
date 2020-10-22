import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux/Aux';
import PetPreview from './PetPreview/PetPreview';
import './Pets.css';
import { useLocation, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Pets = (props) => {
    const petType = useLocation().pathname;
    console.log(props.pets);

    useEffect(() => {
        props.onInitPets(petType);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [petType]);

    return (
        <Aux>
            <div className="spacer"></div>
            <div className="container">
                <div className="pets">
                    <div className="row">
                        <div className="pets__container">
                            {
                                props.pets.map(pet => {
                                    return <div className="column" key={pet.id}><Link  to={`/${pet.type}s/${pet.id}`} style={{textDecoration: 'none', color: 'black'}}>
                                        <PetPreview 
                                        name={pet.name}
                                        age={pet.age}
                                        fluff={pet.fluff}
                                        purr={pet.purr}
                                        play={pet.play}
                                        image={pet.image[0].url}
                                        class={"pet-preview_type_small"}
                                        ></PetPreview>
                                    </Link></div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
};

Pets.propTypes = {
    pets: PropTypes.array,
    onInitPets: PropTypes.func,
};

const mapStateToProps = state => {
    return {
        pets: state.pets.pets
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitPets: (petType) => dispatch(actions.fetchPets(petType)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pets);


