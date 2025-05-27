import Navbar from "../../components/nav/Navbar"

function GenerateFlashcard(){
return(
    <>
        <Navbar/>
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 form-container">
            <form action="">
                <input type="text"  placeholder="Enter topic"/>
                <select name="" id="">
                    <option value="1">Easy</option>
                    <option value="2">Medium</option>
                    <option value="3">Hard</option>
                </select>
                <button type="submit">Generate</button>
            </form>
        </div>
    </>
)
}
export default GenerateFlashcard