import Link from "next/link";

export default function serverRoute() {
    return <>
        <Link prefetch={false} href="/routing">클라이언트 라우팅</Link>
    </>
}