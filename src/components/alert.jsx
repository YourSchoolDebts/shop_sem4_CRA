// export function Alert({isVisible, message}){
//     return(
//         <div className="indigo lighten-2" style={{
//             visibility: isVisible ? "visible" : "hidden",
//             opacity: isVisible ? 1 : 0,
//             transition:"opacity 0.3s ease",
//             position:"fixed",
//             bottom:"20px",
//             right:"20px",
//             color:"white",
//             padding:"10px, 20px",
//             borderRadius:"5px",
//             zIndex:1000,
//         }}>
//             {message}
//         </div>
//     )
// }

import { useEffect } from "react";

function Alert(props) {
    const {name = "", closeAlert = Function.prototype } = props;
    
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerId);
        };
    }, [name]);
    return (
        <div id="toast-container">
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    )
}
export {Alert};