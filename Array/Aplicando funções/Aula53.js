let valores=[1,2,3,4,5]
const op=[
    (val)=>{
        let res=0
        for(v of val){
            res+=v
        }
        return res
    },

    (val)=>{
        let res=2
        for(v of val){
            res*=v
        }
        return res
    }
    ,
    (val)=>{
        
        for(v of val){
            console.log(v)
        }
        
    }
] 

console.log(op[0](valores))//valores vai entrar para val