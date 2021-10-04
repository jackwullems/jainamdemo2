import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { appColors, appStyles, HEIGHT, WIDTH } from "assets"
import React, { useRef, useState } from "react"
import { Pressable, SafeAreaView, StatusBar, Text, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { TodayScreen, HomeScreen, AddScreen, ContactsScreen, AccountScreen } from "screens"
import RBSheet, { RBSheetProps } from "react-native-raw-bottom-sheet"
import { SwipeablePanel } from 'rn-swipeable-panel'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

const Root = () => {
	const [isPanelActive, setIsPanelActive] = useState(false)
	const handlePanel = () => {
		setIsPanelActive(false)
	}
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({route})=>{
					return ({
						headerShown: false,
						// headerStyle: {
						// 	backgroundColor: appColors.blue
						// },
						// title: '',
						tabBarInactiveTintColor: 'white',
						tabBarActiveTintColor: appColors.green,
						// tabBarActiveBackgroundColor: 'white',
						tabBarStyle: {backgroundColor: appColors.blue, height: HEIGHT(40)},
						tabBarShowLabel: false,
						tabBarIcon: ({color})=>{
							switch (route.name) {
								case 'today': return <Icon color={color} size={WIDTH(20)} name='today'/>
								case 'contacts': return <Icon color={color} size={WIDTH(20)} name='contacts'/>
								case 'add': return <Icon color={color} size={WIDTH(30)} name='add-circle-outline'/>
								case 'account': return <Icon color={color} size={WIDTH(20)} name='account-circle'/>
								default:
									break
							}
							return <Icon color={color} size={WIDTH(20)} name='home'/>
						}
					})
				}}
			>
				<Tab.Screen name='home' component={HomeScreen}/>
				<Tab.Screen name='today' component={TodayScreen}/>
				<Tab.Screen
					listeners={{
						tabPress: e=>{
							e.preventDefault()
							setIsPanelActive(true)
							//@ts-ignore
							// refRBSheet.current.open()
						}
					}}
					name='add' component={AddScreen}/>
				<Tab.Screen name='contacts' component={ContactsScreen}/>
				<Tab.Screen name='account' component={AccountScreen}/>
			</Tab.Navigator>
			{/* <RBSheet
				//@ts-ignore
				ref={refRBSheet}
				customStyles={{
					container: {
						borderTopStartRadius: WIDTH(20),
						borderTopEndRadius: WIDTH(20),
						backgroundColor: appColors.compBackground
					},
				}}
			>
				<Pressable style={{flexDirection: 'row'}}>
					<Text style={appStyles.label}>Start New Event Now</Text>
				</Pressable>
			</RBSheet> */}
			<SwipeablePanel
				style={{
					backgroundColor: appColors.compBackground,
					
				}}
				fullWidth={true}
				onClose={()=>setIsPanelActive(false)}
				isActive={isPanelActive}
			>
				<View style={{flex: 1, marginHorizontal: WIDTH(18)}}>
					<Pressable
						onPress={handlePanel}
						style={{flexDirection: 'row', marginVertical: HEIGHT(10), alignItems: 'center'}}>
						<MaterialIcons name='event' size={HEIGHT(20)} color='white'/>
						<Text style={[appStyles.panelLabel, {marginStart: WIDTH(8)}]}>
							Start New Event Now</Text>
					</Pressable>
					<Pressable
						onPress={handlePanel}
						style={{flexDirection: 'row', marginVertical: HEIGHT(10), alignItems: 'center'}}>
						<MaterialIcons name='add-circle-outline' size={HEIGHT(20)} color='white'/>
						<Text style={[appStyles.panelLabel, {marginStart: WIDTH(8)}]}>
							Schedule New Event</Text>
					</Pressable>
					<Pressable
						onPress={handlePanel}
						style={{flexDirection: 'row', marginVertical: HEIGHT(10), alignItems: 'center'}}>
						<MaterialIcons name='airplay' size={HEIGHT(20)} color='white'/>
						<Text style={[appStyles.panelLabel, {marginStart: WIDTH(8)}]}>
							Host Watch Party</Text>
					</Pressable>
					<Pressable
						onPress={handlePanel}
						style={{flexDirection: 'row', marginVertical: HEIGHT(10), alignItems: 'center'}}>
						<MaterialIcons name='call-to-action' size={HEIGHT(20)} color='white'/>
						<Text style={[appStyles.panelLabel, {marginStart: WIDTH(8)}]}>
							Host Conference</Text>
					</Pressable>
					<Pressable
						onPress={handlePanel}
						style={{flexDirection: 'row', marginVertical: HEIGHT(10), alignItems: 'center'}}>
						<MaterialIcons name='event-available' size={HEIGHT(20)} color='white'/>
						<Text style={[appStyles.panelLabel, {marginStart: WIDTH(8)}]}>
							Join New Event</Text>
					</Pressable>
				</View>
			</SwipeablePanel>
		</NavigationContainer>
	)
}
export default () => {
	return (
		<>
			<SafeAreaView style={{flex: 0, backgroundColor: appColors.blue}}/>
			<SafeAreaView style={{flex: 1, backgroundColor: appColors.blue}}>
				<StatusBar barStyle='dark-content' hidden={false} backgroundColor={appColors.blue}/>
				<Root/>
			</SafeAreaView>
		</>
	)
}