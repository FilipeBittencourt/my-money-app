import React from 'react'

/*
export default class Grid extends Component {
    render() {
        return (
            <div className='col-xs-12 col-ms-5 col-md-4 col-lg-2'>
                {this.props.children}
            </div>
        )
    }
}
*/
 

export default props => (
    <div className='col-xs-12 col-ms-5 col-md-4'>
         {props.children}
    </div>
) 