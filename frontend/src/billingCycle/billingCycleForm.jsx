import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (

            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} label='Nome' placeholder='Informe o nome' />
                    <Field name='month' component={labelAndInput} label='Mês' type='number' placeholder='Informe o mês' />
                    <Field name='year' component={labelAndInput} label='Ano' type='number' placeholder='Informe o ano' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

/*
 destroyOnUnmount:false
 Server para:
 1 - Manter os dados do formulário, pois estamos usando o mesmo FORM para create e update
 2 - E trabalhar com Formulários dinâmicos.
*/

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);



