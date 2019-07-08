import React from "react";
import { connect } from "react-redux";
import { User } from "./User";
import { Main } from "./Main";
import { setName } from "../actions/userActions";

class Test extends React.Component {

    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")} />
                <User username={this.props.user.name} />
            </div>
        );

    }

}



const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};



const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Test);