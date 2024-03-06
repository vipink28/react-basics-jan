import { useContext } from "react";
import { MyContext } from "../App";

function Header() {
    var title = "React Learning"
    var bgPrimary = "bg-primary";
    var isHeader = true;

    var styleObj = {
        backgroundColor: "red",
        fontSize: 50 + "%"
    }

    // condition ? true statement:falsestatement
    const myData = useContext(MyContext);

    return (
        <div className={isHeader ? "bg-primary" : "bg-secondary"}>
            <h1>{myData}</h1>
            <h2>Header Component</h2>
            <h3 style={styleObj}>{title}</h3>
        </div>
    )
}
export default Header;