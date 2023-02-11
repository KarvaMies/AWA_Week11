const MyList = ({ header , items, updateItem }) => {
  return (
    <div>
        <h1>{header}</h1>
        <ol>
            {items.map((item) => (
                <li 
                  key={item.id} 
                  onClick={() => updateItem(item.id)} 
                  style={{ textDecoration: item.clicked ? 'line-through' : ''}}
                >{item.text}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default MyList