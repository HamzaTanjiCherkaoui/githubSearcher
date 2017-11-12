import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com/search/repositories'

const githubService ={
	search(query,criteria='stars'){
		return new Promise((resolve)=> {
			axios.get(`https://api.github.com/search/repositories?q='${query}'&&sort='${criteria}'`)
			.then(res => {
              		resolve(res.data)
			})
		})

	}
}
export default githubService