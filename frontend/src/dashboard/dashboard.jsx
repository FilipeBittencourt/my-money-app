import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'
 
class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row> 
                        <ValueBox  color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox  color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox  color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Row> 
                </Content> 
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
 

/*
//ARROW FUNCTION
const DashboardFunc = (props) => {
 

    const { credit, debt } = props.summary

    return (
        <div>
            <ContentHeader title='Dashboard' small='Versão 1.0' />
            <Content>
                <Row>
                    <ValueBox color='green' icon='bank'
                        value={`R$ ${credit}`} text='Total de Creditos' />

                    <ValueBox color='red' icon='credit-card'
                        value={`R$ ${debt}`}  text='Total de Debitos' />

                    <ValueBox color='blue' icon='money'
                        value={`R$ ${credit - debt}`}  text='Valor Consolidado' />
                </Row>
            </Content>
        </div>
    )
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DashboardFunc)
*/






//FUNCTION
/*
export default function(){

   return ( <div>
        <ContentHeader title='Dashboard' small='Versão 1.0' />
        <Content>
            <Row>
                <ValueBox color='green' icon='bank'
                    value='R$ 100.00' text='Total de Creditos' />

                <ValueBox color='red' icon='credit-card'
                    value='R$ 100.00' text='Total de Debitos' />

                <ValueBox color='blue' icon='money'
                    value='R$ 200.00' text='Valor Consolidado' />
            </Row>
        </Content>
    </div>)
}
*/
