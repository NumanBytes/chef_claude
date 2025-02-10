import './styles.css'

const MainForm = () => {
    return (
        <form className="main-form">
            <input 
                type="text"
                placeholder="e.g, Oregeon"
                aria-label="Add Ingredient"
            />
            <button>Add Ingredient</button>
        </form>
    )
}

export default MainForm;