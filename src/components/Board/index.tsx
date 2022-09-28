import React, {FC} from 'react';
import Cell from "../Cell";

const Board: FC = () => {
    return (
        <div className='w-[760px] h-[760px] flex flex-wrap'>
            <Cell color='#EEEED2'/>
            <Cell color='#769656'/>
        </div>
    );
};

export default Board;