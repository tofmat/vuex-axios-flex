import axios from 'axios'

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};
 
const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('SET_TODOS', response.data)
    },
    async addTodo({commit}, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
        commit('NEW_TODO', response.data)
    },
    async deleteTodo({commit}, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }
};

const mutations = {
    SET_TODOS: (state, todos) => (state.todos = todos),
    NEW_TODO: (state, todo) => (state.todos.unshift(todo))
};

export default {
    state,
    getters,
    actions,
    mutations
}