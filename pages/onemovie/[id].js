import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Card } from 'antd';
import "antd/dist/antd.css";

export default function MovieID(){
    const router = useRouter()
    const {id} = router.query
    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=5d61b462&i=${id}`, fetcher)
    const { Meta } = Card;
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
  
    return (
      <div id="content">
        <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img src={data.Poster}/>}
        >
            <Meta  title={data.Title} description={data.Year} />
        </Card>
      </div>  
    )    
  }

  async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }