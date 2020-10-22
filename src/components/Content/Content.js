import React from 'react';
import PropTypes from 'prop-types';
import './Content.css';
import Aux from '../../hoc/Aux/Aux';

const Content = (props) => {
    return (
        <Aux>
            <div className="spacer"></div>
            <div className="container">
                <div className="content-box">
                    <h1>{props.aboutInfo.title}</h1>
                    <div>
                        <p>{props.aboutInfo.mainInfo}</p>
                        {props.aboutInfo.children ? 
                        props.aboutInfo.children.map((child) => {
                            return (
                                <Aux key={child.title}>
                                    <h2>{child.title}</h2>
                                    <p>{child.description}</p>
                                </Aux> 
                            )
                        })
                        : null}
                        {props.aboutInfo.table ? 
                            <table>
                                {props.aboutInfo.table.map((row) => {
                                    return (
                                        <tr key={row.title}>
                                            <td>{row.title}</td>
                                            <td>{row.description}</td>
                                        </tr>
                                    )
                                })}
                            </table>
                        : null}
                    </div>
                </div>
            </div>
        </Aux>
    )
};

Content.propTypes = {
    aboutInfo: PropTypes.object,
};

export default Content;
