import "../styles/components/_tags.scss";

export default function Tags() {
    const tags = ['#spotify', '#musicworld', '#jazz', '#billboard', '#rock', '#metal', '#pop', '#rap'];
    return (
        <div className="filter-tags">
            {tags.map(tag => (
                <button key={tag} className="tag">{tag}</button>
            ))}
        </div>
    )
}