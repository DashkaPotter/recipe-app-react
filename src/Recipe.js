export default function Recipes({label,image,calories,ingredients}){
    return (
        <div className="card">
            <div className="container">
            <h2 className="label">{label}</h2>
            </div>
            
            <div className="image">
            <img src={image} width="250px" alt="recipe img" />
            </div>
            

            <div className="container">
                <p className="cal">calories: {calories.toFixed(2)}</p>
            </div>
            
            <div className="container">
            <ul >
                {ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ul>
            </div>
            
        </div>
    )
}