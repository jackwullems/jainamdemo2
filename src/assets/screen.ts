import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HEIGHT = (h: number)=>{
    return (windowHeight/812)*h
}

export const WIDTH = (w: number)=>{
    return (windowWidth/375)*w
}