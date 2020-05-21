import React from "react";

class Sideboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            Painting: [
                { id: "1", Painting: "Painting" },
                { id: "2", Painting: "Exterior-Wall-Painting" },
                { id: "3", Painting: "Full-house-Painting" },
                { id: "4", Painting: "Room-Painting" },
                { id: "5", Painting: "Interior-wall-Painting" }
            ],

            Electrician: [
                { id: "1", Electrician: "Electrician" },
                { id: "2", Electrician: "Cooler" },
                { id: "3", Electrician: "Electrical Fault Repairing" },
                { id: "4", Electrician: "Electrical-Wiring" },
                { id: "5", Electrician: "Fan" },
                { id: "6", Electrician: "Geyser"},
                { id: "7", Electrician: "Refrigerator"},
                { id: "8", Electrician: "Washing-Machine-Reapair"},
            ],

            Parlor: [
                { id: "1", Parlor: "Parlor" },
                { id: "2", Parlor: "Faical-Service" },
                { id: "3", Parlor: "Saloon-Service" },
                { id: "4", Parlor: "Hair-Service" },
                { id: "5", Parlor: "Eyebrow-Services" }
            ],

            Mehndi: [
                { id: "1", Mehndi: "Mehndi" },
                { id: "2", Mehndi: "Bridal-Mehndi" },
                { id: "3", Mehndi: "Double-Hand-Mehndi" },
                { id: "4", Mehndi: "One-Hand-Mehndi" }, 
            ],

            Purifier: [
                { id: "1", Purifier: "Water Purifier" },
                { id: "2", Purifier: "LG Purifier" },
                { id: "3", Purifier: "Kent Purifier" },
                { id: "4", Purifier: "Livpure Purifier" },
                { id: "5", Purifier: "Pure-IT Purifier" }
            ],

            Plumber: [
                { id: "1", Plumber: "Plumber" },
                { id: "2", Plumber: "Kitche-Plumbing" },
                { id: "3", Plumber: "Washroom-Plumbing" },
                { id: "4", Plumber: "Ect" },
            ],
        };

    }

    render() {
        return (

            <div className="main-sideboard" >
                <div className="sideboard-inner">
                    <h6 className='sidebar-title'>Select your Prefrence</h6>
                    <div className='control'>
                    <select className="form-control">
                        {this.state.Painting.map(item => (
                            <option>
                                {item.Painting}
                            </option>
                        ))}
                    </select>

                    <select className="form-control">
                        {this.state.Electrician.map(item => (
                            <option  >
                                {item.Electrician}
                            </option>
                        ))}
                    </select>

                    <select className="form-control">
                        {this.state.Parlor.map(item => (
                            <option >
                                {item.Parlor}
                            </option>
                        ))}
                    </select>

                    <select className="form-control">
                        {this.state.Mehndi.map(item => (
                            <option>
                                {item.Mehndi}
                            </option>
                        ))}
                    </select>

                    <select className="form-control">
                        {this.state.Purifier.map(item => (
                            <option>
                                {item.Purifier}
                            </option>
                        ))}
                    </select>
                    <select className="form-control">
                        {this.state.Plumber.map(item => (
                            <option>
                                {item.Plumber}
                            </option>
                        ))}
                    </select>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Sideboard;