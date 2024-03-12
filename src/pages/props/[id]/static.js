import UIElement from "@/pages/rendering/ui-element";

export default function clientSideRendering({post}) {
    return <UIElement text={`클라이언트 사이드 렌더링 - ${post.name}`}></UIElement>;
}

function getData() {
    return { name: "John Doe" }
}

export function getStaticPaths() {
    return {
        paths: [{params: {id: "1"}}, {params: {id: "2"}}],
        fallback: false
    }
}

export async  function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const post = getData();
    //
    // // post 정보를 props를 통해서 내려줍니다.
    return { props: { post } };
}