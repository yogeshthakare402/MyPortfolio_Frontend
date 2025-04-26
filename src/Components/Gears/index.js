export default function Gears() {
    // Create an array of 12 teeth positions
    const teethPositions = Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        return { transform: `rotate(${angle}rad)` }
    })

    return (
        <>
            {/* Gear 1 */}
            <div className="gear gear-1">
                {teethPositions.map((style, index) => (
                    <div key={`gear1-tooth-${index}`} className="gear-teeth" style={style}></div>
                ))}
            </div>

            {/* Gear 2 */}
            <div className="gear gear-2">
                {teethPositions.map((style, index) => (
                    <div key={`gear2-tooth-${index}`} className="gear-teeth" style={style}></div>
                ))}
            </div>

            {/* Gear 3 */}
            <div className="gear gear-3">
                {teethPositions.map((style, index) => (
                    <div key={`gear3-tooth-${index}`} className="gear-teeth" style={style}></div>
                ))}
            </div>

            {/* Blueprint Grid */}
            <div className="blueprint-grid"></div>
        </>
    )
}
