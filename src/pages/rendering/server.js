import UIElement from "@/pages/rendering/ui-element";

export default function serverSideRendering({post}) {
    return <UIElement text={post.value}></UIElement>;
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/rendering/server');
    const post = await res.json();

    // post 정보를 props를 통해서 내려줍니다.
    return { props: { post } };
}