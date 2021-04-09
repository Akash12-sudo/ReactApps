import React from 'react';
import Card from './Card';
import Heading from './Heading';
import Sdata from './Sdata';



function App()
{
    return (
        <>
        <Heading/>
        {Sdata.map((val, index, arr) => {
            console.log(index);
            console.log(arr.length);
            return(
                <Card
                imgsrc={val.imgsrc}
                title={val.title}
                sname={val.sname}
                link={val.link}
                />
            );
        })}

        </>
    );
}

export default App;