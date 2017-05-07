import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsHeaderItens from '../common/tab/tabsHeaderItens'
import TabsContent from '../common/tab/tabsContent'
import TabsContentItens from '../common/tab/tabsContentItens'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create, update, remove } from './billingCycleActions'
import List from './billingCycleList'
import Form from './billingCycleForm'


class BillingCycle extends Component {

    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList','tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabsHeaderItens label='Listar' icon='bars' target='tabList' />
                            <TabsHeaderItens label='Incluir' icon='plus' target='tabCreate' />
                            <TabsHeaderItens label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabsHeaderItens label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabsContentItens id='tabList'> 
                                <List />
                            </TabsContentItens>   
                            <TabsContentItens id='tabCreate'> <Form onSubmit={this.props.create} submitClass='primary' submitLabel='Incluir'/> </TabsContentItens>
                            <TabsContentItens id='tabUpdate'> <Form onSubmit={this.props.update} submitClass='info' submitLabel='Alterar'/> </TabsContentItens>
                            <TabsContentItens id='tabDelete'> <Form onSubmit={this.props.remove} submitClass='danger' submitLabel='Remover' readOnly={true}/></TabsContentItens>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)
 