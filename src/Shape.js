// // // Shape.js

// // import React from 'react';

// // const Shape = ({ color, height }) => {
// //     const style = {
// //         width: '100px',
// //         height: `${height}px`, // Use the height prop to set the height
// //         backgroundColor: color,
// //         transition: 'height 0.3s ease',
// //         cursor: 'pointer',
// //         '&:hover': {
// //         height: `${height + 100}px`, // Increase height on hover
// //         },
// //     };

// //     return <div style={style} />;
// // };

// // export default Shape;

// // Shape.js

// import React, { useState, useEffect } from 'react';

// const Shape = ({ color, baseHeight}) => {

//     const [isHovered, setIsHovered] = useState(false);
//     const [isStarted, setIsStarted] = useState(false)

//     useEffect(() => {
//         setIsStarted(true)
//     },[isStarted])

//     const defaultStyle = {
//         width: '100px',
//         height: 
//         isStarted ? 
//         isHovered ? `${baseHeight + 100}px` : `${baseHeight}px`
//         : '0px'
//         , // Adjust height based on hover

//         backgroundColor: color,
//         transition: 'height 2s ease',
//         cursor: 'pointer',
//     };

//     return (
//         <div
//             style={{
//                 ...defaultStyle,
//             }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         />
//     );
// };

// export default Shape;

import React, { useState, useEffect } from 'react';

const Shape = ({ color, baseHeight, delay }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    useEffect(() => {
        setIsExpanded(true)
    },[])
    useEffect(() => {
            const interval = setInterval(() => {
                setIsExpanded(prevIsExpanded => !prevIsExpanded); // Toggle the state
            }, delay); // Adjust the time as needed for faster or slower animation
            return () => clearInterval(interval);
    }, [delay]); // Include delay in the dependency array

    const style = {
        width: "100px",
        height: isExpanded ? `${baseHeight + 100}px` : `${baseHeight}px`,
        backgroundColor: color,
        transition: 'height 5s ease', // Ensure the transition time matches the interval for a smooth animation
        cursor: 'pointer',
    };

    return <div style={style} />;
};

export default Shape;
