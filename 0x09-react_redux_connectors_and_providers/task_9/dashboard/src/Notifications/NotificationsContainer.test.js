import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';
import { fetchNotifications } from './actions/notificationActions';

describe('NotificationsContainer', () => {
  it('should fetch notifications on mount', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(<NotificationsContainer fetchNotifications={fetchNotificationsMock} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});

