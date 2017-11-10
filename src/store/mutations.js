export default {
  createNew (state, newItem) {
    state.todoList.push(newItem)
    return state.todoList
  },
  toggleCompleted (state, todo) {
    let todoList = state.todoList
    for (let i = 0, l = todoList.length; i < l; ++i) {
      if (todoList[i].id == todo.id) {
        let it = todoList[i]
        if (it.isCompleted == todo.isCompleted) {
          it.isCompleted = !todo.isCompleted
          return { todoList }
        }
      }
    }
  },
  removeItemById (state, id) {
    for (let i = state.todoList.length - 1; i >= 0; --i) {
      if (state.todoList[i].id == id) {
        state.todoList.splice(i, 1)
        return state.todoList
      }
    }
  },
  restoreItems (_, todoList) {
    if (!Array.isArray(todoList)) {
      todoList = []
    }
    _startIdx = todoList.length
    return {
      todoList
    }
  }
}