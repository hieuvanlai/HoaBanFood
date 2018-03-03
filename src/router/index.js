import {StackNavigator, TabNavigator} from 'react-navigation';
import HomeScreen from '../container/HomeScreen'
import LeafletsScreen from "../container/LeafletsScreen";
import {COLOR_PRIME} from "../component/const";
import {SearchLeafletsScreen} from '../container/LeafletsScreen/SearchLeafletsScreen'
import {NearLeafletsScreen} from '../container/LeafletsScreen/NearLeafletsScreen'
import {CategoryLeafletsScreen} from '../container/LeafletsScreen/CategoryLeafletsScreen'
import SettingScreen from '../container/SettingScreen'
import NotificationsScreen from '../container/Notifications'
import Login from '../container/LoginScreen'
import InstructionsScreen from '../container/InstructionsScreen'
import {SignUpWithPhone} from '../container/LoginScreen/SignUpWithPhone'
const TabBar = TabNavigator(
    {
        SearchLeafletsScreen: {
            screen: SearchLeafletsScreen,
            navigationOptions: {
                title: 'Search',
                headerStyle: {
                    backgroundColor: COLOR_PRIME,
                },
                headerTintColor: 'white',

            }
            },
        NearLeafletsScreen: {
            screen: NearLeafletsScreen,
            navigationOptions: {
                title: 'Near',
                headerStyle: {
                    backgroundColor: COLOR_PRIME,
                },
                headerTintColor: 'white',

            }
        },
        CategoryLeafletsScreen: {
            screen: CategoryLeafletsScreen,
            navigationOptions: {
                title: 'Category',
                headerStyle: {
                    backgroundColor: COLOR_PRIME,
                },
                headerTintColor: 'white',

            }        },

    },
    {        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                backgroundColor: COLOR_PRIME,
            },
            indicatorStyle: {
                backgroundColor: 'white'
            },
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: 'white',
            inactiveTintColor: 'black',
        },
    }
)
const LeafletsDetail= StackNavigator({
    Tab:{
        screen:TabBar
    }
})

const RootStack = StackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                header: null
            }
        },
        Instructions: {
            screen: InstructionsScreen,
            navigationOptions: {
                header: null
            }
        },
        LeafletsDetail:{
            screen: TabBar,
            navigationOptions: {
                title: 'Leaflets',
                headerStyle: {
                    backgroundColor: COLOR_PRIME,
                },
                headerTintColor: 'white',
            }
        },
        Login:{
            screen:Login,
            navigationOptions: {
                header: null
            }
        },
        SettingScreen:{
            screen:SettingScreen,
            navigationOptions: {
                title: 'Setting',
                headerStyle: {
                    backgroundColor: COLOR_PRIME,
                },
                headerTintColor: 'white',
            }
        } ,
        SignUpWithPhone:{
            screen:SignUpWithPhone,
            navigationOptions: {
                title: 'Sign Up',
                headerStyle: {
                    backgroundColor: COLOR_PRIME,
                },
                headerTintColor: 'white',
            }
        } ,
        Notifications:{
            screen:NotificationsScreen,
            navigationOptions: {
                title: 'Notifications',
                headerStyle: {
                    backgroundColor: COLOR_PRIME,
                },
                headerTintColor: 'white',
            }
        }
    },

    {
        initialRouteName: 'HomeScreen'
    }
);
export default RootStack