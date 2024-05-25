"use client"

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';

interface PaginationProps {

    totalPage: number
}

const BasicPagination: React.FC<PaginationProps> = ({ totalPage }) => {

    const router = useRouter();
    const pathname = usePathname();





    const searchParams = useSearchParams()

    const page = searchParams.get('page');
    const limit = searchParams.get('limit');

    const createQueryString = useCallback(
        (name: string, value: string, isDelete?: boolean) => {
            const params = new URLSearchParams(searchParams.toString());

            if (isDelete) {
                params.delete(name);

            } else {

                params.set(name, value)
            }

            return params.toString()
        },
        [searchParams]
    );

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        // setCurrentPage(page);

        router.replace(pathname + '?' + createQueryString('page', `${page}`), { scroll: false })





    };

    return (
        <Stack spacing={2} marginY={6}>
            <Pagination count={totalPage} color="secondary" page={Number(page) || 1} onChange={handlePageChange} />
        </Stack>
    );
};

export default BasicPagination;