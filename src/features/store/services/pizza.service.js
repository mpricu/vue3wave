const updatePizza = async item => {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    };

    return await fetch(
        'http://localhost:3000/menuItems/' + item.id,
        requestOptions
    );
};

export default {
    updatePizza
};
