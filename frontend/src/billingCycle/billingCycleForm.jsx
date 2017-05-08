import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import If from '../common/operator/if'
import Grid from '../common/layout/grid'
import Summary from './summary'

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (total, valorAtual) => total + valorAtual
        return {
            sumOfCredits: this.props.credits.map(credit => + credit.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(debt => + debt.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits , debts} = this.props;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos' />
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus={true} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
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
const selectForm = formValueSelector('billingCycleForm');
const mapStateToProps = state =>({
    credits: selectForm(state, 'credits'),
    debts: selectForm(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);



