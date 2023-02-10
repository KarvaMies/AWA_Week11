import MyList from "./MyList"
import { useState } from "react";

const MyContainer = ({myContainer}) => {
    const [items, setItems] = useState([
        { id: "1", text: "This is an item" },
        { id: "2", text: "Also this" },
    ])

    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) return;
        setItems([...items, { id: Date.now(), text: text}]);
        setText("")
    };

  return (
    <div>
        <div>MyContainer</div>
        <MyList header="My List" items={items} />

        <form onSubmit={onSubmit}>
            <label>Item</label>
            <textarea placeholder="Add item" value ={text} onChange={(e) => setText(e.target.value)}/>
            <input className="btn" type="submit" value="Add item"></input>
        </form>
    </div>
  )
}

export default MyContainer