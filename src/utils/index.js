import axios from 'axios'

export const connectPg = async addr=>{// return {err?}
    const result = await axios.post('http://localhost:8080/api/connect', {addr})
    const {data} = result
    if(data.err){
        console.log('connect err:', data.err)
        return data.err
    }

    console.log('connect success')
}

export const queryPg = async queryString=>{
    const result = await axios.post('http://localhost:8080/api/query', {queryString})
    const {data} = result
    if(data.err){
        console.log('query err:', data.err)
        return {err:data.err, result: null}
    }

    console.log('query result:', data)
    return {err: null, result: data}
}