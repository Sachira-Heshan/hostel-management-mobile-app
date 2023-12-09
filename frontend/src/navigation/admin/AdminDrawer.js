import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../../screens/app/admin/Dashboard";
import Rooms from "../../screens/app/admin/Rooms";
import Announcements from "../../screens/app/admin/Announcements";
import Complains from "../../screens/app/admin/Complains";
import ViewComplain from "../../screens/app/admin/complains/ViewComplain";
import LatePasses from "../../screens/app/admin/LatePasses";
import ViewLatePass from "../../screens/app/admin/late_passes/ViewLatePass";
import Settings from "../../screens/app/admin/Settings";
import PendingRoomRequests from "../../screens/app/admin/rooms/PendingRoomRequests";
import AcceptedRoomRequests from "../../screens/app/admin/rooms/AcceptedRequests";
import RoomDetails from "../../screens/app/admin/rooms/RoomDetails";
import VacateRoom from "../../screens/app/admin/rooms/VacateRoom";
import ChangeProfileDetails from "../../screens/app/admin/settings/ChangeProfileDetails";
import ChangePassword from "../../screens/app/admin/settings/ChangePassword";
import AddAnnouncement from "../../screens/app/admin/announcements/AddAnnouncement";
import ViewAnnouncement from "../../screens/app/admin/announcements/ViewAnnouncement";
import Notifications from "../../screens/app/admin/Notifications";
import PendingRoomChecklist from "../../screens/app/admin/rooms/PendingRoomChecklist";
import RoomAllocation from "../../screens/app/admin/rooms/RoomAllocation";
import RoomChecklistForm from "../../screens/app/admin/rooms/RoomChecklistForm";
import PaymentReceipts from "../../screens/app/admin/PaymentReceipts";
import ViewPaymentReceipt from "../../screens/app/admin/payment_receipts/ViewPaymentReceipt";
import HostelRules from "../../screens/app/admin/HostelRules";

const DashboardStack = createStackNavigator();
const RoomsStack = createStackNavigator();
const AnnouncementStack = createStackNavigator();
const ComplainsStack = createStackNavigator();
const LatePassesStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const NotificationsStack = createStackNavigator();

export const AdminDashboard = () => {
   return (
      <DashboardStack.Navigator
         initialRouteName="AdminHome"
         screenOptions={{
            headerShown: false,
         }}
      >
         <DashboardStack.Screen name="AdminHome" component={Dashboard} />
         <DashboardStack.Screen
            name="AdminRoomsDashboard"
            component={AdminRooms}
         />
         <DashboardStack.Screen
            name="AdminAnnouncementsDashboard"
            component={AdminAnnouncements}
         />
         <DashboardStack.Screen
            name="AdminComplainsDashboard"
            component={AdminComplains}
         />
         <DashboardStack.Screen
            name="AdminLatePassesDashboard"
            component={AdminLatePasses}
         />
         <DashboardStack.Screen
            name="AdminPaymentReceiptsDashboard"
            component={PaymentReceipts}
         />
         <DashboardStack.Screen
            name="AdminViewPaymentReceipt"
            component={ViewPaymentReceipt}
         />
         <DashboardStack.Screen
            name="AdminHostelRulesDashboard"
            component={HostelRules}
         />
         <DashboardStack.Screen
            name="AdminNotifications"
            component={AdminNotifications}
         />
      </DashboardStack.Navigator>
   );
};

export const AdminRooms = () => {
   return (
      <RoomsStack.Navigator
         initialRouteName="AdminRooms"
         screenOptions={{
            headerShown: false,
         }}
      >
         <RoomsStack.Screen name="AdminRooms" component={Rooms} />
         <RoomsStack.Screen
            name="AdminPendingRoomRequests"
            component={PendingRoomRequests}
         />
         <RoomsStack.Screen
            name="AdminPendingRoomChecklist"
            component={PendingRoomChecklist}
         />
         <RoomsStack.Screen
            name="AdminAcceptedRoomRequests"
            component={AcceptedRoomRequests}
         />
         <RoomsStack.Screen name="AdminRoomDetails" component={RoomDetails} />
         <RoomsStack.Screen name="AdminVacateRoom" component={VacateRoom} />
         <RoomsStack.Screen
            name="AdminRoomAllocation"
            component={RoomAllocation}
         />
         <RoomsStack.Screen
            name="AdminRoomChecklistForm"
            component={RoomChecklistForm}
         />
      </RoomsStack.Navigator>
   );
};

export const AdminAnnouncements = () => {
   return (
      <AnnouncementStack.Navigator
         initialRouteName="AdminAnnouncements"
         screenOptions={{
            headerShown: false,
         }}
      >
         <AnnouncementStack.Screen
            name="AdminAnnouncements"
            component={Announcements}
         />
         <AnnouncementStack.Screen
            name="AdminAddAnnouncement"
            component={AddAnnouncement}
         />
         <AnnouncementStack.Screen
            name="AdminViewAnnouncement"
            component={ViewAnnouncement}
         />
      </AnnouncementStack.Navigator>
   );
};

export const AdminComplains = () => {
   return (
      <ComplainsStack.Navigator
         initialRouteName="AdminComplains"
         screenOptions={{
            headerShown: false,
         }}
      >
         <ComplainsStack.Screen name="AdminComplains" component={Complains} />
         <ComplainsStack.Screen
            name="AdminViewComplain"
            component={ViewComplain}
         />
      </ComplainsStack.Navigator>
   );
};

export const AdminLatePasses = () => {
   return (
      <LatePassesStack.Navigator
         initialRouteName="AdminLatePasses"
         screenOptions={{
            headerShown: false,
         }}
      >
         <LatePassesStack.Screen
            name="AdminLatePasses"
            component={LatePasses}
         />
         <LatePassesStack.Screen
            name="AdminViewLatePass"
            component={ViewLatePass}
         />
      </LatePassesStack.Navigator>
   );
};

export const AdminSettings = () => {
   return (
      <SettingsStack.Navigator
         initialRouteName="AdminSettings"
         screenOptions={{
            headerShown: false,
         }}
      >
         <SettingsStack.Screen name="AdminSettings" component={Settings} />
         <SettingsStack.Screen
            name="AdminChangeProfileDetails"
            component={ChangeProfileDetails}
         />
         <SettingsStack.Screen
            name="AdminChangePassword"
            component={ChangePassword}
         />
      </SettingsStack.Navigator>
   );
};

export const AdminNotifications = () => {
   return (
      <NotificationsStack.Navigator
         initialRouteName="AdminNotificationsView"
         screenOptions={{
            headerShown: false,
         }}
      >
         <NotificationsStack.Screen
            name="AdminNotificationsView"
            component={Notifications}
         />
      </NotificationsStack.Navigator>
   );
};
