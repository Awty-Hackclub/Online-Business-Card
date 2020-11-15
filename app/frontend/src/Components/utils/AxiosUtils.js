import axios from 'axios';

const Create = () => {

}

const Card = (id) => {
    axios.get(f`/localhost:5000/card?iq=${id}`)
}