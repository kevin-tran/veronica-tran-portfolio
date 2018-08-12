import React, { Fragment } from 'react'

class Minesweeper extends React.Component {
    state = {
        height: 8,
        width: 8,
        mines: 10
    }

    constructor(props) {
        super(props)
    }

    render() {

        const { height, width, mines } = this.state;

        return (
            <Fragment>
            </Fragment>
        );
    }
}

export default Minesweeper