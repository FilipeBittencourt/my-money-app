export function changeValue(event){
    console.log('changeValue')
    return{
        type: 'VALUE_CHANGED',
        payload: event.target.value
    }
}