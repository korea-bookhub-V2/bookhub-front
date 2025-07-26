import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEmployeeStore } from "./stores/employee.store";
import Sidebar from "./layouts/sidebar";
import Header from "./layouts/header";
import SignUp from "./views/auth/SignUp";
import SignIn from "./views/auth/SignIn";
import SearchBranch from "./views/branch/SearchBranch";
import RequireAuth from "./components/RequireAuth";
import CreateBranch from "./views/branch/CreateBranch";
import LoginIdFindEmail from "./views/auth/LoginIdFindEmail";
import LoginIdGet from "./views/auth/LoginIdGet";
import PasswordChangeSendEmail from "./views/auth/PasswordChangeSendEmail";
import PasswordChange from "./views/auth/PasswordChange";
import Author from "./views/author/Author";
import CreateAuthor from "./views/author/CreateAuthor";
import Publisher from "./views/publisher";
import Policy from "./views/policy";
import StockLog from "./views/stock-logs";
import LocationPage from "./views/location/LocationPage";
import MainPage from "./views/main/MainPage";
import ReceptionConfirm from "./views/reception/ReceptionConfirm";
import ReceptionPending from "./views/reception/ReceptionPending";
import SearchBook from "./views/book/SearchBook";
import AlertPage from "./views/alert/AlertPage";
import CategoryMain from "./views/category/CategoryMain";
import EmployeeSearch from "./views/employee/EmployeeSearch";
import EmployeeChange from "./views/employee/EmployeeChange";
import EmployeeSignUpApprovals from "./views/employee/EmployeeSignUpApprovals";

function App() {
  const isLogin = useEmployeeStore((state) => state.isLogin);
  if (!isLogin) {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route
          path="/auth/login-id-find/email"
          element={<LoginIdFindEmail />}
        />
        <Route path="/auth/login-id-find" element={<LoginIdGet />} />
        <Route
          path="/auth/password-change/email"
          element={<PasswordChangeSendEmail />}
        />
        <Route path="/auth/password-change" element={<PasswordChange />} />
      </Routes>
    );
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
              <Route path="/" element={<Navigate to="/main" />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/alerts/*" element={<AlertPage />} />
              <Route path="/books/search*" element={<SearchBook />} />
              {/* <Route path="/booklogs/*" element={<BookLogs />} /> */}
              <Route path="/author/else" element={<Author />} />
              <Route path="/publishers/*" element={<Publisher />} />
              <Route path="/policies/*" element={<Policy />} />
              <Route path="/locations" element={<LocationPage />} />
              {/* <Route path="/author/else" element={<ElseAuthor />} /> */}
              {/* <Route path="/best-seller" element={<TotalBestSeller />} /> */}
              {/* <Route path="/best-seller/period" element={<BestSellerByPeriod />} /> */}
              {/* <Route path="/best-seller/category" element={<BestSellerByCategory />} /> */}
              <Route path="/stock-logs/*" element={<StockLog />} />
              {/* <Route path="/statistics/stocks/*" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <StockStatistics />
                </RequireAuth>
              }
              /> */}
              <Route
                path="/author/create"
                element={
                  <RequireAuth allowedRoles={["ROLE_ADMIN"]}>
                    <CreateAuthor />
                  </RequireAuth>
                }
              />
              ƒ
              <Route
                path="/branches"
                element={
                  <RequireAuth allowedRoles={["ROLE_ADMIN"]}>
                    <SearchBranch />
                  </RequireAuth>
                }
              />
              <Route
                path="/branches/manage"
                element={
                  <RequireAuth allowedRoles={["ROLE_ADMIN"]}>
                    <CreateBranch />
                  </RequireAuth>
                }
              />
              <Route
                path="/categories"
                element={
                  <RequireAuth allowedRoles={["ROLE_ADMIN"]}>
                    <CategoryMain />
                  </RequireAuth>
                }
              />
              <Route
                path="/reception/confirmed"
                element={
                  <RequireAuth allowedRoles={["ROLE_ADMIN"]}>
                    <ReceptionConfirm />
                  </RequireAuth>
                }
              />
              <Route
                path="/reception/pending"
                element={
                  <RequireAuth allowedRoles={["ROLE_ADMIN"]}>
                    <ReceptionPending />
                  </RequireAuth>
                }
              />
              {/* <Route path="/reception/logs" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <AdminReceptionList />
                </RequireAuth>
              }
              /> */}
              {/* <Route path="/author/create" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <CreateAuthor />
                </RequireAuth>
              }
              /> */}
              {/* <Route path="/purchase-order" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <ElsePurchaseOrder />
                </RequireAuth>
              }
              />  */}
              {/* <Route path="/purchase-order/approve" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <ApprovePurchaseOrder />
                </RequireAuth>
              }
              /> */}
              {/* <Route path="/purchase-order-approval" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <ElsePurchaseOrderApproval />
                </RequireAuth>
              }
              /> */}
              {/* <Route path="/statistics/sales-quantity/branch" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <SaleQuantityByBranch />
                </RequireAuth>
              }
              /> */}
              {/* <Route path="/statistics/sales-quantity/period" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <SalesQuantityByPeriod />
                </RequireAuth>
              }
              /> */}
              {/* <Route path="/statistics/sales-quantity/discount-policy" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <SalesQuantityByDiscountPolicy />
                </RequireAuth>
              }
              /> */}
              {/* <Route path="/statistics/sales-quantity/category" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <SalesQuantityByCategory />
                </RequireAuth>
              }
              /> */}
              <Route
                path="/employees"
                element={
                  <RequireAuth allowedRoles={["ROLE_ADMIN"]}>
                    <EmployeeSearch />
                  </RequireAuth>
                }
              />
              <Route path="/employees/approval" element={
                <RequireAuth allowedRoles={["ROLE_ADMIN"]}>
                  <EmployeeSignUpApprovals />
                </RequireAuth>
              }
              />
              <Route
                path="/employees/edit"
                element={
                  <RequireAuth allowedRoles={["ROLE_ADMIN"]}>
                    <EmployeeChange />
                  </RequireAuth>
                }
              />
              {/* <Route path="/employee/approval/logs" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <EmployeeSignUpApprovalsSearch />
                </RequireAuth>
              }
              /> */}
              {/* <Route path="/employees/logs" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <EmployeeChangeLogsSearch />
                </RequireAuth>
              }
              /> */}
              {/* <Route path="/employees/retired/logs" element={
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <EmployeeExitLogs />
                </RequireAuth>
              }
              /> */}
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
