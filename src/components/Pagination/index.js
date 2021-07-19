import React from 'react';
import {getRange} from '../../helpers'
import './styles.scss';

const Pagination = (props) => {

    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = getRange(1, pageCount);

    return (
        <div className="pagination">
            {pages.map(page => (
                <div href={null} key={page}
                    onClick={() => onPageChange(page)}
                    className={page === currentPage ? 'active' : 'page-item'}>
                    {page}
                </div>
            ))}
        </div>
    )
}

export default Pagination;