

import { deletePublisher, getPublishers } from '@/apis/publisher/publisher';
import { PageResponseDto } from '@/dtos/PageResponseDto';
import { PublisherListResponseDto, PublisherResponseDto } from '@/dtos/publishers/publisher.response.dto';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';

const PAGE_SIZE = 10;

function Publisherpage() {

    const [cookies] = useCookies(['accessToken']);
    const token = cookies.accessToken;
    const [keyword, setKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [searh, setSearch] = useState('');
    const [publishers, setPublishers] = useState<PublisherResponseDto[]>([]);
    const [selectedPublisherId, setSelectedPublisherId] = useState<number | null>(null);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);

    const fetchPage = async (page: number, keyword? :string) => {
        if(!token) return;
        try{
            const response = await getPublishers(
                token,
                page,
                PAGE_SIZE,
                keyword
            );
    
            if(response.code ==="SU" && response.data){
                const data = response.data;
                if("content" in data){
                    setPublishers(data.content);
                    setTotalPage(data.totalPages);
                    setCurrentPage(data.currentPage);
                }else{
                    
                    
                    setPublishers(data as PublisherResponseDto[]);
                    setTotalPage(1);
                    setCurrentPage(0);
                }
            }else{
                console.error("목록 조회 실패", response.message);
            }
        }catch (err){
            console.error("목록 조회 예외",err);
        }
      };


      const deletePub = async(id: number) => {
        if(!window.confirm("정말 삭제하시겠습니까?")) return;
        if(!token) return;
        try{
            const response = await deletePublisher(id,token);
            if(response.code === "SU"){
                const isLast = publishers.length === 1&& currentPage>0;
                fetchPage(isLast ? currentPage -1 :currentPage); 
            }else{
                alert(response.message || "삭제실패");
            }
        }catch(err){
            console.log("삭제예외",err);
            alert("삭제 중 오류 발생");
        }
      };


    return (
      <div className=''>
        <div>
            <button onClick={() => setIsCreateOpen(true)} className=''> 출판사 등록</button>
        </div>

        <div className=''>
            <input type="text" value={keyword}/>
        </div>
      </div>
    )
}

export default Publisherpage