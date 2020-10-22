import React, {useState} from 'react';
import Aux from '../../hoc/Aux/Aux';
import PetPreview from '../Pets/PetPreview/PetPreview';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    const [mainPageInfo] = useState([
        {
            title: 'КОШКИ',
            imageUrl: '/uploads/cat_020e1a8375.png',
            link: '/cats'
        },
        {
            title: 'СОБАКИ',
            imageUrl: '/uploads/dog_5f4eb5dc0e.png',
            link: '/dogs'
        },
        {
            title: 'КАК ПРИЮТИТЬ',
            imageUrl: '/uploads/dog1_6fbddd42bf.png',
            link: '/take-home'
        }
    ])
    return (
        <Aux>
            <div className="spacer"></div>
            <div className="container">
                <div className="welcome-page">
                    <div className="row">
                        <div className="welcome-page__container">
                            {
                                mainPageInfo.map(page => {
                                    return <div 
                                        className="column" 
                                        key={page.title}>
                                            <Link to={page.link}>
                                                <PetPreview 
                                                    title={page.title}
                                                    image={page.imageUrl}
                                                    class={""}>
                                                </PetPreview>
                                            </Link>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default WelcomePage;