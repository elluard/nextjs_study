export default function handler(req, res) {
    res.status(200).json({ value: "서버 사이드 렌더링" });
}