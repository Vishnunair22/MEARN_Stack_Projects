export const API_KEY = 'AIzaSyBzRwxNzCFK6_6IPzy0JQiD6zFJCQ1v4xw'
export const value_converter = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }
    else if(value >= 1000){
        return Math.floor(value/1000) + "K";
    }
    else{
        return value;
    }
}