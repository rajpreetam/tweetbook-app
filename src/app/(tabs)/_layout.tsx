import {Tabs, usePathname} from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {ComponentProps} from "react";

type TabBarIconProps = {
    name: ComponentProps<typeof FontAwesome>['name'];
    path: string;
};

const TabBarIcon = ({name, path}: TabBarIconProps) => {
    const pathname = usePathname()
    return <FontAwesome name={name} size={24} color={pathname===path ? 'black' : 'gray'} />
};

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    headerShown: false,
                    tabBarIcon: () => <TabBarIcon name='home' path='/' />
                }}
            />
            <Tabs.Screen
                name='friends'
                options={{
                    title: 'Friends',
                    tabBarIcon: () => <TabBarIcon name='user' path='/friends' />
                }}
            />
            <Tabs.Screen
                name='watch'
                options={{
                    title: 'Watch',
                    tabBarIcon: () => <TabBarIcon name='play' path='/watch' />
                }}
            />
            <Tabs.Screen
                name='notifications'
                options={{
                    title: 'Notifications',
                    tabBarIcon: () => <TabBarIcon name='bell' path='/notifications' />
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: () => <TabBarIcon name='user' path='/profile' />
                }}
            />
        </Tabs>
    );
}

export default TabLayout;
