import { Link } from "react-router-dom";
import cls from './ListItem.module.scss';

interface ListItemProps {
    book: any,
}

export const ListItem = ({ book }: ListItemProps) => {

    const {
        id,
        volumeInfo,
    } = book;

    let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

    return (
        <Link to={`/book/${id}`}>
            <div className={cls.listItem}>
                <img className={cls.img} src={thumbnail} />
                <h3 className={cls.title}>{volumeInfo.title}</h3>
                <p className={cls.author}>{volumeInfo.authors}</p>
            </div>
        </Link>

    );
};
