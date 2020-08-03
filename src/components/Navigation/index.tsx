import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex } from '../Globals';
import Logo from '../Logo';
import NavigationItem from './NavigationItem';
import * as Styled from './style';

type NavigationItem = {
  name: string;
  link: string;
}

const navigation: Array<NavigationItem> = [
  {
    name: 'About us',
    link: '/about-us'
  },
  {
    name: 'Our work',
    link: '/our-work'
  }
];

interface Props {
  dark: boolean;
}

const Sidebar: React.FC<Props> = ({ dark }) => (
  <Styled.SideBarInner
    bg={dark ? "#000" : "#FFF"}
    as="aside"
    p={[6, 6, 8]}
  >
    <Flex
      flexWrap="nowrap"
      flexDirection={['row', 'row', 'row', 'column']}
      alignItems={['center', 'center', 'center', 'flex-start']}
      justifyContent="space-between"
    >
      <Box width={['3rem', '4rem', '5rem', '6rem']}>
        <Link to="/" aria-label="Looney Bros. Photography, Back to Home">
          <Logo color={dark ? "#FFF" : "#000"} />
        </Link>
      </Box>
      
      <Styled.Nav
        color={dark ? "#000" : "#FFF"}
        mt={[0, 0, 0, 10]}
        as="nav"
        flexWrap="nowrap"
        flexDirection={['row', 'row', 'row', 'column']}
        alignItems="flex-start"
      >
        {navigation.map(({ name, link }) => (
          <NavigationItem key={name} name={name} link={link} />
        ))}
      </Styled.Nav>
    </Flex>
  </Styled.SideBarInner>
);

export default Sidebar;
