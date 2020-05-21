import React, {Component} from 'react';
class Input extends Component {

    render() {
        return (
            <div >
                <input type={this.props.type} name={this.props.name} id={this.props.id}
                    class="pass"  placeholder={this.props.placeholder}
                    value={this.props.value} onChange={this.props.onChange} />
                <label className="error-msg">{this.props.errorMsg}</label>
            </div>
             
        )
    }
}
export default Input;