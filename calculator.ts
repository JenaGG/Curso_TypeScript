
type Operations = `multiply`|`add`|`divide`

const calculator = (a:number, b:number, op:Operations ): number =>
{
    if(op==`multiply`) return a*b
    if(op==`add`) return a+b
    if(op==`divide`)
    {
        if(b==0) throw new Error("can \t divide by 0!")
        
        return a/b
    }
    throw new Error("Operation is not valid")
}

    console.log(calculator(1,3,`add`))
    console.log(calculator(1,3,`multiply`))
    console.log(calculator(1,0,`divide`))
console.log(process.argv)