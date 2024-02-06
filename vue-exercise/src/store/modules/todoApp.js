const storage = {
    fetch() {
        const arr = [];
        if( localStorage.length >0 ) {
            for (let i = 0; i < localStorage.length; i++) {
                if( localStorage.key(i) !== 'loglevel:webpack-dev-server' ) {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
};

const state = {
    todoItems: storage.fetch()
};

const getters = {

};

const mutations = {
    addOneItem(state, todoItem) {
        const obj = {
            completed: false,
            item: todoItem
        };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    }
};

export default {
    state,
    getters,
    mutations
}