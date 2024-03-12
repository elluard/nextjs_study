import UIElement from "@/pages/rendering/ui-element";
import {useEffect, useState} from "react";

export default function clientSideRendering() {
    const [textFromApi, setText] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/rendering/client')
            .then((res) => res.json())
            .then((body) => setText(body.value))
    }, [])

    return <UIElement text={textFromApi}/>;
}