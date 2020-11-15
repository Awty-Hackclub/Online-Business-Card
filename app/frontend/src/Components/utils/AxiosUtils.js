import axios from 'axios';

const Create = (object) => {
    axios.request({
        method: 'POST',
        url: 'https://localhost:5000/create',
        data: {
            title: object.title,
            youtube: object.youtube,
            twitter: object.twitter,
            facebook: object.facebook,
            description: object.description
        },
    })
}

const CardJson = (id) => {
    axios.get(f`/localhost:5000/card?iq=${id}`)
        .then(function (response) {
            return response;
        })
}

export { Create, Card };