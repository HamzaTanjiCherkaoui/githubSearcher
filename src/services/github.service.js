import axios from 'axios'

const baseUrl ='https://api.github.com/search/repositories' ;

const githubService ={
	search(query,criteria='stars' , order ='desc', page = 0 ){
		return new Promise((resolve)=> {
			axios.get(`${baseUrl}?q=${query}&&sort=${criteria}&&order=${order}&&page=${page}`)
			.then(res => {
              		resolve(res.data)
			})
		})

	}
}
export default githubService