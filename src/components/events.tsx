import { appColors, appStyles, HEIGHT, images, WIDTH } from "assets"
import React from "react"
import { View, TouchableOpacity } from "react-native"
import { Button, Image, Text } from "react-native-elements"
import { EventModel } from "../models/event"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import moment from "moment"

interface EventItemProps {
    event: EventModel,
    type?: string
}
export const EventHoeizontalItem = ({event}: EventItemProps) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: appColors.compBackground,
                borderRadius: WIDTH(5),
                width: WIDTH(214),
                height: HEIGHT(224)}}>
            <Image
                source={event.image}
                style={{borderRadius: WIDTH(5), width: '100%', height: HEIGHT(83)}}
            />
            <View style={{flex: 1, marginHorizontal: WIDTH(15), marginVertical: HEIGHT(8)}}>
                <Text style={appStyles.label}>{event.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: HEIGHT(8)}}>
                    <MaterialIcons color={appColors.grey} size={WIDTH(15)} name='calendar-today'/>
                    <Text style={[appStyles.greyText, {marginStart: WIDTH(5)}]}>{moment(event.startTime).format('D MMM YYYY')}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: HEIGHT(8)}}>
                    <MaterialIcons color={appColors.grey} size={WIDTH(15)} name='access-time'/>
                    <Text style={[appStyles.greyText, {marginStart: WIDTH(5)}]}>{`${moment(event.startTime).format('hh:MM A')} to ${moment(event.startTime).add(event.duration, 'minute').format('hh:MM A')}`}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: HEIGHT(8), alignItems: 'center'}}>
                    <Button
                        title='Start Event'
                        titleStyle={{fontSize: HEIGHT(14)}}
                        buttonStyle={{padding: 0, width: WIDTH(139), backgroundColor: appColors.green, height: HEIGHT(32)}}
                    />
                    <TouchableOpacity>
                        <Image source={images.share} resizeMode='contain' style={{marginStart: WIDTH(14), width: WIDTH(32), height: HEIGHT(32)}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export const EventVerticalItem = ({event, type}: EventItemProps) => {
    const endTime = moment(event.startTime).add(event.duration, 'minute')
    return (
        <View style={{
            backgroundColor: appColors.compBackground,
            borderRadius: WIDTH(5),
            flex: 1}}>
            <Image
                source={event.image}
                style={{borderRadius: WIDTH(5), width: '100%', height: HEIGHT(83), resizeMode: 'cover'}}
            />
            <View style={{flex: 1, marginHorizontal: WIDTH(15), marginVertical: HEIGHT(8)}}>
                <Text style={appStyles.label}>{event.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: HEIGHT(8)}}>
                    <MaterialIcons color={appColors.grey} size={WIDTH(15)} name='calendar-today'/>
                    <Text style={[appStyles.greyText, {marginStart: WIDTH(5)}]}>{moment(event.startTime).format('D MMM YYYY')}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: HEIGHT(8)}}>
                    <MaterialIcons color={appColors.grey} size={WIDTH(15)} name='access-time'/>
                    <Text style={[appStyles.greyText, {marginStart: WIDTH(5)}]}>{`${moment(event.startTime).format('hh:MM A')} to ${endTime.format('hh:MM A')}`}</Text>
                </View>
                {
                    type != 'past' &&
                    <View style={{flexDirection: 'row', marginTop: HEIGHT(8), alignItems: 'center'}}>
                    {
                        type=='invitation'
                        ?
                        <Button
                            title='Join Event'
                            titleStyle={{fontSize: HEIGHT(14)}}
                            buttonStyle={{padding: 0, width: WIDTH(273), backgroundColor: appColors.blue, height: HEIGHT(32)}}
                        />
                        :
                        <Button
                            title='Start Event'
                            titleStyle={{fontSize: HEIGHT(14)}}
                            buttonStyle={{padding: 0, width: WIDTH(273), backgroundColor: appColors.green, height: HEIGHT(32)}}
                        />
                    }
                    <TouchableOpacity>
                        <Image source={images.share} resizeMode='contain' style={{marginStart: WIDTH(14), width: WIDTH(32), height: HEIGHT(32)}}/>
                    </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
}