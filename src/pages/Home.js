import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <>
                <Hero>
                    <Banner title='luxurious rooms'
                        subtitle='premium rooms starting at $999.99' >
                        <Link to='/rooms' className='btn-primary'>
                            our rooms
                        </Link>
                    </Banner>
                </Hero>
                <Services />
                <FeaturedRooms />
         
            </>
        );
    }
}

export default Home;