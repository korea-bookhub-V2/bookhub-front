import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useEmployeeStore } from './stores/employee.store';
import Sidebar from './layouts/sidebar';
import Header from './layouts/header';

function App() {
  const isLogin = useEmployeeStore((state) => state.isLogin);

  if (!isLogin) {
    return <Routes>{Auth()}</Routes>
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          border: "none",
        }}
      >
        <Header />
        <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
          <Sidebar />
          <main
            style={{
              flex: 1,
              padding: "30px",
              minWidth: "1500px",
            }}
          >
            <Routes>
              <Route path="/" element={<navigate to="/main" />} />
              <Route path="/alerts/*" element={<AlertPage />} />
              <Route path="/books/*" element={<Book />} />
              <Route path="/booklogs/*" element={<BookLogs />} />
              <Route path="/publishers/*" element={<Publisher />} />
              <Route path="/policies/*" element={<Policy />} />
              <Route path="/branch/locations" element={<LocationPage />} />
              <Route path="/author/else" element={<ElseAuthor />} />
              <Route path="/best-seller" element={<TotalBestSeller />} />
              <Route path="/best-seller/period" element={<BestSellerByPeriod />} />
              <Route path="/best-seller/category" element={<BestSellerByCategory />} />
              
              <Route path="/stock-logs/*" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <StockLog />
                </RequireAuth>
              }
              />
              <Route path="/statistics/stocks/*" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <StockStatistics />
                </RequireAuth>
              }
              />
              <Route path="/branches" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <BranchSearch />
                </RequireAuth>
              }
              />
              <Route path="/branches/manage" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <CreateBranch />
                </RequireAuth>
              }
              />
              <Route path="/categories" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <CategoryMain />
                </RequireAuth>
              }
              />
              <Route path="/reception/confirmed" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <ReceptionConfirm />
                </RequireAuth>
              }
              />
              <Route path="/reception/pending" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <ReceptionPending />
                </RequireAuth>
              }
              />
              <Route path="/reception/logs" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <AdminReceptionList />
                </RequireAuth>
              }
              />
              <Route path="/author/create" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <CreateAuthor />
                </RequireAuth>
              }
              />
              <Route path="/purchase-order" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <ElsePurchaseOrder />
                </RequireAuth>
              }
              />
              <Route path="/purchase-order/approve" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <ApprovePurchaseOrder />
                </RequireAuth>
              }
              />
              <Route path="/purchase-order-approval" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <ElsePurchaseOrderApproval />
                </RequireAuth>
              }
              />
              <Route path="/statistics/sales-quantity/branch" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <SaleQuantityByBranch />
                </RequireAuth>
              }
              />
              <Route path="/statistics/sales-quantity/period" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <SalesQuantityByPeriod />
                </RequireAuth>
              }
              />
              <Route path="/statistics/sales-quantity/discount-policy" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <SalesQuantityByDiscountPolicy />
                </RequireAuth>
              }
              />
              <Route path="/statistics/sales-quantity/category" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <SalesQuantityByCategory />
                </RequireAuth>
              }
              />
              <Route path="/employees" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <EmployeeSearch />
                </RequireAuth>
              }
              />
              <Route path="/employees/approval" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <EmployeeSignUpApprovals />
                </RequireAuth>
              }
              />
              <Route path="/employees/edit" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <EmployeeChange />
                </RequireAuth>
              }
              />
              <Route path="/employee/approval/logs" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <EmployeeSignUpApprovalsSearch />
                </RequireAuth>
              }
              />
              <Route path="/employees/logs" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <EmployeeChangeLogsSearch />
                </RequireAuth>
              }
              />
              <Route path="/employees/retired/logs" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <EmployeeExitLogs />
                </RequireAuth>
              }
              />
            </Routes>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
