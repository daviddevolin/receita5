import useSWR from 'swr';
import { useState } from 'react';
import { Button ,Tooltip, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import Link from 'next/link';


export default function Movies3(){
    const [url, setUrl] = useState('')
    const {data, error} = useSWR(url, theFetcher)
    const onClickHandler = (e) => {
        e.preventDefault()
        if (url === '') setUrl('http://www.omdbapi.com/?apikey=3b864bc8&s=bagdad')
        else setUrl('')
    }
    return (
        <div>
            <TheLink url={url} handler={onClickHandler}/>
            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''}/>
            
        </div>
    )
}
export function TheMovies({data,show}){
    if (!show) return (<div></div>)    
    if (data.error) return (<div>falha na requisição</div>)
    if (data.Search === '' ) return (<div>carregando...</div>)
    return (
        <div>
            { data.Search.map( (m, i) => 
               <li key={i}>
                   <Link href={`/onemovie/${m.imdbID}`}><a>{m.Title}</a></Link>
               </li>
            )}        
        </div>
    )
}

export function TheLink({url, handler}){    
    return (
        <div>
            <Link href="/movies3.js">
                <Button type='primary' onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'}</Button>
            </Link>
            <Button type="dashed" icon={<SearchOutlined />}  href="/searchmovies">
                pesquisar filme
            </Button>
        </div>
    )
}

async function theFetcher(url) {
    if (url === null || url === '') return {Search:''}
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
