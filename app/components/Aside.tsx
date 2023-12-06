export default function Aside() {
    return (
        <div className="w-1/6 text-black  py-8 px-6 ">
            <a className="py-16  px-3"  href="/admin/course">Listar</a>
            <br></br>
            <a className="py-16 px-3"  href="/admin/course/new">Cadastrar</a>
            <br></br>
            <a className="py-16 px-3 " href="/admin/course/new">Deletar</a>

        </div>
    )
}