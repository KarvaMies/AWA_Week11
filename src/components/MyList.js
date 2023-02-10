const MyList = ({ header , items }) => {
  return (
    <div>
        <h1>{header}</h1>
        <ol>
            {items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ol>
    </div>
  )
}

export default MyList