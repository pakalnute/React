function Skritulys({text, color}) {
    return (

        <div className="skritulys" style={{background: color,}}>
            <p>{text + 1}</p>
        </div>

    )
};

export default Skritulys;