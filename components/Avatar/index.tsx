
import * as React from 'react';
import InternalAvatar, { AvatarProps } from './avatar';
import Group from './avatar-group';


interface CompoundedComponent
  extends React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLElement>> {
  Group: typeof Group;
}

const Avatar = InternalAvatar as CompoundedComponent;
Avatar.Group = Group;


export default Avatar;