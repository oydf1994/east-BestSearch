export const switchShow = (flag) => {
    return {
        type: 'switchShow',
        flag,
    };
}
export const setValue = (value) => {
    return {
        type: 'setValue',
        value,
    };
}

export const getList = async (op) => {
    let data = await fetch('http://3.141.23.218:5000/interview/keyword_search', {
        method: 'post',
        body: JSON.stringify(op),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    data = await data.json()
    return {
        type: 'getList',
        list: data.data.product_trends
    };
}