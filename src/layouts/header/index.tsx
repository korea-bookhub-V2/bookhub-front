import { useCookies } from "react-cookie";


export default function Header(){
    //*Zustand 관리 후 주석해제 +import
    
    // const[cookies, ,removeCookies] = useCookies(["accessToken"]);
    // const logout = useEmployee((state) => state.setLogout);
    // const employee  = useEmployeeStore((state) => state.employee);
    // const navigate = useNavigate();

    // const onLogoutClick = async () => {
    //     await logoutRequest();
    //     removeCookies("accessToken", {path : "/"});
    //     logout();
    // };
    
    // const onLogClick = () => {
    //     navigate("/main");
    // };

    // return(
    //     <Header>
    //         <div>
    //             <img src="@/public/북허브_로고_배경제거.png" 
    //             alt="북허브 로고"
    //             onClick = {onLogoClick}
    //             //className = {styles.logoImg}
    //             />
    //         </div>
    //         <div>
    //             <AlertIcon/>
    //             <div>
    //                 {employee?.branchName} {employee?.positionName}{""}
    //                 {employee?.employeeName}
    //             </div>
    //             <button onClick={onLogoutClick}>로그아웃</button>
    //         </div>

    //     </Header>
    // );
}