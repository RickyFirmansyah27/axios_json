import axios from "axios";

export const getUsers = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createUser = async (data) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', data);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }

};

export const updateUser = async (update) => {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, update);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }

}

export const updateData = async (dataUpdate) => {
    try {
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, dataUpdate);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }

}

export const deleteUser = async () => {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}




export const update = {
    "name": "Ricky Firmansyah",
    "username": "Ricky",
    "email": "belajar@node.js",
}

export const data = {
    "name": "John Doe",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "address": {
        "street": "123 Main St.",
        "suite": "Apt. 1",
        "city": "Anytown",
        "zipcode": "12345",
        "geo": {
            "lat": "37.7749",
            "lng": "-122.4194"
        }
    },
    "phone": "555-555-5555",
    "website": "johndoe.com",
    "company": {
        "name": "John Doe Co.",
        "catchPhrase": "Where quality meets affordability.",
        "bs": "We do things right."
    }
};
