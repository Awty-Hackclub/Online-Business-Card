import axios from 'axios';

const Create = () => {

}

const CardJson = (id) => {
    axios.get(f`/localhost:5000/card?iq=${id}`)
        .then(function (response) {
            console.log(response)
        })
}

export { Create, Card };