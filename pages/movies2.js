import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
const Movies2 = () => {
    const router = useRouter()
    const movie = router.query.movies2
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=3b864bc8&s=bagdad`,fetcher);
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <ul>
            { data.Search.map( (m, i) => 
               <li key={i}>
                   <Link href={`/movie/${m.imdbID}`}><a>{m.Title}--- {m.Year}</a></Link>
                   
               </li>
            )}
        </ul>
    )    
};



async function fetcher(url) {
    const res = await fetch(url)
    const json = await res.json()
    return json

}

export default Movies2;