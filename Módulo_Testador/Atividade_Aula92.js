const carros=["Lamborghini","Ferrari","Ford","Fiat"]

const cursos=["HTML","CSS","JavaScript","React","Node"]

export default function gettdsCursos(){
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}


export {carros,cursos,getCurso}

