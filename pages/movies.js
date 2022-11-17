export default function Movies({data}){
    return (
        <div>
            <form>
                <label for='title'>
                    title
                </label>
                <input id="title" name="title" type="text"/>
                <input type="submit" value="Search"/>
            </form>
            <div>
                {data.Search.map( (m) => <div>{m.Title} --- {m.Year} <img src={m.Poster}/></div>  )} 
            </div>
        </div>
    )
}
export async function getServerSideProps(context){
    const {title} = context.query

    const res = await fetch(`http://www.omdbapi.com/?apikey=3b864bc8&s=${title}`)
  
    const data = await res.json()
  
    return {
        props: {
            data
        }
    }
}


