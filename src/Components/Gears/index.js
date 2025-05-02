export default function Gears() {
    const teethPositions = Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        return { transform: `rotate(${angle}rad)` }
    })

    return (
        <>
        <div className="gear gear-1">
                {teethPositions.map((style, index) => (
                    <div key={`gear1-tooth-${index}`} className="gear-teeth" style={style}></div>
                ))}
            </div>

            <div className="gear gear-2">
                {teethPositions.map((style, index) => (
                    <div key={`gear2-tooth-${index}`} className="gear-teeth" style={style}></div>
                ))}
            </div>

            <div className="gear gear-3">
                {teethPositions.map((style, index) => (
                    <div key={`gear3-tooth-${index}`} className="gear-teeth" style={style}></div>
                ))}
            </div>

            <div className="blueprint-grid"></div>
        </>
    )
}
