export default function PorcentCourse({porcent}:{porcent: number}) {
    return(
        <div className="w-full max-w-[800px] h-50 bg-gray-500 relative">
            <span className={`absolute block w-[${porcent*100}%] h-full bg-blue-800`}></span>
            <span>{porcent * 100}</span>
        </div>
    )
}