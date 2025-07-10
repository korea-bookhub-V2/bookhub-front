//!이거 get메서드 만들고 다시 할것

// import { getPublishers } from '@/apis/publisher/publisher';
// import { PageResponseDto } from '@/dtos/PageResponseDto';
// import { PublisherListResponseDto, PublisherResponseDto } from '@/dtos/publishers/publisher.response.dto';
// import React, { useState } from 'react'
// import { useCookies } from 'react-cookie';

// const PAGE_SIZE = 10;
// function Publisherpage() {

//     const [cookies] = useCookies(['accessToken']);
//     const token = cookies.accessToken;
//     const [currentPage, setCurrentPage] = useState<number>(0);
//     const [totalPage, setTotalPage] = useState<number>(0);
//     const [searh, setSearch] = useState('');
//     const [publishers, setPublishers] = useState<PublisherListResponseDto[]>([]);
//     const [selectedPublisherId, setSelectedPublisherId] = useState<number | null>(null);
//     const [isCreateOpen, setIsCreateOpen] = useState(false);
//     const [isUpdateOpen, setIsUpdateOpen] = useState(false);

//     const fetchPage = async (page: number, keyword? :string) => {
//         if(!token) return;
//         try{
//             const response = await getPublishers(
//                 token,
//                 page,
//                 PAGE_SIZE,
//                 keyword
//             );
    
//             if(response.code ==="SU" && response.data){
//                 const data = response.data;
//                 if("content" in data){
//                     const pageData = response.data as PageResponseDto<PublisherResponseDto>;
//                     setPublishers(data.content);
//                     setTotalPage(data.totalPages);
//                     setCurrentPage(data.currentPage);
//                 }else{
//                     const list = response.data as PublisherListResponseDto[];
//                     setPublishers(list)
//                     setTotalPage(1);
//                     setCurrentPage(0);
//                 }
//             }else{
//                 console.error("목록 조회 실패", response.message);
//             }
//         }catch (err){
//             console.error("목록 조회 예외",err);
//         }
//       };

//     return (
//         <div>Publisherpage</div>
//     )
// }

// export default Publisherpage