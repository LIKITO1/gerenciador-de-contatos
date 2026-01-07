import {Link} from "react-router-dom"
function Menu(){
    return(
        <>
            <div className="absolute ring-1 text-white w-dvw h-30">
                <Link to="/home">Home</Link>
            </div>
        </>
    )
}
export default Menu