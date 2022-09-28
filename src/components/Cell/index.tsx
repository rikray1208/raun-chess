import React, {FC} from 'react';

const Cell: FC<{color: string, children?:any}> = ({color}) => {
    return (
        <div style={{background: color}} className='w-[95px] h-[95px]'>
            
        </div>
    );
};
//w-[95px] h-[95px]
export default Cell;