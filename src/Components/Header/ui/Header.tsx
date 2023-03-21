import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookDataActions } from '../model/slice/booksData';
import { KEY_API } from '../../../../constants';
import cls from './Header.module.scss';
import { Sort, Category} from './../../../types/types';


const Header = () => {
    const [request, setRequest] = useState<string>();
    const [sort, setSort] = useState<Sort>('relevance');
    const [category, setCategory] = useState<Category>('all');
    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener('keydown', keyHandler);

        return () => {
            document.removeEventListener('keydown', keyHandler)
        }
    })

    const keyHandler = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            clickHandler();
        }
    }

    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequest(event.target.value);
    }

    const clickHandler = useCallback(async () => {
        try {
            dispatch(bookDataActions.setIsLoading(true));
            let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${request}&orderBy=${sort}&subject:${category}&key=${KEY_API}`).then(res => res.json());
            await dispatch(bookDataActions.addItems(response.items));
            await dispatch(bookDataActions.addTotalItems(response.totalItems));
            dispatch(bookDataActions.setIsLoading(false));
        } catch (error) {
            console.log(error);
            dispatch(bookDataActions.setIsLoading(false));
        }
    }, [request, sort])

    const sortHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value as Sort);
    }

    const categoriesHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value as Category);
    }
    return (
        <div className={cls.header}>
            <h1 className={cls.title}>Search for books</h1>
            <div className={cls.search}>
                <input className={cls.search__input} value={request} onChange={searchHandler} />
                <button className={cls.search__button} onClick={clickHandler}>Search</button>
            </div>

            <div className={cls.select}>
                <select className={cls.selet__item} name="sort" onChange={(event) => sortHandler(event)}>
                    <option value="newest">newest</option>
                    <option value="relevance" selected>relevance</option>
                </select>

                <select className={cls.selet__item} name="categories" onChange={(event) => categoriesHandler(event)}>
                    <option value="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                </select>
            </div>
        </div>
    );
};

export default Header;