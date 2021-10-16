function Circle({ls, circleColor, circleNumber}) {

    return (
        <div className="circle">
        <span style={{
            background: circleColor,
            width: '200px',
            height: '200px',
            borderRadius: '200px',
            display: 'flex',
            margin: '10 auto',
            justifyContent: 'center',
            alignItems: 'center',
            border: '10px solid white'
            }}>Circle nr.: {circleNumber}</span> 
    </div>
)
}

export default Circle;