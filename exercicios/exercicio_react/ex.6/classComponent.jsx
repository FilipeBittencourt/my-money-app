import React, { Component } from 'react'

export default class ClassComponent extends Component {
    render() { //obrigatório ter o metodo  >>Render()<< para retornar o template
        return (
            <h1>{this.props.value}</h1>
        )
    }
}