import React from 'react'
import threeEntryPoint from '../three/entry'

import styles from './index.module.scss'

class Sphere extends React.Component {
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }
    render() {
        return (
            <div ref={element => this.threeRootElement = element} className={styles.container} />
        );
    }
}

export default Sphere