import {  useState } from "react";
import { paginateData } from '../helpers'


const usePagination = (friendsState, query) => {

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    const getData = () => {
        if (query && query.trim().length){
            return friendsState.data.filter(item => item.name.includes(query.trim()))
        }
        return friendsState.data;
    }

    const getPageData = () => {
        const data = getData();
        const response = {
            totalCount: (data || []).length,
            data: paginateData(data, currentPage, pageSize),
        }
        if (!response.data.length && currentPage > 1){
            setCurrentPage(page => page-1)
        }
        return response;
    }

    const { totalCount, data } = getPageData();

    return { 
        data, 
        totalCount, 
        pageSize, 
        currentPage, 
        handlePageChange 
    }
};


export default usePagination;