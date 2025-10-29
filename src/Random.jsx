const Random=(props)=>{
    const number = Math.floor(Math.random()*props.max)+props.min;

    return (
        <div className="RandomContainer">
            <p>Random value between {props.min} and {props.max} {"=>"} {number} </p>


        </div>
    )
}
export default Random;