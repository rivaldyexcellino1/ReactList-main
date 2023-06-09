import React, {Component} from 'react';
import "../App.css"

class Media extends Component {
    render (){
        return (
            <div className="media my-3">
                    <img src={process.env.PUBLIC_URL+"/image/"+this.props.image} 
                    className="mr-3 img" alt="media" width="100"
                     />
                     
                <div className="content">
                    <h5 className="mt-0">{this.props.title}</h5>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Media;   