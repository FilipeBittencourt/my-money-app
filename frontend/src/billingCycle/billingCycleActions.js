import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(() => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                //só é possivel passar um array de ACTIONS por conta o multi, pois o padrão é só uma action, passado pelo Middleware em index.js linha 14
                dispatch([
                    resetForm('billingCycleForm'), // id do formulario
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])

                /*    
               //Sem o 'redux-multi' a chamada ficaria assim:
                dispatch(resetForm('billingCycleForm')); // id do formulario
                dispatch(getList());
                dispatch(selectTab('tabList'));
                dispatch(showTabs('tabList', 'tabCreate'));
                */

            }).catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            });
    }
}

export function showUpdates(billingCycle) {
    return [
        selectTab('tabUpdate'),
        showTabs('tabUpdate')
    ]

}


/*




const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}*/