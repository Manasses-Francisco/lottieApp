import {StyleSheet,StatusBar, Platform} from "react-native";

const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:Platform.OS=="android"?statusBarHeight:50,
        paddingHorizontal:20
    }
})