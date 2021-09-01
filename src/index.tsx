import React from 'react';
import FooterComponent, {FooterComponentProps} from "./FooterComponent";



export type ReturnUsePaginationType = {
  data: any[],
  resetData: (data : any[]) => void,
  addData: (data : any[]) => void,
  loadingMore: boolean,
  onEndReached: () => void,
  pageIndex: number,
  ListFooterComponent: React.FC<FooterComponentProps>,
  hasMoreData: boolean,
  setPageIndex:any
};



type usePaginationType = (pageSize? : number) => ReturnUsePaginationType;









const usePagination : usePaginationType = (pageSize = 10) => {


  const [loadingMore, setLoadingMore] = React.useState<boolean>(false);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [lastPageSize, setLastPageSize] = React.useState<number>(0);
  const [data, setData] = React.useState<any[]>([]);






  const onEndReached = () => {
    if (lastPageSize === pageSize) {
      setPageIndex(pageIndex + 1);
      setLoadingMore(true);
    }
  }

  const addData = (pageData: any[]) => {
    setData([...data, ...pageData]);
    setLastPageSize(pageData?.length || 0)
    setLoadingMore(false)
  };


  const resetData = (data: any[]) => {
    setData(data);
    setLastPageSize(data?.length || 0)
    setLoadingMore(false)
  };


  const hasMoreData = !(data.length > 0 && lastPageSize !== pageSize);


  return {
    data,
    resetData,
    addData,
    onEndReached,
    loadingMore,
    pageIndex,
    ListFooterComponent: () => <FooterComponent loadingMore={loadingMore} hasMoreData={hasMoreData}/>,
    hasMoreData,
    setPageIndex
  }

}



export default usePagination;
