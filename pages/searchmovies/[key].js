import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function MovieID(){
    const router = useRouter()
    const {key} = router.query
    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=5d61b462&s=${key}`, fetcher)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    console.log(data)
    return (
            <div>
                {data.Search.map((m) => (
                    <div>
                        {m.Title} --- {m.Year}
                        <div>
                            <img style={{ width: '200px' }} variant="top" src={m.Poster}/>
                        </div>
                    </div>
                ))} 
            </div>
    )    
  }

  async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }