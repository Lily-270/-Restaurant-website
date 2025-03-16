import React from 'react';
import TimeSelection from './TimeSelection';
import { Link } from 'react-router-dom';

export default function Booking() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Book Now!</h1>
                    <form>
                        <div className="row ">
                            <div className="col-sm-6">
                                <label htmlFor="guestInput" className="form-label">Number of Guests</label>
                                <input type="text" className="form-control" id="guestInput" placeholder="Number of Guests" aria-label="Number of Guests" required />
                            </div>
                        </div>
                        <TimeSelection />
                        <fieldset className="row mb-3" style={{ marginTop: "20px" }}>
                            <legend className="col-form-label col-sm-2 pt-0">Occasion</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked />
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        Birthday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        Anniversary
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                                    <label className="form-check-label" htmlFor="gridRadios3">
                                        Business Meeting
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <Link to="/confirmed" type="button" 
                    className="btn btn-primary ml-2">Submit</Link>  
                    </form>
                </div>
                <div className="col-md-6">
                    <img src="https://images.ctfassets.net/h81st780aesh/3p269F8scsqoNoyIonFxTT/4796d33fc3eb4e7deacbec577fe48d06/restaurant-decor-ideas.jpeg" alt="Booking" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}