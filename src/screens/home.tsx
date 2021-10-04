import { appColors, appStyles, HEIGHT, WIDTH } from "assets"
import { EventHoeizontalItem } from "components"
import React from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { sampleMyevents, sampleMyInvitations } from "../models/event"

interface TopButtonProps {
    title: string
}
const TopButton = ({title}: TopButtonProps) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: appColors.green,
                borderRadius: HEIGHT(5),
                width: WIDTH(106),
                height: HEIGHT(82),
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text style={appStyles.label}>{title}</Text>
        </TouchableOpacity>
    )
}
export const HomeScreen = () => {
    return (
        <View style={appStyles.container}>
            <View style={{flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: HEIGHT(19), marginHorizontal: WIDTH(11)}}>
                <TopButton title='Start New Event'/>
                <TopButton title='Schedule Event'/>
                <TopButton title='Join Demo Event'/>
            </View>
            <View style={{flexDirection: 'row', marginTop: HEIGHT(18), justifyContent: 'space-between', marginHorizontal: WIDTH(11), marginBottom: HEIGHT(13)}}>
                <Text style={appStyles.label}>My Events</Text>
                <Text style={appStyles.blueLabel}>See All</Text>
            </View>
            <FlatList
                style={{marginHorizontal: WIDTH(11), flexGrow: 0, marginBottom: HEIGHT(17)}}
                ItemSeparatorComponent={()=><View style={{width: WIDTH(23)}}/>}
                data={sampleMyevents}
                horizontal
                keyExtractor={(_, index)=>index.toString()}
                renderItem={data=><EventHoeizontalItem event={data.item}/>}
            />
            <View style={{flexDirection: 'row', marginTop: HEIGHT(18), justifyContent: 'space-between', marginHorizontal: WIDTH(11), marginBottom: HEIGHT(13)}}>
                <Text style={appStyles.label}>My Invitations</Text>
                <Text style={appStyles.blueLabel}>See All</Text>
            </View>
            <FlatList
                style={{marginHorizontal: WIDTH(11), flexGrow: 0, marginBottom: HEIGHT(17)}}
                ItemSeparatorComponent={()=><View style={{width: WIDTH(23)}}/>}
                data={sampleMyInvitations}
                horizontal
                keyExtractor={(_, index)=>index.toString()}
                renderItem={data=><EventHoeizontalItem event={data.item}/>}
            />
        </View>
    )
}