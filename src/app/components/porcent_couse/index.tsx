export default function PorcentCourse({porcent}:{porcent: number}) {
    const porcentformat = (porcent * 100) + "%"
    return(
        <div className="w-full max-w-[800px] h-5 bg-gray-200 relative mx-auto">
            <span className={`absolute top-0 left-0 block h-full bg-blue-800`} style={{width: porcentformat}}></span>
            <span className="absolute top-0 left-0 block h-full w-full text-center">{porcentformat}</span>
        </div>
    )
}