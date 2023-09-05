import create from "zustand";

/**
 * Zustand Store
 *
 * You can add global state to the app using this useGlobalState, to get & set
 * values from anywhere in the app.
 *
 * Think about it as a global useState.
 */

type TGlobalState = {
  nativeCurrencyPrice: number;
  setNativeCurrencyPrice: (newNativeCurrencyPriceState: number) => void;
  setPushNotificationSubscription: (subscription: PushSubscription | null) => void;
  pushNotificationSubscription: PushSubscription | null;
};

export const useGlobalState = create<TGlobalState>(set => ({
  nativeCurrencyPrice: 0,
  setNativeCurrencyPrice: (newValue: number): void => set(() => ({ nativeCurrencyPrice: newValue })),
  setPushNotificationSubscription: (subscription: PushSubscription | null): void =>
    set(() => ({ pushNotificationSubscription: subscription })),
  pushNotificationSubscription: null,
}));
