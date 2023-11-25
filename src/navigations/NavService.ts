import React from 'react';
import { CommonActions, NavigationContainerRef, StackActions } from '@react-navigation/native';

export default class NavService {
    static navigationRef = React.createRef<NavigationContainerRef<any>>();

    static getNavRef() {
        return this.navigationRef;
    }

    static navigate<P extends {}>(name: string, params?: P) {
        this.navigationRef.current?.navigate(name, params);
    }

    static push(name: string, params?: any) {
        this.navigationRef.current?.dispatch(StackActions.push(name, params));
    }

    static goBack() {
        this.navigationRef.current?.goBack();
    }

    static goBackToTop() {
        this.navigationRef.current?.dispatch(StackActions.popToTop());
    }

    static popTo(count = 1) {
        this.navigationRef.current?.dispatch(StackActions.pop(count));
    }

    static reset(name: string) {
        this.navigationRef.current?.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name }],
            })
        );
    }

    static replace(name: string, params?: any) {
        this.navigationRef.current?.dispatch(StackActions.replace(name, params));
    }

    static isCurrentRoute(name?: string) {
        const currentRoute = this.navigationRef.current?.getCurrentRoute();
        return currentRoute?.name === name;
    }

    static getCurrentRoute() {
        return this.navigationRef.current?.getCurrentRoute()?.name;
    }
}
