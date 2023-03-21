import { KEY_API } from './../../../../constants';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cls from './BookPage.module.scss';
import { IBook } from 'src/types/types';
import Loader from './../../../Components/Loader/Loader';

export const BookPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState<IBook>();
    const navigate = useNavigate();

    useEffect(() => {
        async function getBook(){
            try{
                let respose = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${KEY_API}`)
                let data = await respose.json();
                console.log(data);

                if(data){
                    const {
                        volumeInfo
                    } = data;

                    const {
                        title, 
                        authors,
                        subtitle,
                        description,
                        categories,
                        imageLinks,
                    } = volumeInfo;

                    const newBook = {
                        title, 
                        authors,
                        subtitle,
                        description,
                        categories,
                        imageLinks,
                    }

                    setBook(newBook);
                } else {
                    setBook(null);
                }
            } catch(error){
                console.log(error);
            }
        }

        getBook()
    }, [id])

    if(book === undefined){
        return (<Loader />)
    }

    return (
        <div className={cls.bookPage}>
            <button onClick={() => navigate('/')}>назад</button>
            <img className={cls.img} src={book.imageLinks.thumbnail} />
            <div className={cls.info}>
                <h1 className={cls.title}>{book.title}</h1>
                <p className={cls.authors}>{book.authors}</p>
                <p className={cls.description}>{book.description}</p> 
            </div>
        </div>

    );
};
