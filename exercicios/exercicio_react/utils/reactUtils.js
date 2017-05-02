import React from 'react'

function childrenWhithProps(children, props){
    return React.Children.map(props.children,
            child => React.cloneElement(child, {...props }))
}

export {childrenWhithProps}