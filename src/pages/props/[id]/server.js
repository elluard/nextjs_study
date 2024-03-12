import UIElement from "@/pages/rendering/ui-element";

export default function serverSideRendering({post}) {
    return <UIElement text={`서버 사이드 렌더링 - ${post.name}`}></UIElement>;
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/hello');
    const post = await res.json();

    // post 정보를 props를 통해서 내려줍니다.
    return { props: { post } };
}