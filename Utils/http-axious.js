import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export default axios.create({

    baseURL : 'https://localhost:44338/v1/',
    headers : {

        'content-type' : 'application/json'

    }

})