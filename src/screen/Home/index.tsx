import React,{useRef,useState,useEffect} from "react";
import {View,TouchableOpacity} from "react-native";
import LottieView,{LottieViewProps,AnimationObject} from "lottie-react-native";
import { styles } from "./styles";


const Home = () =>{

    const [save,setSave] = useState(true);
    const animation = useRef<any>(null);
    const firstRun = useRef(true);

    useEffect(()=>{
        if(firstRun.current){
            if(save){
                animation.current?.play(94,94);
            } else {
                animation.current?.play(7,7);
            }
            firstRun.current = false
        } else if(save){
            animation.current?.play(0,94);
        } else {
            animation.current?.play(90,7)
        }
    },[save])

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() =>setSave(!save)}>
            <LottieView
                autoPlay={false}
                loop={false}
                source={require('../../assets/bookmaker.json')}
                style={{
                    width:100,
                    height:100
                }}
                resizeMode="cover"
                ref={animation}
            />
            </TouchableOpacity>
        </View>
    )
}

export {Home}