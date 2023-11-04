import './Home.css'
import RecipeList from '../../Components/RecipeList'
import { useFetch } from '../../hooks/useFetch'

export default function Home() {

   const {data , isLoading , error} = useFetch('http://localhost:3000/recipes')

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isLoading && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
