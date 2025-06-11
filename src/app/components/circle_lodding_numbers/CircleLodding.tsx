export default function CircleLodding({animate}:{animate: "paused" | "running"}){
    return (
        <div className="w-[250px] h-[250px] -rotate-90">
            <svg width="100%" height="100%">
                {/* Circulo cinza */}
                <circle
                    cx="50%"
                    cy="50%"
                    r="120px"
                    fill="none"
                    stroke="#d1d0d0"
                    strokeWidth={10}
                />

                {/* Circulo Azul */}
                <circle
                    className="animate-[circle-lodding_2s_linear_forwards]"
                    style={{animationPlayState: animate}}
                    cx="50%"
                    cy="50%"
                    r="120px"
                    fill="none"
                    stroke="#2727ff"
                    strokeDasharray={120 * Math.PI * 2}
                    strokeDashoffset={120 * Math.PI * 2}
                    strokeWidth={10}
                />
            </svg>
        </div>
    )
}