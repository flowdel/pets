import React, {useState} from 'react';
import Aux from '../../hoc/Aux/Aux';
import PetPreview from '../Pets/PetPreview/PetPreview';

const WelcomePage = () => {
    const [mainPageInfo, setMainPageInfo] = useState([
        {
            title: 'КОШКИ',
            imageUrl: require('../../images/cat.png')
        },
        {
            title: 'СОБАКИ',
            imageUrl: require('../../images/dog.png')
        },
        {
            title: 'КАК ПРИЮТИТЬ',
            imageUrl: require('../../images/dog1.png')
        }
    ])
    return (
        <Aux>
            <div className="spacer"></div>
            <div className="container">
                <div className="pet-preview__container">
                    {
                        mainPageInfo.map(page => {
                            return <PetPreview 
                            key={page.title}
                            title={page.title}
                            imageUrl={page.imageUrl}
                            class={""}
                            clicked={() => {}}
                            ></PetPreview>;
                        })
                    }
                </div>
            </div>
        </Aux>
    )
}

export default WelcomePage;