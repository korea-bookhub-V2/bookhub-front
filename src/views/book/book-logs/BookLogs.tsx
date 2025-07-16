import { BookLogResponseDto } from '@/dtos/book/response/BookLog.response.dto';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

function BookLogs() {
  const [cookies] = useCookies(["accessToken"]);
  const [isbn, setIsbn] = useState("");
  const [logs, setLogs] = useState<BookLogResponseDto[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  return (
    <div>BookLogs</div>
  )
}

export default BookLogs