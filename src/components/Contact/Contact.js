import React from 'react';
import Content from '../Content/Content';


const Contact = () => {
    const contactInfo = {
        title: 'Контакты',
        mainInfo: 'Ниже вы можете найти контакты, по которым можно с нами связаться.',
        table: [
            {
                title: 'ВКонтакте',
                description: 'vk.com/fofofo'
            },
            {
                title: 'Facebook',
                description: 'facebook.com/fofofo'
            },
            {
                title: 'Instagram',
                description: 'instagram.com/fofofo'
            },
            {
                title: 'E-mail',
                description: 'fofofo@gmail.com'
            },
        ]
    }
    return (
        <Content aboutInfo={contactInfo}/>
    )
};

export default Contact;