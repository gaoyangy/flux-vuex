<template>
	<div class="todolist">
		<h4>TODO LIST<i>(sum: {{count}})</i></h4>
		<ul>
			<li v-for="child in todoList">
          		<label>
              		<input type="checkbox" :checked="child.isCompleted" @change="toggleCompleted(child)"/>
              		<span>{{child.title}}</span>
          		</label>
              	<button @click="removeItemById(child.id)">x</button>
			</li>
		</ul>
		<input type="text" v-model="newText"/> <button @click="createNew(newText)">Add</button>
	</div>
</template>
<script type="text/javascript">
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
		data () {
			return {
				newText: '',
				count: 0
			}
		},
		mounted(){
			console.log(window)
		},
		computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapState([
			'todoList',
			'count'
		])
		},
		methods:{
    ...mapMutations([
				'createNew',
				'removeItemById', 
				'toggleCompleted'
		]),
		...mapActions([
			'createNew',
			'removeItemById'
		])
		},
		proxys: {
			onCreateNew ({resolve}, item) {
				this.count++
				return resolve('ok')
      },
      onRemoveItemById({resolve}, item) {
        this.count--
        return resolve('ok')
      }
		}
	}
</script>