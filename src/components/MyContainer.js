import MyList from "./MyList"
import { useState } from "react";

const MyContainer = () => {
    const [items, setItems] = useState([
        { id: "1", text: "This is an item", clicked: false },
        { id: "2", text: "Also this", clicked: false },
    ])

    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) return;
        setItems([...items, { id: Date.now(), text: text, clicked: false}]);
        setText("")
    };

    const updateItem = (id) => {
        setItems(items =>
            items.map(item => {
                if (item.id === id) {
                    return { ...item, clicked: !item.clicked };
                }
                return item;
            })
        )
    }

  return (
    <div>
        <MyList 
            updateItem={updateItem}
            header="My List" 
            items={items} 
        />

        <form onSubmit={onSubmit}>
            <label>Item</label>
            <textarea placeholder="Add item" value ={text} onChange={(e) => setText(e.target.value)}/>
            <input className="btn" type="submit" value="Add item"></input>
        </form>
    </div>
  )
}

export default MyContainer
