import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse deleniti, quas dolor architecto, eaque corporis ipsa quidem aliquid optio mollitia exercitationem pariatur maiores, odit non reprehenderit sapiente eum autem."
    },
    {
        id: 2,
        title: "Czym jest paradok femiego",
        author: "Jan Nowaczewski",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse deleniti, quas dolor architecto, eaque corporis ipsa quidem aliquid optio mollitia exercitationem pariatur maiores, odit non reprehenderit sapiente eum autem."
    },
    {
        id: 3,
        title: "Ciemna strona mocy",
        author: "Lord Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse deleniti, quas dolor architecto, eaque corporis ipsa quidem aliquid optio mollitia exercitationem pariatur maiores, odit non reprehenderit sapiente eum autem."
    },
]


const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className='home'>
            {artList}
        </div>
    );
}

export default HomePage;