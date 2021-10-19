function Square({text, color}) {
    return (

        <div className="square" style={{
            background: color
        }}>
            <p>{text + 1}</p>
        </div>

    )
};

export default Square;