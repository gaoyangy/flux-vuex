let _startIdx = 0
export default {
  createNew ({dispatch,commit, state,context},title) {
    let newItem = {}
    newItem.title = title
    newItem.id = ++_startIdx
    newItem.isCompleted = false
    state.count=++state.count
    commit('createNew',newItem)
  },
  removeItemById({commit,state}, id) {
    state.count=--state.count
    commit('removeItemById',id)
  }
}