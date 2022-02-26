import React, { Component } from 'react';
import { global } from '../global/Global'

class PhoneDetailComponent extends Component {

    url = global.url;

    render() {
        return (
            <div className="modal fade" id={"Modal" + this.props.phone.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.phone.phone}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{this.props.phone.details}</p>

                            <img src={this.url + this.props.phone.picture}
                                className="modal-img" alt={this.props.phone.phone}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default PhoneDetailComponent;