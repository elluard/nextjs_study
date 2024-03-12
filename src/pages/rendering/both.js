import UIElement from "@/pages/rendering/ui-element";
import {useEffect, useState} from "react";

export default function serverSideRendering({post}) {
    const [textFromApi, setText] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/rendering/client')
            .then((res) => res.json())
            .then((body) => setText(body.value))
    }, [])

    return <>
        <UIElement text={textFromApi}/>
        <br/>
        <UIElement text={post.value}/>
    </>;
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/rendering/server');
    const post = await res.json();

    // post 정보를 props를 통해서 내려줍니다.
    return {props: {post}};
}