import { create } from 'zustand';


const useAuthStore = create((set)=>({
    jwt:"",
    loader:false,
    setLoader:(loader)=>set({loader}),
    setJwt:(jwt)=>set({jwt}),
}))

export default useAuthStore