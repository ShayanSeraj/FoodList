import { useEffect, useState } from 'react'
import './Create.css'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'


export default function Create() {

    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredients, setNewIngredients] = useState('')
    const [ingredients, setIngredients] = useState([])

    const { postData, data } = useFetch('http://localhost:3000/recipes', 'POST')
    const navigate = useNavigate()

    const handeSubmit = (e) => {
        e.preventDefault()
        postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
    }

    const handleAdd = (e) => {
        e.preventDefault()
        if (newIngredients && !ingredients.includes(newIngredients)) {
            setIngredients(prevIngrediants => [...prevIngrediants, newIngredients])
        }
        setNewIngredients('')
    }

    useEffect(() => {
        if(data){
            navigate('/')
        }
    }, [data, navigate])

    return (
        <div className="create">
            <h2 className="page-title">Add a new recipe</h2>
            <form onSubmit={handeSubmit}>
                <label>
                    <span>Recipe Title</span>
                    <input type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required />
                </label>
                <label>
                    <span>Recipe Ingrediants</span>
                    <div className="ingrediants">
                        <input type="text"
                            onChange={(e) => setNewIngredients(e.target.value)}
                            value={newIngredients}/>
                        <button onClick={handleAdd} className='btn'>ADD</button>
                    </div>
                </label>
                <p>Current Ingrediants: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
                <label>
                    <span>Recipe Method</span>
                    <textarea 
                    onChange={(e)=>setMethod(e.target.value)}
                    value={method}
                    required/>
                </label>
                <label>
                    <span>Cooking Time</span>
                    <input type="number" 
                    onChange={(e)=>setCookingTime(e.target.value)}
                    value={cookingTime}/>
                </label>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}
