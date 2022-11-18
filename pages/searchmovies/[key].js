import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Card } from 'antd';
import "antd/dist/antd.css";


export default function MovieSearch(){
    const router = useRouter()
    const {key} = router.query
    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=5d61b462&s=${key}`, fetcher)
    const { Meta } = Card;

    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
            <div>
                {data.Search.map((m) => (
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img src={m.Poster}/>}
                    >
                        <Meta  title={m.Title} description={m.Year} />
                    </Card>
                ))} 
            </div>
    )    
  }

  async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }