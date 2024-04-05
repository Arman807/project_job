import {
    useQuery,
  } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useCart = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
    const {refetch,data}=useQuery({
        queryKey:['cart',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/carts?email=${user?.email}`)
            console.log(res.data)
            return res.data
        }

    })
    console.log(data)
    return [refetch,data];
};

export default useCart;