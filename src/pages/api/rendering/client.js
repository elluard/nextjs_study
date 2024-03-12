export default function handler(req, res) {
    res.status(200).json({ value: "클라이언트 사이드 렌더링" });
}