import axios from 'axios';

export const getUserData = async() => {
    try {
        const data = await axios.get('http://localhost:4000/posts');
        console.log('[SUCCESS] Get card data');
        return data.data.data;
    } catch (e) {
        console.log('[FAIL] Get card data');
        return null;
    }


}