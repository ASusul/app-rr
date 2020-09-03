import React from 'react';

const Article = (props) => {
    const { title, author, text } = props
    const styles = {
        marginTop: 40
    }
    return (
        <article style={styles}>
            <h3>{title}</h3>
            <span>{author}</span>
            <p>{text}</p>
        </article>
    );
}

export default Article;