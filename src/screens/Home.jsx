import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat } from 'react-native-reanimated';

const Home = () => {

  const border = useSharedValue(50)
  const color = useSharedValue('red')
  const scale = useSharedValue(1)
  const rot = useSharedValue(0)

  const style = useAnimatedStyle(()=>{
    return{
      borderRadius: border.value,
      backgroundColor: color.value,
      transform: [{ scale: scale.value}, {rotate:`${rot.value*Math.PI}rad`}]
    }
  },[])

  React.useEffect(()=>{
    color.value = withRepeat(withTiming('orange', {duration:3000}), -1, true)
    border.value = withRepeat(withTiming(10, {duration:3000}), -1, true)
    scale.value = withRepeat(withTiming(2, {duration:3000}), -1, true);
    rot.value = withRepeat(withTiming(2, {duration:2000}), -1, true);

  },[])

  return (
    <Animated.View style={[styles.box, style]} />
  )
}

export default Home

const styles = StyleSheet.create({
  box:{
    height:100,
    width:100,
  }
})