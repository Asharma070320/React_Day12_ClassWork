function Props(props){
    return(
        <div class="lists">
            <ul>
                <li>
                    <h2>{props.content}</h2>
                
                    <p>{props.name}</p>
                </li>
            </ul>
        </div>
    );
}
export default Props