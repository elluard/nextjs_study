export default function serverRoute() {
    return <>
        <a href="/routing">서버 라우팅</a>
    </>
}

export function getServerSideProps() {
    return {
        props: {

        }
    }
}