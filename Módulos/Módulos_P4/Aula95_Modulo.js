class Cursos{
    static cursos=["HTML","CSS","JavaScript","React","Node"]
    constructor(){}

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCurso=(i_curso)=>{
        return this.cursos[i_curso]
    }

    static addcurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCurso=()=>{
        this.cursos=[]
    }
}

export default Cursos

 