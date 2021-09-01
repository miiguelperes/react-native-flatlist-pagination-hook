import React from 'react';
import { FooterComponentProps } from "./FooterComponent";
export declare type ReturnUsePaginationType = {
    data: any[];
    resetData: (data: any[]) => void;
    addData: (data: any[]) => void;
    loadingMore: boolean;
    onEndReached: () => void;
    pageIndex: number;
    ListFooterComponent: React.FC<FooterComponentProps>;
    hasMoreData: boolean;
    setPageIndex:any;
};
declare type usePaginationType = (pageSize?: number) => ReturnUsePaginationType;
declare const usePagination: usePaginationType;
export default usePagination;
