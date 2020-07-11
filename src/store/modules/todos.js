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
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('REMOVE_TODO', id)
    },
    async filterTodos(e){
        //get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        console.log(limit)
    }
};

const mutations = {
    SET_TODOS: (state, todos) => (state.todos = todos),
    NEW_TODO: (state, todo) => (state.todos.unshift(todo)),
    REMOVE_TODO: (state, id) => (state.todos =  state.todos.filter(todo => todo.id !== id))
};

export default {
    state,
    getters,
    actions, 
    mutations
}