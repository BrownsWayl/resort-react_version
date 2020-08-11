import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
    state=  {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktail',
                info: 'blablabalbalbalab'
            },
            {
                icon: <FaHiking />,
                title: 'free Hiking',
                info: 'blablabalbalbalab'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free FaShuttle',
                info: 'blablabalbalbalab'
            },
            {
                icon: <FaBeer />,
                title: 'free Beer',
                info: 'blablabalbalbalab'
            },
        ]
    }
    render() {
        return (
            <section className='services'>
               <Title title='services' />
               <div className="services-center">
                   {this.state.services.map((item, i) => {
                       return <article key={i} className='service'>
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>
                   })}
               </div>
            </section>
        );
    }
}

export default Services;