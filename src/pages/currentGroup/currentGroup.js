import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


export default function CurrentGroup() {
    return (
        <div style={{margin: "1em"}}>
            <Stack spacing={1}>
                <Skeleton variant="rectangular" width="100%" height={60} />
                <Skeleton variant="rectangular" width="100%" height={60} />
                <Skeleton variant="rounded" width="100%" height={260} />
                <Skeleton variant="rectangular" width="100%" height={60} />
                <Skeleton variant="rounded" width="100%" height={260} />
            </Stack>
        </div>
    );
}