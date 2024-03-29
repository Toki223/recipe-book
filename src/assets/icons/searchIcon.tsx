import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const SearchIcon = (props: any) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <Path
        fill="#ff8405"
        transform="rotate(-45.001 67.5 67.501)"
        d="M62.501 49.822H72.5V85.17699999999999H62.501z"
      />
      <Circle cx={41} cy={40} r={21} fill="#4b4dff" />
      <Path
        fill="#4343bf"
        d="M41 62c-12.131 0-22-9.869-22-22s9.869-22 22-22 22 9.869 22 22-9.869 22-22 22zm0-38c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
      />
      <Path
        fill="#3abcf8"
        d="M41 65.987c-6.658 0-13.316-2.534-18.385-7.602l7.07-7.072c6.238 6.238 16.391 6.238 22.629 0 6.237-6.238 6.237-16.389-.001-22.628l7.072-7.07c10.136 10.138 10.136 26.632 0 36.77-5.069 5.068-11.727 7.602-18.385 7.602z"
      />
      <Path
        fill="#edf7f5"
        d="M49.803 48.025l-2.828-2.828a7.85 7.85 0 002.313-5.586c0-2.11-.821-4.094-2.313-5.586s-3.476-2.313-5.586-2.313a7.85 7.85 0 00-5.586 2.313l-2.828-2.828c2.247-2.248 5.235-3.485 8.414-3.485s6.167 1.237 8.414 3.485c2.248 2.247 3.485 5.235 3.485 8.414s-1.237 6.167-3.485 8.414z"
      />
    </Svg>
  );
};

export default SearchIcon;
