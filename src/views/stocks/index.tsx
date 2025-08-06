import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import StockSearch from './StockSearch'
import StockPage from './StockPage'
import { BranchSearchResponseDto } from '@/dtos/branch/response/Branch-search.response.dto';
import { branchRequest } from '@/apis/branch/branch';

function Stock() {
    const [branches, setBranches] = useState<BranchSearchResponseDto[]>([]);
    useEffect(() => {
      const fetchBranches = async () => {
        try{
          const response = await branchRequest();
          if(response.code === 'SU' && response.data){
            setBranches(response.data);
          }
        }catch(err){
          console.error('지점 목록 조회 실패',err);
        }
      };
      fetchBranches();
    },[]);
  return (
    <Routes>
    <Route path="/search" element={<StockSearch branches={branches}/>}  />
    <Route path="/" element={<StockPage branches={branches} />}/>
    </Routes>
  );
}

export default Stock