import React from "react";
import { 
    Col,
    Row,
    Skeleton,
} from 'antd';

const CommonSkeleton = () =>{
    return (
        <Skeleton
            active 
            paragraph={{ rows: 4 }}
            title={{ width: '100%' }}
            style={{
                width: '100%',
            }}
        />
    )
}

export default CommonSkeleton