const Category = (props) => {
    const mainStyle = {
        

    }
    return (
        
        <div className="category">
            <div>
                <img src = {props.info.icon}/>
            </div>
            <p className="fs-24 name-category">{props.info.name}</p>
        </div>
    );
}
export default Category;