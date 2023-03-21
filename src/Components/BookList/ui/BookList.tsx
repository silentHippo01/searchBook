import { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "./../../Loader/Loader";
import { ListItem } from "./../../ListItem";
import { getItemsSelector, getCountSelector, getIsLoading } from "../../Header";

import cls from './BookList.module.scss';
import { IBook } from "src/types/types";

export const BookList = () => {

    const items = useSelector(getItemsSelector);
    const totalItems = useSelector(getCountSelector);
    const [visible, setVisible] = useState<number>(30);
    const isLoading = useSelector(getIsLoading);

    const clickHadler = () => {
        setVisible(prev => prev + 30);
    }

    return (
        <div className={cls.bookList}>
            {totalItems != 0 && <div className={cls.total}>{`Всего найдено: ${totalItems}`}</div>}
            {
                isLoading && <Loader />
            }
            <div className={cls.catalog}>
                {
                    items != undefined && items.slice(0, visible).map((item, index) => (
                        <ListItem key={index} book={item} />
                    ))
                }
                {
                    items != undefined && items.length > 30 && <button onClick={clickHadler}>Load more</button>
                }
            </div>

        </div>
    );
};
