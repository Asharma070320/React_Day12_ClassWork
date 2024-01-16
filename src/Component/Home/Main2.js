function Main2(props){
    return(
        <div class="secMain">
            <div class="image">
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />

            </div>
            <div class="another">
                <h1 class="mainTxxt">{props.mainTxt}</h1>
                <br />
                <p class="mainparagraph">{props.mainPara}</p>
                <br />
                <button class="mainBtn">{props.mainBtn}</button>
            </div>

            
        </div>
    );
}
export default Main2