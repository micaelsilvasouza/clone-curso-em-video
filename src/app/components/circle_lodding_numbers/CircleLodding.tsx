export default function CircleLodding({animate}:{animate: "paused" | "running"}){
    return (
        <div className="size-[210px] -rotate-90">
            <svg width="100%" height="100%">
                {/* Circulo cinza */}
                <circle
                    cx="50%"
                    cy="50%"
                    r="100px"
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
                    r="100px"
                    fill="none"
                    stroke="#2727ff"
                    strokeDasharray={100 * Math.PI * 2}
                    strokeDashoffset={100 * Math.PI * 2}
                    strokeWidth={10}
                />
            </svg>
        </div>
    )
}
