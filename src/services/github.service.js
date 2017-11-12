import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com/search/repositories'

const githubService ={
	search(query,criteria='stars' , order ='desc', page = 0 ){
		console.log(`https://api.github.com/search/repositories?
				q='${query}'&&sort='${criteria}'&&order='${order}'&&page=${page}`);
		return new Promise((resolve)=> {
			axios.get(`https://api.github.com/search/repositories?
				q='${query}'&&sort='${criteria}'&&order='${order}'&&page=${page}`)
			.then(res => {
              		resolve(res.data)
			})
		})

	}
}
export default githubService