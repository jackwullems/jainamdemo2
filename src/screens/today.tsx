import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { appColors, appStyles, HEIGHT, WIDTH } from "assets"
import { EventVerticalItem } from "components"
import React from "react"
import { FlatList, View } from "react-native"
import { EventModel, sampleMyevents, sampleMyInvitations } from "../models/event"

const Tab = createMaterialTopTabNavigator()

interface EventListProps {
    events: EventModel[]
}
const EventList = ({events}: EventListProps) => {
    return (
        <View style={appStyles.container}>
            <FlatList
                ItemSeparatorComponent={()=><View style={{height: HEIGHT(17)}}/>}
                style={{marginHorizontal: WIDTH(11), marginVertical: HEIGHT(15)}}
                data={events}
                renderItem={data=><EventVerticalItem event={data.item}/>}
            />
        </View>
    )
}
const InvitationList = ({events}: EventListProps) => {
    return (
        <View style={appStyles.container}>
            <FlatList
                ItemSeparatorComponent={()=><View style={{height: HEIGHT(17)}}/>}
                style={{marginHorizontal: WIDTH(11), marginVertical: HEIGHT(15)}}
                data={events}
                renderItem={data=><EventVerticalItem event={data.item} type='invitation'/>}
            />
        </View>
    )
}
const PostEventList = ({events}: EventListProps) => {
    return (
        <View style={appStyles.container}>
            <FlatList
                ItemSeparatorComponent={()=><View style={{height: HEIGHT(17)}}/>}
                style={{marginHorizontal: WIDTH(11), marginVertical: HEIGHT(15)}}
                data={events}
                renderItem={data=><EventVerticalItem event={data.item} type='past'/>}
            />
        </View>
    )
}

export const TodayScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: appColors.blue,
                tabBarLabelStyle: appStyles.topTabLable,
                tabBarStyle: {backgroundColor: appColors.background, height: HEIGHT(63)},
            }}
        >
            <Tab.Screen name="My Events">
            {
                props=><EventList {...props} events={sampleMyevents}/>
            }
            </Tab.Screen>
            <Tab.Screen name="My Invitation">
            {
                props=><InvitationList {...props} events={sampleMyInvitations}/>
            }
            </Tab.Screen>
            <Tab.Screen name="Past Events">
            {
                props=><PostEventList {...props} events={sampleMyInvitations}/>
            }
            </Tab.Screen>
        </Tab.Navigator>            
    )
}