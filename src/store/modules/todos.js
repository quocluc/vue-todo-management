import axios from 'axios';

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo 1'
        },
        {
            id: 2,
            title: 'Todo 2'
        },
        {
            id: 3,
            title: 'Todo 3'
        }
    ],
};

const getters = {
    allTodos: (state) => state.todos
};
const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
    }
};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations,
};