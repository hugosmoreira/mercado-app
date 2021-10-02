import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import { connect } from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabActions';

import { COLORS, FONTS, SIZES, icons, constants, dummyData } from '../constants'

import { Home, Search, CartTab, Favourite, Notification } from '../screens'

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {
    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                ...drawerAnimationStyle
            }}
        >
            {/* Header */}
            <Header 
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center'
                 }}
                 title={selectedTab.toUpperCase()}
            />

            {/* Content */}
            <Text>MainLayout</Text>

            {/* Footer */}
        </Animated.View>
    )
}

function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => { return dispatch(setSelectedTab(selectedTab)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)