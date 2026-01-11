'use client'
import BackButton from '@/components/BackButton'
import * as z from 'zod';
import { useForm } from 'react-hook-form';


const PostEditPage = () => {
    return (
        <>
               <BackButton text='Go Back' link='/posts' />
      </>
   
  )
}

export default PostEditPage;