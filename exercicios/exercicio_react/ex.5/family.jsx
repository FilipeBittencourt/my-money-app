import React from 'react'
import { childrenWhithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Família</h1>
        {childrenWhithProps(props.children, props)}
    </div>
)