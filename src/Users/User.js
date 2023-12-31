import { useParams, Link } from "react-router-dom";
import users from "../Database/database";

function User() {
    let params = useParams();
    console.log(params);

    let { par2 } = useParams();
    let { userId } = useParams();

    let user = users.find((user) => user.id === parseInt(userId));
    return user ? (
        <div>
            <h1>Details</h1>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Parametro dinamico 2: {par2}</p>
            <Link to="/users">Back to User List</Link>
        </div>
    ) : (
        <div>User not found</div>
    );
}
export default User;

