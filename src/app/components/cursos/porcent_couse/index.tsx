/*
    porcent, valor vindo do banco de dados, pela a propriedade porcent de userCouser
    steps, quantidade de videos do curso, videos.length
*/

export default function PorcentCourse({porcent, steps}:{porcent: number, steps: number}) {
    const porcentformat = Math.floor(porcent * 100) + "%"
    const totsteps = steps
    const competeSteps = steps * porcent
    return(
        <section className="flex items-center justify-center flex-col md:flex-row gap-2 w-full max-w-[800px] mx-auto p-10 bg-gray-200 rounded-xl text-center">
            <div className="w-full h-5 relative bg-white rounded-xl">
                <span className={`absolute top-0 left-0 block h-full bg-blue-800 rounded-xl`} style={{width: porcentformat}}></span>
            </div>
            <span className="text-blue-900">{porcentformat} Completos</span>
            <span>{competeSteps}/{totsteps}</span>
        </section>
            
    )
}