let _startIdx = 0
export default {
  createNew ({dispatch,commit, state,context},title) {
    let newItem = {}
    newItem.title = title
    newItem.id = ++_startIdx
    newItem.isCompleted = false
    commit('createNew',newItem)
  },
  removeItemById({commit}, id) {
    commit('removeItemById',id)
  }
}