function Header() {
    var title = "React Learning"
    var bgPrimary = "bg-primary";
    var isHeader = true;

    var styleObj = {
        backgroundColor: "red",
        fontSize: 50 + "%"
    }


    // condition ? true statement:falsestatement

    return (
        <div className={isHeader ? "bg-primary" : "bg-secondary"}>
            <h2>Header Component</h2>
            <h3 style={styleObj}>{title}</h3>
        </div>
    )
}
export default Header;