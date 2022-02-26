import React, { Component } from 'react';

import { global } from '../global/Global'
import PhoneDetailComponent from './PhoneDetailComponent';


class PhoneListContainer extends Component {

    url = global.url;

    render() {
        return (
            <div className="container d-flex phone-container">
                {this.props.phones.map(phone => (
                    <div key={phone.id}>
                        <div className="card m-3 card-phone">
                            <img src={this.url + phone.picture}
                                className="card-img-top card-image m-2" alt={phone.phone}
                                data-bs-toggle="modal" data-bs-target={"#Modal" + phone.id}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{phone.phone}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <strong>price:</strong> ${phone.price}   
                                </li>
                                <li className="list-group-item">
                                    <strong>year:</strong> {phone.year}    
                                </li>
                            </ul>

                        </div>

                        <PhoneDetailComponent phone={phone} />
                    </div>
                ))}
            </div>
        )
    }
}

export default PhoneListContainer;