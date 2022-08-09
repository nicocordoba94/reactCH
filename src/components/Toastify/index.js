import { ToastContainer, toast } from 'react-toastify';


export default function Gula (){
    const notify = () => toast("Wow so easy !");

    return (
        <div>
            <button onClick={notify}>Notify !</button>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </div>
    );
}