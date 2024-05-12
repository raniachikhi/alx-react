import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications } from './actions/notificationActions';

export const NotificationsContainer = ({ notifications, fetchNotifications }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return <Notifications notifications={notifications} />;
};

const mapStateToProps = state => ({
  notifications: state.notifications
});

const mapDispatchToProps = {
  fetchNotifications
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

